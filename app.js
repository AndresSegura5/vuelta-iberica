(() => {
  const T = window.TRIP;
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const fmtH = h => { const m = Math.round(h * 60); return `${Math.floor(m / 60)} h ${String(m % 60).padStart(2, '0')} min`; };
  const color = i => `hsl(${Math.round(188 - (i / (T.days.length - 1)) * 168)} 68% 42%)`;
  const nf = n => Math.round(n).toLocaleString('es-ES');

  /* ───── Hero stats ───── */
  const totalKm = () => T.days.reduce((a, d) => a + d.km, 0);
  function renderStats() {
    $('#stats').innerHTML = [
      [`<span data-total>${nf(totalKm())}</span>`, 'km aprox.'],
      ['15', 'días'], ['14', 'noches'], ['2', 'países'], ['1', 'concierto']
    ].map(([b, s]) => `<div class="stat"><b>${b}</b><span>${s}</span></div>`).join('');
  }

  /* ───── Barra de días + tarjetas ───── */
  function renderDays() {
    const chips = $('#chips'), box = $('#days'), bars = $('#bars');
    const max = Math.max(...T.days.map(d => d.km));
    T.days.forEach((d, i) => {
      d.color = color(i);
      const c = el('button', 'chip', `${d.n} · ${d.date.split(' ')[1]}`);
      c.style.setProperty('--c', d.color); c.dataset.n = d.n; c.title = `${d.from} → ${d.to}`;
      c.onclick = () => document.getElementById('day-' + d.n).scrollIntoView();
      chips.appendChild(c);

      const b = el('div', 'bar', `<em data-bkm="${d.n}">${d.km ? nf(d.km) : ''}</em><i data-bbar="${d.n}" style="height:${Math.max(3, d.km / max * 100)}%"></i><small>${d.n}</small>`);
      b.style.setProperty('--c', d.color); b.title = `Día ${d.n}: ${d.from} → ${d.to}`;
      b.onclick = () => document.getElementById('day-' + d.n).scrollIntoView();
      bars.appendChild(b);

      const art = el('article', 'day'); art.id = 'day-' + d.n; art.dataset.n = d.n; art.style.setProperty('--c', d.color);
      const same = d.from === d.to;
      art.innerHTML = `
        <div class="day-head">
          <div class="num">${String(d.n).padStart(2, '0')}</div>
          <div>
            <div class="date">${d.date} oct</div>
            <h3 class="route">${same ? d.from : `${d.from}<span class="arr">→</span>${d.to}`}</h3>
            <div class="country">${d.country}</div>
          </div>
        </div>
        <div class="pills">
          <span class="pill main" data-pkm="${d.n}">${d.km ? '~' + nf(d.km) + ' km' : 'Sin conducir'}</span>
          ${d.km ? `<span class="pill" data-ph="${d.n}">${fmtH(d.h)}</span>` : ''}
          <span class="pill">${d.tag}</span>
        </div>
        <p class="summary">${d.summary}</p>
        <div class="night">🛏️ <b>Noche en ${d.night.name}.</b> ${d.night.note}</div>
        <ul class="stops">
          ${d.stops.map((s, k) => `
            <li class="stop">
              <div class="stop-top"><span class="time">${s.t}</span><h4>${s.name}</h4>
                <button class="pin" title="Ver en el mapa" data-day="${d.n}" data-stop="${k}">📍</button></div>
              <p>${s.text}</p>
              ${s.tip ? `<div class="tip">💡 ${s.tip}</div>` : ''}
            </li>`).join('')}
        </ul>`;
      box.appendChild(art);
    });
  }

  function renderExtras() {
    $('#tips').innerHTML = T.tips.map(t => `<div class="tip-card"><div class="ic">${t.icon}</div><h4>${t.title}</h4><p>${t.text}</p></div>`).join('');
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem('vi-check') || '{}'); } catch (e) {}
    const ul = $('#checklist');
    T.checklist.forEach((txt, i) => {
      const li = el('li', '', `<label><input type="checkbox" ${saved[i] ? 'checked' : ''}><span>${txt}</span></label>`);
      li.querySelector('input').onchange = e => {
        saved[i] = e.target.checked;
        try { localStorage.setItem('vi-check', JSON.stringify(saved)); } catch (er) {}
      };
      ul.appendChild(li);
    });
  }

  /* ───── Mapa ───── */
  let map, active = 0;
  const all = L.featureGroup();

  function initMap() {
    map = L.map('map', { zoomControl: true, scrollWheelZoom: true }).setView([40.2, -5.5], 6);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const seen = {};
    const spread = c => { const k = c.join(','); const n = seen[k] = (seen[k] || 0) + 1; return [c[0] - (n - 1) * 0.06, c[1] + (n - 1) * 0.06]; };
    spread(T.start.coords);
    T.days.forEach((d, i) => {
      d.group = L.layerGroup().addTo(map);
      d.stopLayer = L.layerGroup();
      if (d.route) {
        const pts = d.route.map(p => [p[0], p[1]]);
        d.casing = L.polyline(pts, { color: '#fff', weight: 9, opacity: .9, lineCap: 'round', lineJoin: 'round' }).addTo(d.group);
        d.line = L.polyline(pts, { color: d.color, weight: 5, opacity: .9, lineCap: 'round', lineJoin: 'round', dashArray: '2 8' }).addTo(d.group);
        d.line.on('click', () => goTo(d.n));
        all.addLayer(d.line);
      }
      const big = d.n === 12;
      const mk = L.marker(spread(d.night.coords), {
        icon: L.divIcon({ className: '', iconSize: [32, 32], iconAnchor: [16, 16],
          html: `<div class="mk ${big ? 'big' : ''}" style="--c:${big ? '#d9643a' : d.color}">${big ? '♪' : d.n}</div>` }),
        zIndexOffset: big ? 1000 : 0
      }).addTo(d.group);
      mk.bindPopup(`<b>Día ${d.n} · ${d.night.name}</b><br>${d.from === d.to ? d.from : d.from + ' → ' + d.to}${big ? '<br>🎵 Morat · 20:00' : ''}`);
      mk.on('click', () => goTo(d.n));
      d.stops.forEach(s => {
        if (!s.coords) return;
        s.marker = L.circleMarker(s.coords, { radius: 6, color: d.color, weight: 3, fillColor: '#fff', fillOpacity: 1 })
          .bindTooltip(s.name, { direction: 'top', offset: [0, -6] }).addTo(d.stopLayer);
      });
      all.addLayer(mk);
    });

    const start = L.marker(T.start.coords, {
      icon: L.divIcon({ className: '', iconSize: [38, 38], iconAnchor: [19, 19], html: `<div class="mk big" style="--c:#0b3a4a">🏁</div>` })
    }).addTo(map).bindPopup('<b>Málaga</b><br>Salida 10 oct · llegada 24 oct');
    all.addLayer(start);
    showAll();
  }

  function showAll() {
    active = 0;
    T.days.forEach(d => {
      map.removeLayer(d.stopLayer);
      if (d.line) { d.line.setStyle({ opacity: .9, weight: 5 }); d.casing.setStyle({ opacity: .9, weight: 9 }); }
    });
    markActive(0);
    map.flyToBounds(all.getBounds(), { padding: [30, 30], duration: .9 });
    $('#mapCard').innerHTML = `<b>Málaga ↺ Málaga</b><span>${nf(totalKm())} km · 15 días · toca un día para verlo</span>`;
    $('#mapCard').style.setProperty('--c', '#0b3a4a');
  }

  function setActive(n) {
    if (n === active) return;
    active = n;
    const d = T.days[n - 1];
    T.days.forEach(x => {
      const on = x === d;
      if (x.line) {
        x.line.setStyle({ opacity: on ? 1 : .28, weight: on ? 6 : 4, dashArray: on ? null : null });
        x.casing.setStyle({ opacity: on ? .95 : .25, weight: on ? 10 : 7 });
        if (on) { x.casing.bringToFront(); x.line.bringToFront(); }
      }
      if (on) x.stopLayer.addTo(map); else map.removeLayer(x.stopLayer);
    });
    const pts = d.line ? d.line.getBounds() : L.latLngBounds([d.night.coords]).pad(.01);
    if (d.line) map.flyToBounds(pts, { padding: [50, 50], duration: .9, maxZoom: 11 });
    else map.flyTo(d.night.coords, 12, { duration: .9 });
    markActive(n);
    $('#mapCard').style.setProperty('--c', d.color);
    $('#mapCard').innerHTML = `<b>Día ${d.n} · ${d.from === d.to ? d.from : d.from + ' → ' + d.to}</b><span>${d.km ? '~' + nf(d.km) + ' km · ' + fmtH(d.h) : 'Sin conducir'} · noche en ${d.night.name}</span>`;
  }

  function markActive(n) {
    document.querySelectorAll('.day').forEach(a => a.classList.toggle('active', +a.dataset.n === n));
    document.querySelectorAll('.chip').forEach(c => {
      const on = +c.dataset.n === n;
      c.classList.toggle('active', on);
      if (on) { const p = c.parentElement; p.scrollTo({ left: c.offsetLeft - p.clientWidth / 2 + c.clientWidth / 2, behavior: 'smooth' }); }
    });
  }

  function goTo(n) { document.getElementById('day-' + n).scrollIntoView(); }

  /* ───── Interacciones ───── */
  function wire() {
    $('#btnAll').onclick = () => { window.scrollTo({ top: $('#ruta').offsetTop - 58, behavior: 'smooth' }); showAll(); };
    document.addEventListener('click', e => {
      const p = e.target.closest('.pin'); if (!p) return;
      const d = T.days[+p.dataset.day - 1], s = d.stops[+p.dataset.stop];
      setActive(d.n);
      if (s.coords) { map.flyTo(s.coords, 14, { duration: .9 }); setTimeout(() => s.marker && s.marker.openTooltip(), 950); }
    });
    const io = new IntersectionObserver(es => {
      es.forEach(en => { if (en.isIntersecting) setActive(+en.target.dataset.n); });
    }, { rootMargin: '-35% 0px -55% 0px' });
    document.querySelectorAll('.day').forEach(a => io.observe(a));
  }

  /* ───── Rutas reales por carretera (OSRM) ───── */
  async function fetchRoute(d) {
    const key = 'vi-osrm3-' + d.n + '-' + d.route.map(p => p.join(',')).join('|').length;
    try { const c = localStorage.getItem(key); if (c) return JSON.parse(c); } catch (e) {}
    const q = d.route.map(p => p[1] + ',' + p[0]).join(';');
    const r = await fetch(`https://router.project-osrm.org/route/v1/driving/${q}?overview=full&geometries=geojson`);
    const j = await r.json();
    if (j.code !== 'Ok') throw new Error(j.code);
    const rt = j.routes[0];
    const out = { coords: rt.geometry.coordinates.map(c => [c[1], c[0]]), km: rt.distance / 1000, h: rt.duration / 3600 };
    try { localStorage.setItem(key, JSON.stringify(out)); } catch (e) {}
    return out;
  }

  async function loadRoutes() {
    const st = $('#liveStatus');
    let ok = 0, fail = 0;
    for (const d of T.days) {
      if (!d.route) continue;
      try {
        const r = await fetchRoute(d);
        d.casing.setLatLngs(r.coords); d.line.setLatLngs(r.coords); d.line.setStyle({ dashArray: null });
        d.km = r.km * 1.0; d.h = r.h * 1.1; ok++;
        const pk = $(`[data-pkm="${d.n}"]`); if (pk) pk.textContent = '~' + nf(d.km) + ' km';
        const ph = $(`[data-ph="${d.n}"]`); if (ph) ph.textContent = fmtH(d.h);
      } catch (e) { fail++; d.line.setStyle({ dashArray: '6 8' }); }
    }
    const max = Math.max(...T.days.map(d => d.km));
    T.days.forEach(d => {
      const b = $(`[data-bbar="${d.n}"]`); if (b) b.style.height = Math.max(3, d.km / max * 100) + '%';
      const t = $(`[data-bkm="${d.n}"]`); if (t) t.textContent = d.km ? nf(d.km) : '';
    });
    const tot = $('[data-total]'); if (tot) tot.textContent = nf(totalKm());
    if (!ok) { st.textContent = 'sin conexión: trazado aproximado'; st.className = 'live bad'; }
    else if (fail) { st.textContent = `${ok} de ${ok + fail} tramos calculados`; st.className = 'live'; }
    else { st.textContent = 'rutas calculadas por carretera'; st.className = 'live ok'; }
    if (!active) { $('#mapCard').innerHTML = `<b>Málaga ↺ Málaga</b><span>${nf(totalKm())} km · 15 días · toca un día para verlo</span>`; }
  }

  renderStats(); renderDays(); renderExtras(); initMap(); wire(); loadRoutes();
})();
