/* Datos del viaje. Coordenadas [lat, lng]. km/h son estimaciones: la web las recalcula por carretera al cargar el mapa. */
window.TRIP = {
  title: "La Vuelta Ibérica",
  dates: "10 — 24 octubre 2026",
  concert: { name: "Morat · Navarra Arena", when: "Mié 21 oct · 20:00", city: "Pamplona" },
  start: { name: "Málaga", coords: [36.7213, -4.4214] },
  days: [
    {
      n: 1, date: "Sáb 10", from: "Málaga", to: "Évora", country: "España → Portugal",
      km: 520, h: 5.5, tag: "Día de avance",
      route: [[36.7213,-4.4214],[37.3891,-5.9845],[38.8794,-6.9707],[38.5714,-7.9135]],
      night: { name: "Évora", coords: [38.5714,-7.9135], note: "Camping Orbitur Évora o área de autocaravanas junto al casco histórico (confirmar apertura en octubre)." },
      summary: "Etapa larga y cómoda por autovía: A-45 hasta Sevilla, A-66 (Vía de la Plata) hasta Badajoz y entrada en Portugal por Elvas. Sales temprano y comes en ruta.",
      stops: [
        { t: "Ruta", name: "Sevilla – Badajoz", coords: [37.3891,-5.9845], text: "Parada para repostar y comer en Sevilla norte o Mérida. Entre Sevilla y Badajoz son ~210 km de autovía muy fácil.", tip: "En Portugal es 1 hora menos: ganas una hora de luz." },
        { t: "Tarde", name: "Templo romano de Diana", coords: [38.5720,-7.9072], text: "Paseo de atardecer por el casco histórico (UNESCO): templo romano, Catedral (Sé) y Praça do Giraldo." },
        { t: "Noche", name: "Capela dos Ossos", coords: [38.5693,-7.9060], text: "Capilla decorada con huesos humanos en la Igreja de São Francisco. Lo dejamos para la mañana siguiente.", tip: "Peajes portugueses: electrónicos. Activa Via Verde / EASYToll o paga en CTT al entrar." }
      ]
    },
    {
      n: 2, date: "Dom 11", from: "Évora", to: "Lisboa", country: "Portugal",
      km: 140, h: 1.8, tag: "Mañana Évora · tarde Lisboa",
      route: [[38.5714,-7.9135],[38.7223,-9.1393]],
      night: { name: "Lisboa (Monsanto)", coords: [38.7253,-9.1870], note: "Parque de Campismo de Monsanto: tranquilo, con bus directo al centro." },
      summary: "Mañana en Évora y salida a mediodía por la A-6/A-2. Por la tarde, Belém (los Jerónimos abren los domingos y cierran los lunes, por eso lo hacemos hoy).",
      stops: [
        { t: "09:30", name: "Évora: Capela dos Ossos y Sé", coords: [38.5693,-7.9060], text: "Capela dos Ossos, Catedral y Praça do Giraldo con calma antes de salir." },
        { t: "15:00", name: "Belém", coords: [38.6979,-9.2063], text: "Mosteiro dos Jerónimos, Torre de Belém por fuera y los míticos pasteis de Belém.", tip: "Verifica horario de última entrada de los Jerónimos (suele ser ~17:00 en otoño)." },
        { t: "19:00", name: "Miradouro de Santa Luzia", coords: [38.7117,-9.1303], text: "Atardecer sobre Alfama y el Tajo. Cena en la zona de Baixa/Chiado." }
      ]
    },
    {
      n: 3, date: "Lun 12", from: "Lisboa", to: "Lisboa", country: "Portugal",
      km: 0, h: 0, tag: "Día entero sin conducir",
      route: null,
      night: { name: "Lisboa (Monsanto)", coords: [38.7253,-9.1870], note: "Segunda noche en el mismo camping: sin mover la autocaravana." },
      summary: "Día completo para disfrutar de Lisboa a pie y en tranvía. Los lunes cierran Jerónimos y Torre de Belém, así que hoy es de barrios y miradores.",
      stops: [
        { t: "09:30", name: "Castelo de São Jorge y Alfama", coords: [38.7139,-9.1334], text: "El castillo con las mejores vistas de la ciudad, Sé de Lisboa y callejeo por Alfama.", tip: "Llega a la apertura para evitar colas." },
        { t: "13:30", name: "Baixa · Chiado", coords: [38.7106,-9.1394], text: "Praça do Comércio, Rua Augusta, Elevador de Santa Justa y librerías históricas. Comer en el Time Out Market o en una tasca." },
        { t: "17:00", name: "Tranvía 28 y LX Factory", coords: [38.7035,-9.1789], text: "Trayecto clásico en tranvía por las colinas y cierre de día en LX Factory (tiendas, cafés, arte urbano)." }
      ]
    },
    {
      n: 4, date: "Mar 13", from: "Lisboa", to: "Oporto", country: "Portugal",
      km: 320, h: 3.6, tag: "Coimbra y llegada a Oporto",
      route: [[38.7223,-9.1393],[40.2033,-8.4103],[41.1579,-8.6291]],
      night: { name: "Oporto / Gaia", coords: [41.1383,-8.6165], note: "Camping de Oporto (p. ej. Prelada) o camping en Vila Nova de Gaia (a confirmar)." },
      summary: "Salida temprano de Lisboa por la A-1, parada en Coimbra y tarde en Oporto. Es la única etapa larga de Portugal.",
      stops: [
        { t: "11:00", name: "Coimbra: Universidade", coords: [40.2074,-8.4257], text: "Universidad histórica (UNESCO) con la Biblioteca Joanina y vistas sobre el Mondego. Comida en el casco antiguo.", tip: "Sube a la universidad a pie desde la zona baja: no hay sitio para autocaravanas arriba." },
        { t: "16:00", name: "Ribeira y Ponte Luís I", coords: [41.1405,-8.6137], text: "Primer paseo por la Ribeira y cruce del puente de dos niveles hasta Gaia." },
        { t: "18:00", name: "Bodegas de Vila Nova de Gaia", coords: [41.1383,-8.6165], text: "Cata de vino de Oporto con vistas al atardecer." }
      ]
    },
    {
      n: 5, date: "Mié 14", from: "Oporto", to: "Santiago", country: "Portugal → España",
      km: 240, h: 3.2, tag: "Despedida de Portugal",
      route: [[41.1579,-8.6291],[42.0306,-8.6431],[42.8805,-8.5457]],
      night: { name: "Santiago de Compostela", coords: [42.8805,-8.5457], note: "Camping As Cancelas, a pocos minutos del casco histórico (confirmar apertura en octubre)." },
      summary: "Mañana en Oporto, salida a mediodía y entrada en Galicia por Valença/Tui. En España hay que adelantar el reloj una hora. Tarde de llegada a Santiago.",
      stops: [
        { t: "09:30", name: "São Bento, Lello y Clérigos", coords: [41.1468,-8.6150], text: "Azulejos de São Bento, Livraria Lello y subida a la Torre dos Clérigos.", tip: "La Lello exige entrada con hora: reserva online antes." },
        { t: "13:30", name: "Valença do Minho", coords: [42.0306,-8.6431], text: "Fortaleza amurallada sobre el Miño, frente a Tui. Comida y despedida de Portugal." },
        { t: "17:30", name: "Plaza del Obradoiro y Catedral", coords: [42.8806,-8.5446], text: "La Catedral abre todos los días de 07:00 a 21:00 y la entrada es gratuita. Visita el Sepulcro del Apóstol y el abrazo al Santo.", tip: "El Pórtico de la Gloria requiere reserva. La Misa del Peregrino es a las 12:00 y 19:30." },
        { t: "20:00", name: "Casco histórico", coords: [42.8809,-8.5436], text: "Rúa do Franco, Praza das Praterías y cena de pulpo o empanada." }
      ]
    },
    {
      n: 6, date: "Jue 15", from: "Santiago", to: "Fisterra", country: "España · Galicia",
      km: 95, h: 1.7, tag: "Fin del mundo",
      route: [[42.8805,-8.5457],[42.9061,-9.2635]],
      night: { name: "Fisterra", coords: [42.9061,-9.2635], note: "Área de autocaravanas o camping en Fisterra / Sardiñeiro (a confirmar)." },
      summary: "Mañana tranquila en Santiago y tarde en la Costa da Morte, para ver el atardecer en el faro de Fisterra, el fin del mundo del Camino.",
      stops: [
        { t: "09:30", name: "Mercado de Abastos y Pórtico de la Gloria", coords: [42.8820,-8.5420], text: "Desayuno en el mercado y, si has reservado, visita al Pórtico de la Gloria. Misa del peregrino a las 12:00." },
        { t: "15:30", name: "Muxía (opcional)", coords: [43.1056,-9.2166], text: "Santuario de la Virxe da Barca sobre el mar. Solo si vas bien de tiempo." },
        { t: "18:30", name: "Faro de Fisterra", coords: [42.8827,-9.2736], text: "Kilómetro 0 del Camino y atardecer sobre el Atlántico.", tip: "Llega con tiempo para aparcar y volver con luz." }
      ]
    },
    {
      n: 7, date: "Vie 16", from: "Fisterra", to: "Ribadeo", country: "España · Galicia",
      km: 280, h: 3.7, tag: "Praia das Catedrais",
      route: [[42.9061,-9.2635],[43.0097,-7.5568],[43.5352,-7.0420]],
      night: { name: "Ribadeo", coords: [43.5352,-7.0420], note: "Área de autocaravanas o camping en la ría de Ribadeo (a confirmar)." },
      summary: "Cruzas Galicia de oeste a este. Parada en Lugo y llegada a Ribadeo con tiempo para As Catedrais, uno de los espectáculos naturales más bellos del norte.",
      stops: [
        { t: "13:00", name: "Lugo", coords: [43.0097,-7.5568], text: "Muralla romana (UNESCO) para estirar las piernas y comer." },
        { t: "17:00", name: "Praia das Catedrais", coords: [43.5545,-7.1569], text: "Arcos de roca erosionados por el mar. Solo se camina bien con marea baja.", tip: "Consulta la tabla de mareas y comprueba si requiere autorización previa en esas fechas." }
      ]
    },
    {
      n: 8, date: "Sáb 17", from: "Ribadeo", to: "Oviedo", country: "España · Asturias",
      km: 175, h: 2.6, tag: "Cudillero y Oviedo",
      route: [[43.5352,-7.0420],[43.5622,-6.1450],[43.3614,-5.8494]],
      night: { name: "Oviedo", coords: [43.3614,-5.8494], note: "Área de autocaravanas o camping cerca de Oviedo (a confirmar)." },
      summary: "Costa occidental asturiana: pueblo de pescadores de Cudillero y noche en Oviedo para cenar sidra y platos asturianos.",
      stops: [
        { t: "12:00", name: "Cudillero", coords: [43.5622,-6.1450], text: "Pueblo en anfiteatro sobre el puerto. Pescado fresco en el muelle.", tip: "Aparca arriba, a la entrada del pueblo: abajo no se puede con autocaravana." },
        { t: "17:00", name: "Casco antiguo de Oviedo", coords: [43.3614,-5.8494], text: "Catedral, plaza del Fontán y la calle Gascona, el bulevar de la sidra." }
      ]
    },
    {
      n: 9, date: "Dom 18", from: "Oviedo", to: "Covadonga", country: "España · Asturias",
      km: 90, h: 1.5, tag: "Picos de Europa",
      route: [[43.3614,-5.8494],[43.3510,-5.1290],[43.3086,-5.0553]],
      night: { name: "Cangas de Onís", coords: [43.3510,-5.1290], note: "Camping o área de autocaravanas en Cangas de Onís o Covadonga (a confirmar)." },
      summary: "Mañana en Oviedo y tarde en Covadonga. En octubre los hayedos de Picos de Europa están en pleno otoño.",
      stops: [
        { t: "10:00", name: "Catedral de Oviedo y Santa María del Naranco", coords: [43.3614,-5.8494], text: "Catedral de San Salvador y, en la falda del monte, la iglesia prerrománica de Santa María del Naranco." },
        { t: "14:30", name: "Cangas de Onís", coords: [43.3510,-5.1290], text: "Puente romano con la Cruz de la Victoria. Comer una fabada o un cachopo." },
        { t: "16:30", name: "Santuario de Covadonga", coords: [43.3086,-5.0553], text: "Basílica, Santa Cueva y cascada. Lugar fundacional de Asturias." }
      ]
    },
    {
      n: 10, date: "Lun 19", from: "Covadonga", to: "Santander", country: "España · Asturias → Cantabria",
      km: 180, h: 2.7, tag: "Lagos y Santillana",
      route: [[43.3086,-5.0553],[43.3893,-4.1051],[43.4623,-3.8099]],
      night: { name: "Santander", coords: [43.4623,-3.8099], note: "Camping en la zona de Santander / Somo (confirmar apertura en octubre)." },
      summary: "Mañana en los Lagos de Covadonga y salida a mediodía hacia Cantabria, con parada en Santillana del Mar.",
      stops: [
        { t: "09:30", name: "Lagos de Covadonga", coords: [43.2705,-4.9847], text: "Enol y Ercina, dentro de Picos de Europa. Ruta circular sencilla de ~6 km con miradores.", tip: "El acceso en vehículo está regulado y la carretera es estrecha: pregunta en la oficina de turismo si se puede subir o toca bus." },
        { t: "15:30", name: "Santillana del Mar", coords: [43.3893,-4.1051], text: "Villa medieval de piedra, con la Colegiata y casas blasonadas." },
        { t: "18:00", name: "Santander: El Sardinero y la Magdalena", coords: [43.4723,-3.7870], text: "Paseo por la bahía, península de la Magdalena y cena de rabas." }
      ]
    },
    {
      n: 11, date: "Mar 20", from: "Santander", to: "San Sebastián", country: "España · Cantabria / Euskadi",
      km: 205, h: 2.8, tag: "Bilbao y San Sebastián",
      route: [[43.4623,-3.8099],[43.2630,-2.9350],[43.3183,-1.9812]],
      night: { name: "San Sebastián", coords: [43.3183,-1.9812], note: "Camping Igueldo, sobre la bahía de La Concha (confirmar apertura)." },
      summary: "Día mucho más ligero que antes. Mañana en Bilbao y tarde en San Sebastián con luz.",
      stops: [
        { t: "11:00", name: "Bilbao: Guggenheim y ría", coords: [43.2687,-2.9340], text: "Guggenheim y Puppy por fuera, paseo junto a la ría.", tip: "Mide la altura de tu autocaravana antes de entrar en parkings subterráneos." },
        { t: "13:00", name: "Casco Viejo de Bilbao", coords: [43.2582,-2.9230], text: "Siete Calles, Plaza Nueva y pintxos en el Mercado de la Ribera." },
        { t: "17:30", name: "San Sebastián: La Concha", coords: [43.3180,-1.9870], text: "Playa de la Concha, Ayuntamiento y la bahía al atardecer." },
        { t: "19:30", name: "Parte Vieja", coords: [43.3235,-1.9840], text: "Ruta de pintxos: Gandarias, La Cuchara de San Telmo…" }
      ]
    },
    {
      n: 12, date: "Mié 21", from: "San Sebastián", to: "Pamplona", country: "España · Navarra",
      km: 95, h: 1.3, tag: "Concierto Morat",
      route: [[43.3183,-1.9812],[42.8125,-1.6458]],
      night: { name: "Pamplona", coords: [42.8125,-1.6458], note: "Camping Ezcaba (Eusa) o área de autocaravanas de Pamplona. Reserva con antelación por el concierto." },
      summary: "El día fijo del viaje. Solo 1 h 15 de carretera. Mañana relajada en San Sebastián, llegada a Pamplona a media tarde y concierto de Morat a las 20:00.",
      stops: [
        { t: "10:00", name: "Monte Igueldo o Monte Urgull", coords: [43.3223,-1.9876], text: "Mirador clásico sobre La Concha antes de salir." },
        { t: "15:00", name: "Casco antiguo de Pamplona", coords: [42.8187,-1.6444], text: "Plaza del Castillo, Calle Estafeta (la del encierro), Catedral y Café Iruña." },
        { t: "18:30", name: "Rumbo a Navarra Arena", coords: [42.7995,-1.6350], text: "Concierto de Morat, 20:00.", tip: "Verifica dirección y accesos del recinto. Ve en taxi o bus urbano y deja la autocaravana en el camping." }
      ]
    },
    {
      n: 13, date: "Jue 22", from: "Pamplona", to: "Teruel", country: "España · Aragón",
      km: 345, h: 3.8, tag: "Zaragoza y Teruel",
      route: [[42.8125,-1.6458],[41.6488,-0.8891],[40.3456,-1.1065]],
      night: { name: "Teruel", coords: [40.3456,-1.1065], note: "Área de autocaravanas de Teruel (a confirmar)." },
      summary: "Empieza el regreso por el interior. Parada larga en Zaragoza y noche en Teruel, capital del mudéjar.",
      stops: [
        { t: "11:30", name: "Zaragoza: Basílica del Pilar", coords: [41.6563,-0.8785], text: "Basílica del Pilar, La Seo, la Aljafería y tapeo en El Tubo." },
        { t: "18:00", name: "Teruel: Plaza del Torico", coords: [40.3446,-1.1070], text: "Torres mudéjares (UNESCO), la escalinata y el mausoleo de los Amantes." }
      ]
    },
    {
      n: 14, date: "Vie 23", from: "Teruel", to: "Murcia", country: "España · Aragón → Murcia",
      km: 430, h: 5.0, tag: "Albarracín y descenso",
      route: [[40.3456,-1.1065],[40.4067,-1.4433],[38.9943,-1.8585],[37.9922,-1.1307]],
      night: { name: "Murcia", coords: [37.9922,-1.1307], note: "Camping o área de autocaravanas en Murcia (a confirmar)." },
      summary: "Etapa larga: mañana en Albarracín, uno de los pueblos más bonitos de España, y descenso por Albacete hasta Murcia.",
      stops: [
        { t: "09:30", name: "Albarracín", coords: [40.4067,-1.4433], text: "Casco medieval rojizo, murallas y calles empinadas. Café y paseo antes de bajar al sur.", tip: "Aparca fuera del casco: calles estrechas." },
        { t: "14:00", name: "Albacete (parada de comida)", coords: [38.9943,-1.8585], text: "Parada de comida: atascaburras, gazpachos manchegos y la Catedral de San Juan." },
        { t: "19:00", name: "Murcia: Catedral y plaza Cardenal Belluga", coords: [37.9847,-1.1284], text: "Fachada barroca de la catedral y tapeo por el centro." }
      ]
    },
    {
      n: 15, date: "Sáb 24", from: "Murcia", to: "Málaga", country: "España · Murcia → Andalucía",
      km: 410, h: 4.5, tag: "Regreso a casa",
      route: [[37.9922,-1.1307],[37.6779,-1.7017],[37.1773,-3.5986],[36.7213,-4.4214]],
      night: { name: "Málaga · fin del viaje", coords: [36.7213,-4.4214], note: "Fin del viaje: Málaga." },
      summary: "Último tramo por Lorca, Granada y Málaga. Puedes parar en Guadix (barrio de las cuevas) o hacer una visita rápida al castillo de Lorca.",
      stops: [
        { t: "10:30", name: "Castillo de Lorca (opcional)", coords: [37.6759,-1.7010], text: "La Fortaleza del Sol, con vistas a la ciudad y parque temático medieval. Opcional si vas bien de tiempo." },
        { t: "13:30", name: "Guadix · Barrio de las Cuevas", coords: [37.3000,-3.1330], text: "Casas-cueva y la Alcazaba. Parada de comida a medio camino." },
        { t: "17:00", name: "Llegada a Málaga", coords: [36.7213,-4.4214], text: "Fin de los 15 días y de la vuelta ibérica." }
      ]
    }
  ],
  tips: [
    { icon: "📏", title: "Altura y peso", text: "Mide el vehículo y apúntalo en el salpicadero: parkings, túneles, puentes y peajes dependen de ello." },
    { icon: "🇵🇹", title: "Portugal: pernocta", text: "Prohibida en espacios protegidos (Red Natura 2000) y en zonas costeras salvo áreas habilitadas. Límite general de 48 h por municipio." },
    { icon: "🛣️", title: "Peajes", text: "Muchas autovías portuguesas tienen peaje electrónico. Contrata Via Verde / EASYToll o paga en CTT en 3 días." },
    { icon: "🕒", title: "Cambio horario", text: "Portugal va 1 h por detrás de España. El 25 de octubre cambian los relojes: no afecta al viaje." },
    { icon: "🚿", title: "Agua y vaciado", text: "Llena aguas grises/negras en cada camping o área de servicio; evita depender de una sola." },
    { icon: "🌧️", title: "Tiempo en octubre", text: "Esperable lluvia en Galicia, Asturias y País Vasco. Planea el Plan B: museos, mercados, bodegas." }
  ],
  checklist: [
    "Reservar entradas Livraria Lello (Oporto)",
    "Reservar Pórtico de la Gloria (Santiago)",
    "Comprobar mareas para As Catedrais (Ribadeo)",
    "Preguntar acceso en vehículo a los Lagos de Covadonga",
    "Reservar camping Pamplona para la noche del 21",
    "Dispositivo de peaje Via Verde / EASYToll",
    "Confirmar apertura en octubre de cada camping/área",
    "Revisión de la autocaravana: neumáticos, aceite, gas"
  ]
};
