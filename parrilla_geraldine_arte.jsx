import { useState } from "react";

// ─── PALETA E IDENTIDAD ───────────────────────────────────────────────────────
const BRAND = {
  palette: [
    { name: "Dorado antiguo",   hex: "#C9A84C", uso: "Color principal. Acentos, titulares, CTAs, detalles decorativos." },
    { name: "Negro profundo",   hex: "#0D0C08", uso: "Fondo base. Transmite lujo, seriedad y hace que las obras resalten." },
    { name: "Crema cálida",     hex: "#F0E8D8", uso: "Texto principal. Fondos de slides alternos. Nunca blanco puro." },
    { name: "Tinto artístico",  hex: "#7A2A2A", uso: "Acento secundario. Para llamadas a la acción y energía visual." },
    { name: "Verde jade",       hex: "#2E5E5E", uso: "Tercer acento. Conecta con los materiales reales que usa Geraldine." },
    { name: "Gris cálido",      hex: "#3A3228", uso: "Fondos de tarjetas, separadores. Nunca frío ni tecnológico." },
  ],
  tipografias: [
    {
      nombre: "Cormorant Garamond",
      tipo: "Display / Titulares",
      url: "https://fonts.google.com/specimen/Cormorant+Garamond",
      razon: "Serif elegante con raíces históricas. Transmite arte, cultura y lujo sin pretensión. Las versalitas y cursivas son perfectas para una artista. Es gratis en Google Fonts.",
      uso: "Nombre de la artista, títulos de posts, precios, frases clave en carruseles.",
      pares: "Combinar con DM Sans o Jost para el cuerpo."
    },
    {
      nombre: "DM Sans",
      tipo: "Cuerpo / Captions",
      url: "https://fonts.google.com/specimen/DM+Sans",
      razon: "Sans-serif moderna y legible. Neutral sin ser fría. Funciona perfecto en Instagram porque es altamente legible en pantallas pequeñas y no roba protagonismo al arte.",
      uso: "Captions, descripciones en carruseles, información de contacto, precios secundarios.",
      pares: "Pareja ideal de Cormorant Garamond."
    },
    {
      nombre: "Italiana",
      tipo: "Acento / Logo alternativo",
      url: "https://fonts.google.com/specimen/Italiana",
      razon: "Serif con personalidad italiana y artística. Si se quiere algo más dramático para el logo o la firma visual de Geraldine, esta da un toque de alta costura.",
      uso: "Solo para el nombre 'Geraldine Arte' en el logo o la bio. No para cuerpo de texto.",
      pares: "Combinar con DM Sans para todo lo demás."
    },
  ]
};

// ─── DATOS DE PUBLICACIONES ───────────────────────────────────────────────────
const DATA = [
  // ── SEMANA 1 ──
  {
    id: 1, sem: "sem1", dia: "Semana 1 · Lunes", plataforma: "Instagram + TikTok", formato: "reel",
    pilar: "El Proceso",
    titulo: "De lienzo en blanco a $25,000 en 72 horas",
    hooks: [
      { tipo: "Curiosidad",     texto: "Nadie te dice cuánto cuesta una pintura original... hasta que la necesitas." },
      { tipo: "Contradicción",  texto: "Todo mundo paga miles por una impresión de IKEA. Yo pinto algo único por lo mismo." },
      { tipo: "Dolor latente",  texto: "Tu sala merece algo más que un cuadro genérico que tiene tu vecino también." },
    ],
    guion: {
      hook: `[0–3 seg] — TEXTO EN PANTALLA + VOZ EN OFF sobre lienzo en blanco:

"Nadie te dice cuánto cuesta una pintura original... hasta que la necesitas."

→ Cámara fija en el lienzo vacío. Silencio un segundo. Entra la voz.`,

      desarrollo: `[4–12 seg] — Time-lapse del primer trazo. Voz en off:

"Esto que estás viendo empezó como un mensaje de WhatsApp. Una señora me mandó foto de su sala y me dijo: quiero algo que llene esa pared. Esto fue lo que pasó."

[13–25 seg] — Close-up de pincel en movimiento, texturas, capas de acrílico. Música sube suave. Sin narración — solo el proceso hablando.

[26–33 seg] — Cámara lenta. El cuadro tomando forma. Voz regresa:

"Tres días. Técnica mixta. Hoja de oro aplicada a mano."`,

      cta: `[34–40 seg] — REVEAL del cuadro terminado. Pausa dramática 1 segundo. Voz:

"Listo. Disponible. Si lo quieres en tu sala, sabes dónde encontrarme."

TEXTO EN PANTALLA: "Comenta SALA 👇"

→ Fade a negro con el handle @gegelarios`,
    },
    script: [
      { tag: "SEG 0–3",   body: "HOOK en pantalla + voz en off sobre lienzo en blanco. Silencio un segundo, luego entra la voz." },
      { tag: "SEG 4–12",  body: "Time-lapse del primer trazo. Voz: 'Esto empezó como un mensaje de WhatsApp. Una señora me mandó foto de su sala y me dijo: quiero algo que llene esa pared. Esto fue lo que pasó.'" },
      { tag: "SEG 13–25", body: "Close-up de pincel, texturas, capas de acrílico. Música sube. Sin narración — solo el proceso." },
      { tag: "SEG 26–33", body: "Cámara lenta. El cuadro tomando forma. Voz: 'Tres días. Técnica mixta. Hoja de oro aplicada a mano.'" },
      { tag: "SEG 34–40", body: "REVEAL del cuadro terminado. Pausa 1 seg. Voz: 'Listo. Disponible. Si lo quieres en tu sala, sabes dónde encontrarme.' Texto en pantalla: Comenta SALA 👇" },
    ],
    visual: "Cámara fija en tripié sobre el caballete. Luz natural lateral. Solo manos y pincel — sin rostro. Time-lapse 8x en la parte media. Reveal en tiempo real. Subtítulos en fuente sans-serif blanca, tamaño grande. Color grading cálido (tonos ámbar).",
    audio: "Lo-fi chill con piano — primer tramo. En el reveal: subida de volumen con beat más definido. Tipo 'aesthetic lofi' en TikTok/Spotify. Voz en off tranquila, pausada, no corporativa.",
    cta: "Guarda este video para cuando estés buscando algo especial para tu casa. Comenta SALA y te mando lo que tengo disponible esta semana.",
  },

  {
    id: 2, sem: "sem1", dia: "Semana 1 · Miércoles", plataforma: "Instagram", formato: "carrusel",
    pilar: "El Valor",
    titulo: "¿Por qué un cuadro 'caro' es en realidad la compra más barata?",
    hooks: [
      { tipo: "Contradicción",  texto: "Gastas más en ropa que nunca vuelves a usar que en arte que dura toda la vida." },
      { tipo: "Curiosidad",     texto: "Hay algo en tu casa que vale cero después de usarlo. Y hay algo que vale más con los años." },
      { tipo: "Dolor latente",  texto: "Llevas años decorando con lo mismo porque 'el arte es caro'. Te explico por qué eso no es cierto." },
    ],
    slides: [
      { num: "PORTADA",   copy: "HOOK en texto grande:\n\n\"Gastas más en ropa que nunca usas que en arte que dura toda la vida.\"\n\nSubtítulo pequeño: Desliza → te explico por qué.\n\nFondo: foto del cuadro más impactante de Geraldine, oscurecida al 60%." },
      { num: "SLIDE 2",   copy: "COMPARATIVA VISUAL:\n\nUna impresión genérica:\n→ $800 MXN\n→ Se decolora en 2 años\n→ 10,000 personas tienen la misma\n\nUn cuadro original de Geraldine:\n→ Desde $8,000 MXN en pagos cómodos\n→ Dura generaciones\n→ Existe una sola en el mundo\n\nDiseño: dos columnas, fondo oscuro, texto en crema." },
      { num: "SLIDE 3",   copy: "TITULAR: '¿Qué incluye ese precio?'\n\n• Hoja de oro real aplicada a mano\n• Pintura de calidad artística (no de manualidades)\n• Entre 20 y 40 horas de trabajo\n• Una pieza que no existe en ningún otro lugar del mundo\n• La historia de quién la pintó\n\nFoto: close-up de los materiales premium sobre la mesa del estudio." },
      { num: "SLIDE 4",   copy: "FOTO MACRO DE LA HOJA DE ORO.\n\nSin texto superpuesto.\nSolo un pequeño copy abajo:\n'Esto no es un filtro. Es hoja de oro real.'\n\nDejar que la imagen hable. Este slide tiene el mayor potencial de captura de atención." },
      { num: "SLIDE 5",   copy: "TESTIMONIO BREVE:\n\n'Esta pieza viajó a Monterrey. La señora que la encargó lloró cuando la vio instalada.'\n— Cliente, Monterrey 2024\n\nFoto: la obra en contexto (sala o espacio del cliente si hay permiso).\nSin nombre del cliente. El impacto emocional basta." },
      { num: "SLIDE 6 · CTA", copy: "PREGUNTA DIRECTA que genera comentarios:\n\n'¿Cuánto cuesta el arte que tienes en tu sala ahorita?'\n\nSubtítulo: 'Comenta abajo — te vas a sorprender de la diferencia.'\n\nCTA secundario: 'Guarda este carrusel para la próxima vez que dudes del precio de una obra.'\n\nFondo oscuro, tipografía grande, color dorado en los CTAs." },
    ],
    script: [
      { tag: "SLIDE 1", body: "Portada impactante: foto del cuadro terminado. Título del hook en letras grandes." },
      { tag: "SLIDE 2", body: "Comparativa visual: impresión genérica vs cuadro original. Dos columnas." },
      { tag: "SLIDE 3", body: "Desglose: ¿Qué incluye ese precio? Hoja de oro, horas de trabajo, unicidad." },
      { tag: "SLIDE 4", body: "Foto macro de la hoja de oro. Sin texto — que el arte hable." },
      { tag: "SLIDE 5", body: "Testimonio breve. Sin nombre, con impacto emocional." },
      { tag: "SLIDE 6", body: "CTA final: pregunta directa que genera comentarios + guardar el post." },
    ],
    visual: "Diseño editorial minimalista. Fondo negro/crema alternado por slide. Tipografía grande. Fotos reales de las obras y materiales — sin maquetas. Slide 4: macro de hoja de oro.",
    audio: "No aplica para carrusel estático.",
    cta: "¿Cuánto cuesta el arte que tienes en tu sala ahorita? Comenta abajo. Guarda este carrusel para la próxima vez que dudes del precio.",
  },

  {
    id: 3, sem: "sem1", dia: "Semana 1 · Viernes", plataforma: "Instagram + TikTok", formato: "reel",
    pilar: "La Historia",
    titulo: "El cuadro que un político regaló sin decirle a nadie cuánto costó",
    hooks: [
      { tipo: "Curiosidad",    texto: "Hay cuadros míos en lugares donde no puedo decir el nombre del dueño. Y eso me encanta." },
      { tipo: "Contradicción", texto: "El regalo más caro que alguien puede dar no viene en caja, no tiene marca, y no se devuelve." },
      { tipo: "Dolor latente", texto: "¿Cuántas veces has querido regalar algo que de verdad sorprenda y no sabes qué?" },
    ],
    guion: {
      hook: `[0–3 seg] — TEXTO EN PANTALLA + voz en off sobre toma del cuadro terminado, envuelto en papel kraft:

"Hay cuadros míos en lugares donde no puedo decir el nombre del dueño."

Pausa. Voz continúa:

"Y eso me encanta."`,

      desarrollo: `[4–15 seg] — Voz en off sobre toma del proceso acelerado:

"Me llegó un mensaje de un número que no tenía guardado. Solo me mandó el tamaño de la pared y una fecha. Tenía 10 días."

Cut: manos mezclando colores. El pincel trabajando. La obra creciendo.

[16–28 seg] — Cámara lenta. El cuadro terminado. Proceso de empaque — papel kraft, listón, las manos sellando el paquete. Voz:

"No sé dónde está hoy. No me dijeron para quién era."

Pausa de 1 segundo.

"Pero sé que está en alguna oficina importante de esta ciudad."`,

      cta: `[29–36 seg] — Toma final del paquete listo para entregar. Voz:

"Si quieres un regalo que nadie va a olvidar..."

Texto en pantalla aparece letra por letra:

"...ya sabes dónde encontrarme."

TEXTO FINAL: "Comenta REGALO 🎁"
Handle: @gegelarios`,
    },
    script: [
      { tag: "SEG 0–3",   body: "HOOK en pantalla sobre cuadro envuelto en papel kraft. Voz: 'Hay cuadros míos en lugares donde no puedo decir el nombre del dueño. Y eso me encanta.'" },
      { tag: "SEG 4–15",  body: "Proceso acelerado. Voz: 'Me llegó un mensaje de un número que no tenía guardado. Solo me mandó el tamaño de la pared y una fecha. Tenía 10 días.'" },
      { tag: "SEG 16–28", body: "Cámara lenta. Empaque del cuadro. Voz: 'No sé dónde está hoy. No me dijeron para quién era. Pero sé que está en alguna oficina importante de esta ciudad.'" },
      { tag: "SEG 29–36", body: "Toma final del paquete. Voz: 'Si quieres un regalo que nadie va a olvidar...' Texto: '...ya sabes dónde encontrarme.' CTA: Comenta REGALO 🎁" },
    ],
    visual: "Tomas del proceso de empaque — papel kraft, listón, el cuadro. Reveal. Sin mostrar al destinatario. Estética cálida, cinematográfica. Subtítulos en blanco, letra grande.",
    audio: "Música cinematográfica suave al inicio. Sube en el reveal. Soundtracks minimalistas YouTube sin copyright. Voz narrativa, estilo storytelling.",
    cta: "¿Tienes que regalar algo importante este año? Comenta REGALO y hablamos. Guarda este video — puede salvarte en diciembre.",
  },

  // ── SEMANA 2 ──
  {
    id: 4, sem: "sem2", dia: "Semana 2 · Lunes", plataforma: "Instagram", formato: "estatico",
    pilar: "El Proceso",
    titulo: "Obra disponible: 'Dorado Abstracto I'",
    hooks: [
      { tipo: "Curiosidad",    texto: "Hay texturas que la pantalla no hace justicia. Esta es una." },
      { tipo: "Dolor latente", texto: "La mayoría de las paredes de casas bonitas tienen exactamente el mismo arte. La tuya no tiene que ser igual." },
      { tipo: "Contradicción", texto: "Esto no es un filtro. No es IA. Es hoja de oro real pegada a mano sobre acrílico." },
    ],
    script: [
      { tag: "FOTO",    body: "Macro de la hoja de oro. Luz directa que genera reflejos. Fondo negro. Sin texto superpuesto en la imagen." },
      { tag: "CAPTION", body: "Hook + 'Esta pieza tardó 3 días. Técnica mixta: acrílico + hoja de oro aplicada a mano, capa por capa. Cada vez que le da la luz, cambia. Nunca la ves igual dos veces.' + Disponible. 60×80cm. Envío incluido en Querétaro. + CTA." },
    ],
    visual: "Foto macro de la hoja de oro — detalles brutales, textura casi táctil. Luz directa que genera reflejos. iPhone en modo portrait o cámara profesional. Fondo negro o crema neutro. Sin texto superpuesto.",
    audio: "No aplica. Post estático.",
    cta: "Comenta ORO si quieres medidas y precio. Guarda este post si algún día quieres algo así en tu espacio.",
  },

  {
    id: 5, sem: "sem2", dia: "Semana 2 · Martes", plataforma: "Instagram + TikTok", formato: "reel",
    pilar: "La Artista",
    titulo: "Empecé a pintar porque me divorcié. Hoy vivo de esto.",
    hooks: [
      { tipo: "Dolor latente",  texto: "Nadie empieza a pintar a los 40 con un plan. Yo empecé porque necesitaba algo que fuera mío." },
      { tipo: "Contradicción",  texto: "Me dijeron que el arte no da de comer. Llevo 10 años dándoles la vuelta a esas palabras." },
      { tipo: "Curiosidad",     texto: "¿Sabes por qué empecé a pintar? No fue por arte. Fue por sobrevivir." },
    ],
    guion: {
      hook: `[0–3 seg] — Toma del estudio vacío, pinceles en reposo, lienzos apilados. Voz en off:

"Nadie empieza a pintar a los 40 con un plan."

Pausa de medio segundo.

"Yo empecé porque necesitaba algo que fuera mío."`,

      desarrollo: `[4–18 seg] — Imágenes del proceso: manos mezclando colores, la paleta, el lienzo. Voz:

"Había días en que no sabía qué iba a pasar. Agarré un pincel casi por accidente."

Cámara lenta sobre las manos trabajando.

"Y resulta que era lo que siempre había sido mío."

[19–30 seg] — Toma de obras terminadas en el estudio. Cámara se mueve suave entre ellas. Voz:

"Diez años después, mis cuadros están en salas, en restaurantes, en oficinas. Sin galería. Sin intermediario. Solo el arte... y quien lo quiere."`,

      cta: `[31–38 seg] — Toma final del estudio en calma. Luz cálida. Voz:

"Si esto te resuena..."

Silencio de un segundo. Solo la música.

"...quédate."

TEXTO EN PANTALLA: "¿Tu historia también empezó con un punto de quiebre? Comenta abajo 👇"`,
    },
    script: [
      { tag: "SEG 0–3",   body: "Estudio vacío, pinceles en reposo. Voz: 'Nadie empieza a pintar a los 40 con un plan. Yo empecé porque necesitaba algo que fuera mío.'" },
      { tag: "SEG 4–18",  body: "Manos mezclando colores, paleta, lienzo. Voz: 'Había días en que no sabía qué iba a pasar. Agarré un pincel casi por accidente. Y resulta que era lo que siempre había sido mío.'" },
      { tag: "SEG 19–30", body: "Obras terminadas en el estudio. Cámara se mueve suave. Voz: 'Diez años después, mis cuadros están en salas, en restaurantes, en oficinas. Sin galería. Sin intermediario.'" },
      { tag: "SEG 31–38", body: "Estudio en calma. Luz cálida. Voz: 'Si esto te resuena...' Silencio. '...quédate.' Texto: '¿Tu historia también empezó con un punto de quiebre? Comenta 👇'" },
    ],
    visual: "Todo en el estudio. Sin rostro. Manos, pinceles, colores, telas. Cámara lenta en los momentos emocionales. Edición limpia, sin efectos exagerados. Color grading cálido — ámbar y sepia. El reel más humano de la parrilla.",
    audio: "Piano solo, melancólico y bonito. Referencia: 'Comptine d'un autre été' estilo — sin copyright. Sin música fuerte. Silencio con textura.",
    cta: "Si tu historia también empezó con un punto de quiebre, comenta abajo. Este video es para las que saben de qué hablo. Guárdalo.",
  },

  {
    id: 6, sem: "sem2", dia: "Semana 2 · Jueves", plataforma: "Instagram", formato: "carrusel",
    pilar: "La Comunidad",
    titulo: "¿Cuál de estos 5 cuadros iría en tu sala? (Vota en comentarios)",
    hooks: [
      { tipo: "Curiosidad",    texto: "El problema no es encontrar arte bonito. Es encontrar el que ES tuyo." },
      { tipo: "Contradicción", texto: "Todo mundo dice que le gusta el arte. Muy pocos saben cuál quieren para su casa." },
      { tipo: "Dolor latente", texto: "Llevas meses buscando algo para esa pared y no encuentras nada que se sienta correcto." },
    ],
    slides: [
      { num: "PORTADA",      copy: "HOOK en texto grande:\n\n'El problema no es encontrar arte bonito.\nEs encontrar el que ES tuyo.'\n\nSubtítulo: 'Desliza y vota por tu favorita 👉'\n\nFondo: collage pequeño de las 5 obras, oscurecido. Título en dorado." },
      { num: "SLIDE 2 · A",  copy: "OBRA A — Foto limpia, fondo blanco o neutro.\n\nSin texto encima de la imagen.\n\nAbajo en tipografía pequeña:\n'A — Técnica: Acrílico + hoja de oro · 60×80cm'\n\nDejar que la obra hable sola." },
      { num: "SLIDE 3 · B",  copy: "OBRA B — Mismo tratamiento.\n\nFoto limpia. Fondo neutro.\n\n'B — Técnica: Óleo sobre lienzo · 80×100cm'" },
      { num: "SLIDE 4 · C",  copy: "OBRA C — Mismo tratamiento.\n\n'C — Técnica: Acrílico con jade de plata · 50×70cm'" },
      { num: "SLIDE 5 · D",  copy: "OBRA D — Mismo tratamiento.\n\n'D — Técnica: Mixta sobre madera · 40×60cm'" },
      { num: "SLIDE 6 · E",  copy: "OBRA E — Mismo tratamiento.\n\n'E — Técnica: Acrílico abstracto · 100×120cm'" },
      { num: "SLIDE 7 · CTA", copy: "TEXTO GRANDE:\n\n'¿Cuál es la tuya?\nComenta la letra 👇'\n\nSubtítulo:\n'La más votada la pinto EN PROCESO la próxima semana. A, B, C, D o E — ¿cuál vive en tu sala?'\n\nFondo oscuro. Tipografía dorada en el CTA." },
    ],
    script: [
      { tag: "SLIDE 1",  body: "Portada: collage de 5 obras + hook en texto. 'Desliza y vota 👉'" },
      { tag: "SLIDES 2–6", body: "Una obra por slide: A, B, C, D, E. Foto limpia. Técnica y medidas en tipografía pequeña abajo." },
      { tag: "SLIDE 7",  body: "CTA: '¿Cuál es la tuya? Comenta la letra 👇 La más votada la pinto en proceso la próxima semana.'" },
    ],
    visual: "Fotografías limpias de las obras sobre fondo blanco o neutro. Una por slide. Diseño editorial minimalista — el arte manda, el diseño sirve. Tipografía pequeña, sin competir con la obra.",
    audio: "No aplica. Carrusel.",
    cta: "Comenta la letra de tu favorita. La más votada la muestro en proceso la próxima semana. A, B, C, D o E — ¿cuál es la tuya?",
  },

  // ── SEMANA 3 ──
  {
    id: 7, sem: "sem3", dia: "Semana 3 · Lunes", plataforma: "Instagram + TikTok", formato: "reel",
    pilar: "El Proceso",
    titulo: "Pinté el cuadro más votado — aquí está el proceso completo",
    hooks: [
      { tipo: "Curiosidad",    texto: "Ustedes eligieron. Yo pinté. Esto fue lo que pasó." },
      { tipo: "Contradicción", texto: "Pensé que sería el más fácil. Resultó ser el más difícil que he hecho en meses." },
      { tipo: "Dolor latente", texto: "Ver un cuadro terminado no te dice nada. Verlo nacer sí." },
    ],
    guion: {
      hook: `[0–3 seg] — Pantalla dividida o cut rápido: captura del carrusel de votos → el cuadro más votado. Voz:

"Ustedes eligieron la [letra]."

Pausa.

"Yo la pinté."`,

      desarrollo: `[4–20 seg] — Time-lapse completo del proceso. Voz en off honesta, sin guión perfecto:

"La primera capa fue fácil. La segunda fue donde empecé a dudar."

Cut a close-up de la textura acumulándose.

"Aquí cambié el color. La luz me lo pidió. No estaba en el plan."

Toma de las manos retrocediendo, mirando el cuadro.

"Aquí casi lo arruino."

Pausa breve. La música sube un poco.

"Pero seguí."`,

      cta: `[21–33 seg] — Cámara lenta. Reveal del cuadro terminado. Voz:

"Esta es la que ganó."

Silencio de un segundo completo.

"Ahora está disponible."

[34–40 seg] — TEXTO EN PANTALLA:

"El primero que comente MÍAS tiene prioridad de compra."

Handle: @gegelarios`,
    },
    script: [
      { tag: "SEG 0–3",   body: "Cut del carrusel de votos → cuadro ganador. Voz: 'Ustedes eligieron la [letra]. Yo la pinté.'" },
      { tag: "SEG 4–20",  body: "Time-lapse. Voz honesta: 'La primera capa fue fácil. La segunda fue donde empecé a dudar. Aquí cambié el color — la luz me lo pidió. Aquí casi lo arruino. Pero seguí.'" },
      { tag: "SEG 21–33", body: "Cámara lenta. Reveal. Voz: 'Esta es la que ganó.' Silencio 1 seg. 'Ahora está disponible.'" },
      { tag: "SEG 34–40", body: "TEXTO: 'El primero que comente MÍAS tiene prioridad de compra.' Handle @gegelarios." },
    ],
    visual: "Mismo setup visual que Pub 01 para continuidad de marca. Time-lapse → reveal cámara lenta. Este reel crea narrativa serial con la semana anterior — la gente regresa para ver el resultado de su voto.",
    audio: "Mismo estilo de audio que la primera semana para coherencia. Lo-fi chill → build-up en reveal.",
    cta: "Esta pieza ya tiene dueño en potencia — el que comente MÍAS primero tiene prioridad de compra. Comenta ya.",
  },

  {
    id: 8, sem: "sem3", dia: "Semana 3 · Miércoles", plataforma: "Instagram", formato: "carrusel",
    pilar: "El Valor",
    titulo: "Arte en pagos: cómo funciona y qué puedes encargar",
    hooks: [
      { tipo: "Dolor latente", texto: "No necesitas $25,000 en efectivo para tener arte original en tu casa." },
      { tipo: "Curiosidad",    texto: "¿Qué me pides, cuánto tardas y cómo funciona el pago? Lo explico todo aquí." },
      { tipo: "Contradicción", texto: "El arte no es para ricos. Es para los que saben dónde poner su dinero." },
    ],
    slides: [
      { num: "PORTADA",   copy: "HOOK en texto grande:\n\n'No necesitas $25,000 en efectivo para tener arte original en tu casa.'\n\nSubtítulo: 'Aquí te explico cómo funciona 👉'\n\nFondo oscuro. Tipografía grande. Foto de obra al fondo, oscurecida." },
      { num: "SLIDE 2",   copy: "PASO 1:\n\n'Me mandas foto de tu espacio + el estilo que te gusta.'\n\nSubtítulo: 'Sin tecnicismos. Sin formularios. Solo un WhatsApp o un DM.'\n\nÍcono simple de mensaje. Fondo crema cálido." },
      { num: "SLIDE 3",   copy: "PASO 2:\n\n'Te mando opciones y un precio final.'\n\nSubtítulo: 'Sin sorpresas. Sin costos ocultos. Un número claro.'\n\nFondo oscuro." },
      { num: "SLIDE 4",   copy: "PASO 3:\n\n'Pagas el 50% para apartar. El resto al entregar.'\n\nSubtítulo: 'Nada de pagar todo por adelantado.'\n\nFondo crema." },
      { num: "SLIDE 5",   copy: "¿CUÁNTO TARDA?\n\nDe 1 a 3 semanas según el tamaño y la técnica.\n\n'Siempre te aviso el tiempo exacto antes de empezar.'\n\nFondo oscuro con línea de tiempo visual simple." },
      { num: "SLIDE 6",   copy: "¿CUÁNTO CUESTA?\n\nDesde $8,000 hasta $25,000 MXN.\nSegún tamaño, técnica y complejidad.\n\n'Hay algo para cada espacio y cada presupuesto.'\n\nFoto de varias obras de distintos tamaños." },
      { num: "SLIDE 7 · CTA", copy: "TEXTO GRANDE:\n\n'¿Lista para tener algo tuyo?\nMándame la foto de tu espacio.'\n\nSubtítulo:\n'Sin compromiso. Solo platicamos.'\n\nCTA secundario: 'Guarda este carrusel — va a ser útil cuando lo decidas.'\n\nFondo oscuro. Dorado en el CTA." },
    ],
    script: [
      { tag: "SLIDE 1",  body: "Portada: hook + 'Aquí te explico cómo funciona 👉'" },
      { tag: "SLIDE 2",  body: "Paso 1: foto del espacio por WhatsApp o DM. Sin tecnicismos." },
      { tag: "SLIDE 3",  body: "Paso 2: opciones + precio final. Sin sorpresas." },
      { tag: "SLIDE 4",  body: "Paso 3: 50% para apartar, resto al entregar." },
      { tag: "SLIDE 5",  body: "Tiempo: 1 a 3 semanas. Siempre avisas el tiempo exacto." },
      { tag: "SLIDE 6",  body: "Precio: desde $8,000 hasta $25,000 MXN según tamaño y técnica." },
      { tag: "SLIDE 7",  body: "CTA: 'Mándame la foto de tu espacio. Sin compromiso. Solo platicamos.' + guardar el carrusel." },
    ],
    visual: "Diseño funcional y limpio. Colores de marca alternando crema y negro. El carrusel tiene que sentirse como una conversación, no como un brochure corporativo.",
    audio: "No aplica.",
    cta: "Guarda este carrusel para cuando quieras encargar algo. Y si ya sabes que lo quieres — mándame DM hoy. Tengo espacio en agenda esta semana.",
  },

  {
    id: 9, sem: "sem3", dia: "Semana 3 · Viernes", plataforma: "Instagram", formato: "estatico",
    pilar: "La Historia",
    titulo: "Obra entregada: 'La que llegó a Guadalajara'",
    hooks: [
      { tipo: "Curiosidad",    texto: "Cada cuadro que sale del estudio se convierte en parte de una historia que ya no controlo. Y eso me encanta." },
      { tipo: "Emoción",       texto: "Esta señora me mandó una foto del cuadro instalado. Lloramos las dos." },
      { tipo: "Contradicción", texto: "El momento más difícil no es pintar. Es soltar la obra." },
    ],
    script: [
      { tag: "FOTO",    body: "La obra ya instalada en el espacio del cliente (con permiso) o lista para enviar. Estética de 'detrás de cámara' — no producida en exceso." },
      { tag: "CAPTION", body: "'Esta pieza viajó a Guadalajara. La señora que la encargó me dijo que había estado buscando exactamente esto durante 3 años. A veces el arte no lo encuentras — te encuentra.' + 'Si hay algo mío que está buscándote, aquí estoy.' + CTA." },
    ],
    visual: "Foto de la obra instalada (si hay permiso) o lista para enviar. Estética orgánica, no muy producida.",
    audio: "No aplica. Post estático.",
    cta: "¿Hay algún espacio en tu casa que lleva tiempo pidiendo algo? Comenta ESPACIO y te busco algo que encaje. Sin compromiso.",
  },

  // ── SEMANA 4 ──
  {
    id: 10, sem: "sem4", dia: "Semana 4 · Lunes", plataforma: "Instagram + TikTok", formato: "reel",
    pilar: "La Artista",
    titulo: "Un día en el estudio — sin filtros, sin guión",
    hooks: [
      { tipo: "Curiosidad",    texto: "Esto es lo que pasa en mi estudio un lunes por la mañana. Sin editar. Sin ensayar." },
      { tipo: "Contradicción", texto: "El arte no siempre nace bonito. A veces nace hecho un desastre." },
      { tipo: "Dolor latente", texto: "¿Alguna vez quisiste saber cómo trabaja realmente un artista? No el Instagram bonito — el de verdad." },
    ],
    guion: {
      hook: `[0–3 seg] — Toma del estudio tal como está — con caos creativo: paletas sucias, lienzos apilados, vasos con agua de colores. Voz:

"Esto es lo que pasa en mi estudio un lunes por la mañana."

Pausa.

"Sin editar. Sin ensayar."`,

      desarrollo: `[4–22 seg] — Secuencia documental. Cámara en mano. Voz en off natural, sin leer:

"Hoy tengo tres proyectos al mismo tiempo."

Toma de los tres lienzos en distintas etapas.

"Este ya casi está. Este lo estoy odiando desde el martes."

Toma close-up del lienzo "difícil".

"Y este lo acabo de empezar porque el otro me tenía bloqueada."

Pausa. Voz más suave:

"Así funciona esto. No es lineal. No es ordenado."

Toma de las manos mezclando un color nuevo.

"Pero cada lunes es diferente. Y eso es lo que más me gusta."`,

      cta: `[23–30 seg] — Toma final del estudio tranquilo. Luz entrando por la ventana. Voz:

"¿Qué parte del proceso te gustaría ver más seguido?"

TEXTO EN PANTALLA:

"Comenta abajo — el más pedido lo muestro la próxima semana 👇"`,
    },
    script: [
      { tag: "SEG 0–3",   body: "Estudio con caos creativo. Voz: 'Esto es lo que pasa en mi estudio un lunes por la mañana. Sin editar. Sin ensayar.'" },
      { tag: "SEG 4–22",  body: "Secuencia documental. Voz: 'Hoy tengo tres proyectos. Este ya casi está. Este lo estoy odiando desde el martes. Y este lo acabo de empezar porque el otro me tenía bloqueada. Así funciona esto. No es lineal. No es ordenado. Pero cada lunes es diferente. Y eso es lo que más me gusta.'" },
      { tag: "SEG 23–30", body: "Estudio tranquilo. Luz natural. Voz: '¿Qué parte del proceso te gustaría ver más seguido?' Texto: 'Comenta abajo 👇'" },
    ],
    visual: "Formato documental. Cámara en mano, movimiento orgánico. Íntimo. La 'imperfección' es intencional. Color grading mínimo para mantener autenticidad.",
    audio: "Sonido ambiente del estudio primeros segundos. Luego música indie/folk suave. Referencia: Novo Amor estilo, sin copyright.",
    cta: "Guarda este video para cuando necesites recordar que el proceso también vale. ¿Qué parte te gustó más? Comenta abajo.",
  },

  {
    id: 11, sem: "sem4", dia: "Semana 4 · Miércoles", plataforma: "Instagram", formato: "carrusel",
    pilar: "La Comunidad",
    titulo: "SORTEO: Gana una mini-obra original firmada",
    hooks: [
      { tipo: "Curiosidad",    texto: "Sorteamos una pieza original. No una impresión. No una copia. Una original." },
      { tipo: "Contradicción", texto: "El arte que regalan en los sorteos suele ser genérico. Este no." },
      { tipo: "Dolor latente", texto: "¿Cuántas veces participaste en un sorteo y ganaste algo que no querías? Esta vez es diferente." },
    ],
    slides: [
      { num: "PORTADA",      copy: "FOTO DE LA MINI-OBRA — ocupa toda la slide.\n\nEncima, texto mínimo:\n\n'SORTEO'\n'Una original. Para ti.'\n\nFondo oscuro que hace que la obra resalte. Sin más texto." },
      { num: "SLIDE 2",      copy: "QUÉ SE SORTEA:\n\nFoto cercana de la mini-obra.\n\n'Mini-obra original firmada por Geraldine Larios\nTécnica: [técnica]\nMedidas: [medidas]\nValor real: $[precio] MXN'\n\nTexto: 'No es una impresión. No es una copia. Es una pieza original.'" },
      { num: "SLIDE 3",      copy: "CÓMO PARTICIPAR:\n\n1. Sigue la cuenta ✓\n2. Guarda este post ✓\n3. Etiqueta a alguien que merezca arte en su vida ✓\n\n'Cada etiqueta es una participación adicional.'\n\nDiseño limpio. Numeración grande. Fondo oscuro." },
      { num: "SLIDE 4",      copy: "FECHA DEL SORTEO:\n\n'El ganador se anuncia el [día] vía Stories.'\n\n'Si no sigues la cuenta al momento del sorteo, la participación no es válida.'\n\nTexto pequeño y claro. Sin alarmar, solo informar." },
      { num: "SLIDE 5 · CTA", copy: "CIERRE CÁLIDO:\n\n'Cada vez que compartes esto, el arte de Geraldine llega más lejos.'\n\n'Gracias por ser parte de esta comunidad.'\n\n— @gegelarios\n\nFondo oscuro. Tipografía en crema y dorado." },
    ],
    script: [
      { tag: "SLIDE 1",  body: "Foto de la mini-obra. Texto mínimo: 'SORTEO · Una original. Para ti.'" },
      { tag: "SLIDE 2",  body: "Detalle de la obra: técnica, medidas, valor real. 'No es una impresión. Es una pieza original.'" },
      { tag: "SLIDE 3",  body: "Mecánica clara: 1. Sigue · 2. Guarda · 3. Etiqueta. Cada etiqueta = una participación adicional." },
      { tag: "SLIDE 4",  body: "Fecha del sorteo. Condición: seguir la cuenta al momento del anuncio." },
      { tag: "SLIDE 5",  body: "Cierre cálido: 'Cada vez que compartes esto, el arte de Geraldine llega más lejos.' — @gegelarios" },
    ],
    visual: "La obra como protagonista absoluta. Fotos de altísima calidad. Diseño limpio con fondo oscuro. El CTA de mecánica debe ser cristalino.",
    audio: "No aplica.",
    cta: "Para participar: sigue la cuenta, guarda este post y etiqueta a alguien que merece arte original en su vida. El ganador se anuncia el viernes vía stories.",
  },

  {
    id: 12, sem: "sem4", dia: "Semana 4 · Viernes", plataforma: "Instagram + TikTok", formato: "reel",
    pilar: "El Proceso",
    titulo: "El cuadro más difícil que he hecho — y por qué casi lo destruyo",
    hooks: [
      { tipo: "Curiosidad",    texto: "Hubo un momento en que tomé el trapo y casi lo borré todo. Esto fue lo que me detuvo." },
      { tipo: "Dolor latente", texto: "Todo artista tiene una obra que casi destruye. Esta es la mía." },
      { tipo: "Contradicción", texto: "El cuadro que más me costó terminar es el que más me gusta. No tiene ningún sentido y todo el sentido." },
    ],
    guion: {
      hook: `[0–3 seg] — Toma del cuadro en proceso — feo, sin resolver. Voz:

"Hubo un momento en que tomé el trapo..."

Pausa.

"...y casi lo borré todo."`,

      desarrollo: `[4–18 seg] — Proceso acelerado. Voz en off honesta:

"Había capas que no funcionaban. Colores que peleaban entre ellos."

Toma close-up del área conflictiva del cuadro.

"Llegué a un punto donde no sabía si seguir..."

Cámara lenta sobre las manos sosteniendo el trapo.

"...o empezar de cero."

Silencio de un segundo. Música tensa.

[19–30 seg] — Las manos deciden. El pincel vuelve al lienzo. Voz:

"Decidí darle una capa más."

Pausa.

"Una."

Toma del momento exacto de transformación — el color que lo cambia todo.

"Y ahí apareció."`,

      cta: `[31–42 seg] — Reveal del cuadro terminado. Cámara lenta. Voz:

"Este no está disponible."

Pausa.

"Este se queda conmigo."

Silencio de dos segundos. Solo la música.

"Pero si quieres algo así..."

TEXTO EN PANTALLA aparece lentamente:

"...sí puedo hacer uno tuyo."

TEXTO FINAL: "Comenta QUIERO y hablamos 👇"
Handle: @gegelarios`,
    },
    script: [
      { tag: "SEG 0–3",   body: "Cuadro en proceso, feo, sin resolver. Voz: 'Hubo un momento en que tomé el trapo... y casi lo borré todo.'" },
      { tag: "SEG 4–18",  body: "Proceso acelerado. Voz: 'Había capas que no funcionaban. Colores que peleaban. Llegué a un punto donde no sabía si seguir o empezar de cero.' Cámara lenta sobre las manos sosteniendo el trapo." },
      { tag: "SEG 19–30", body: "El pincel vuelve al lienzo. Voz: 'Decidí darle una capa más. Una. Y ahí apareció.' Toma del momento de transformación." },
      { tag: "SEG 31–42", body: "Reveal. Cámara lenta. Voz: 'Este no está disponible. Este se queda conmigo.' Silencio. 'Pero si quieres algo así... sí puedo hacer uno tuyo.' Texto: Comenta QUIERO 👇" },
    ],
    visual: "Mezcla de material en proceso (no bonito) con el reveal final. La honestidad visual es el gancho. No producir en exceso — el 'defecto' es el atractivo. Color grading mínimo.",
    audio: "Música tensa y minimalista al inicio → resolución musical en el reveal. Referencia: Hans Zimmer minimal style. La música cuenta la historia junto con las imágenes.",
    cta: "Guarda este video. Algún día vas a necesitar recordar que lo feo también puede volverse hermoso. Comenta si alguna vez casi renunciaste a algo y no lo hiciste.",
  },
];

// ─── CONSTANTES UI ────────────────────────────────────────────────────────────
const FC = {
  reel:     { bar: "#A0372A", badge: "#A0372A", label: "REEL" },
  carrusel: { bar: "#2A6060", badge: "#2A6060", label: "CARRUSEL" },
  estatico: { bar: "#5A3A7A", badge: "#5A3A7A", label: "ESTÁTICO" },
};
const HC = ["#A0372A", "#2A6060", "#5A3A7A"];
const FILTERS = [
  { key: "all", label: "Todas" },
  { key: "reel", label: "Reels" },
  { key: "carrusel", label: "Carruseles" },
  { key: "estatico", label: "Estáticos" },
  { key: "sem1", label: "Semana 1" },
  { key: "sem2", label: "Semana 2" },
  { key: "sem3", label: "Semana 3" },
  { key: "sem4", label: "Semana 4" },
  { key: "brand", label: "🎨 Identidad Visual" },
];

// ─── TABS ─────────────────────────────────────────────────────────────────────
const TABS = ["Hooks", "Guión / Slides", "Visual & Audio", "CTA"];

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState(null);
  const [tab, setTab] = useState(0);

  const showBrand = active === "brand";
  const visible = showBrand ? [] : DATA.filter(d => {
    if (active === "all") return true;
    if (["sem1","sem2","sem3","sem4"].includes(active)) return d.sem === active;
    return d.formato === active;
  });

  function openCard(d) { setSelected(d); setTab(0); }

  return (
    <div style={{ background: "#0C0B08", minHeight: "100vh", fontFamily: "'Segoe UI',sans-serif", color: "#F0E8D8" }}>

      {/* HEADER */}
      <div style={{ padding: "44px 5vw 32px", borderBottom: "1px solid rgba(201,168,76,0.2)", background: "linear-gradient(180deg,rgba(201,168,76,0.05) 0%,transparent 100%)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
          <span style={{ fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "#C9A84C" }}>Director Creativo · Parrilla de Contenido · Junio 2026</span>
          <span style={{ fontSize: 10, color: "#7A6B52" }}>Paquete 03 · @gegelarios · Querétaro</span>
        </div>
        <div style={{ fontFamily: "Georgia,serif", fontSize: "clamp(38px,6vw,76px)", fontWeight: 300, lineHeight: 0.95, marginBottom: 14 }}>
          Geraldine <span style={{ fontStyle: "italic", color: "#C9A84C" }}>Arte</span>
        </div>
        <div style={{ fontSize: 12, color: "#7A6B52", lineHeight: 1.8 }}>
          12 publicaciones · 4 semanas · Instagram + TikTok · Guiones completos + Identidad visual
        </div>
      </div>

      {/* STATS */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderBottom: "1px solid rgba(201,168,76,0.12)" }}>
        {[["12","Publicaciones"],["5","Pilares"],["36","Hooks"],["4","Semanas"]].map(([v,k]) => (
          <div key={k} style={{ padding: "18px 0", textAlign: "center", borderRight: "1px solid rgba(255,255,255,0.04)" }}>
            <div style={{ fontFamily: "Georgia,serif", fontSize: 32, fontWeight: 700, color: "#C9A84C", lineHeight: 1 }}>{v}</div>
            <div style={{ fontSize: 9, letterSpacing: "0.28em", textTransform: "uppercase", color: "#7A6B52", marginTop: 3 }}>{k}</div>
          </div>
        ))}
      </div>

      {/* FILTERS */}
      <div style={{ padding: "12px 5vw", display: "flex", gap: 7, flexWrap: "wrap", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <span style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#7A6B52" }}>Ver:</span>
        {FILTERS.map(f => (
          <button key={f.key} onClick={() => setActive(f.key)} style={{
            padding: "5px 13px", border: `1px solid ${active === f.key ? "#C9A84C" : "rgba(201,168,76,0.2)"}`,
            background: active === f.key ? "rgba(201,168,76,0.14)" : "transparent",
            color: active === f.key ? "#C9A84C" : "#7A6B52",
            fontFamily: "inherit", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase",
            cursor: "pointer", borderRadius: 2, transition: "all 0.2s",
          }}>{f.label}</button>
        ))}
      </div>

      {/* ── BRAND PANEL ── */}
      {showBrand && (
        <div style={{ padding: "36px 5vw" }}>
          <Sec label="Paleta de colores sugerida">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 2 }}>
              {BRAND.palette.map(c => (
                <div key={c.hex} style={{ background: "#19160E", border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
                  <div style={{ height: 72, background: c.hex }} />
                  <div style={{ padding: "14px 14px" }}>
                    <div style={{ fontFamily: "Georgia,serif", fontSize: 15, fontWeight: 500, color: "#F0E8D8", marginBottom: 4 }}>{c.name}</div>
                    <div style={{ fontSize: 10, letterSpacing: "0.15em", color: "#7A6B52", marginBottom: 8 }}>{c.hex}</div>
                    <div style={{ fontSize: 11, color: "#F0E8D8", opacity: 0.65, lineHeight: 1.6 }}>{c.uso}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, padding: "14px 18px", background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)", fontSize: 12, color: "#F0E8D8", opacity: 0.75, lineHeight: 1.7 }}>
              <strong style={{ color: "#C9A84C" }}>Principio de uso:</strong> Fondo siempre oscuro (negro profundo o gris cálido). El arte de Geraldine necesita espacio y oscuridad para brillar — igual que en un museo. El dorado es el acento que conecta con sus materiales reales (hoja de oro). Nunca usar fondos blancos brillantes ni paletas pasteles — se pierde el carácter de lujo artesanal.
            </div>
          </Sec>

          <Sec label="Tipografías sugeridas">
            {BRAND.tipografias.map((t, i) => (
              <div key={i} style={{ background: "#19160E", border: "1px solid rgba(255,255,255,0.05)", padding: "22px 24px", marginBottom: 2 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                  <div>
                    <div style={{ fontFamily: "Georgia,serif", fontSize: 22, fontStyle: "italic", color: "#F0E8D8", marginBottom: 4 }}>{t.nombre}</div>
                    <div style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A84C" }}>{t.tipo}</div>
                  </div>
                  <a href={t.url} target="_blank" rel="noreferrer" style={{ fontSize: 10, color: "#C9A84C", textDecoration: "none", border: "1px solid rgba(201,168,76,0.3)", padding: "4px 12px", opacity: 0.8 }}>Google Fonts →</a>
                </div>
                <div style={{ fontSize: 12, color: "#F0E8D8", opacity: 0.75, lineHeight: 1.7, marginBottom: 8 }}><strong style={{ color: "#C9A84C" }}>Por qué:</strong> {t.razon}</div>
                <div style={{ fontSize: 12, color: "#F0E8D8", opacity: 0.65, lineHeight: 1.65, marginBottom: 6 }}><strong style={{ color: "rgba(201,168,76,0.7)" }}>Uso:</strong> {t.uso}</div>
                <div style={{ fontSize: 12, color: "#F0E8D8", opacity: 0.55, lineHeight: 1.65 }}><strong style={{ color: "rgba(201,168,76,0.5)" }}>Pareja:</strong> {t.pares}</div>
              </div>
            ))}
            <div style={{ marginTop: 14, padding: "14px 18px", background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)", fontSize: 12, color: "#F0E8D8", opacity: 0.75, lineHeight: 1.7 }}>
              <strong style={{ color: "#C9A84C" }}>Combinación recomendada:</strong> Cormorant Garamond Italic para títulos y el nombre de la artista + DM Sans en peso 300–400 para todo el cuerpo de texto. Esta pareja da sofisticación histórica + legibilidad moderna — exactamente lo que necesita una artista que vende lujo accesible.
            </div>
          </Sec>
        </div>
      )}

      {/* ── GRID DE CARDS ── */}
      {!showBrand && (
        <div style={{ padding: "24px 5vw", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 2 }}>
          {visible.map(d => {
            const fc = FC[d.formato] || FC.reel;
            return (
              <div key={d.id} onClick={() => openCard(d)} style={{
                background: "#19160E", border: "1px solid rgba(255,255,255,0.04)",
                cursor: "pointer", transition: "all 0.22s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "#201C12"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.22)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#19160E"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"; }}
              >
                <div style={{ height: 3, background: fc.bar }} />
                <div style={{ padding: "20px 18px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <span style={{ fontFamily: "Georgia,serif", fontSize: 40, fontWeight: 700, color: "rgba(201,168,76,0.1)", lineHeight: 1 }}>0{d.id}</span>
                    <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
                      <span style={{ fontSize: 8, background: "rgba(255,255,255,0.06)", color: "#F0E8D8", opacity: 0.55, padding: "2px 8px", letterSpacing: "0.1em" }}>{d.plataforma}</span>
                      <span style={{ fontSize: 8, background: fc.badge, color: "white", padding: "2px 8px", letterSpacing: "0.15em" }}>{fc.label}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A84C", marginBottom: 5 }}>{d.pilar}</div>
                  <div style={{ fontFamily: "Georgia,serif", fontSize: 17, fontWeight: 500, color: "#F0E8D8", lineHeight: 1.25, marginBottom: 10 }}>{d.titulo}</div>
                  <div style={{ fontSize: 11, color: "#F0E8D8", opacity: 0.45, fontStyle: "italic", lineHeight: 1.5,
                    overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>
                    "{d.hooks[0].texto}"
                  </div>
                  <div style={{ marginTop: 14, paddingTop: 11, borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 9, color: "#7A6B52", letterSpacing: "0.12em" }}>{d.dia}</span>
                    <span style={{ fontSize: 9, color: "#C9A84C", opacity: 0.55, letterSpacing: "0.18em" }}>Ver desglose →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── MODAL ── */}
      {selected && (
        <div onClick={e => { if (e.target === e.currentTarget) setSelected(null); }} style={{
          position: "fixed", inset: 0, zIndex: 100, background: "rgba(6,5,3,0.93)",
          display: "flex", alignItems: "flex-start", justifyContent: "center",
          padding: "20px 12px", overflowY: "auto",
        }}>
          <div style={{ background: "#131108", border: "1px solid rgba(201,168,76,0.2)", width: "100%", maxWidth: 880, position: "relative", margin: "auto" }}>
            <div style={{ height: 4, background: FC[selected.formato]?.bar || "#C9A84C" }} />

            <button onClick={() => setSelected(null)} style={{
              position: "absolute", top: 14, right: 14, background: "rgba(255,255,255,0.06)",
              border: "none", color: "#F0E8D8", fontSize: 15, width: 32, height: 32,
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            }}>✕</button>

            {/* MODAL HEAD */}
            <div style={{ padding: "26px 32px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "relative" }}>
              <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginBottom: 8 }}>
                <span style={{ fontSize: 8, background: "rgba(255,255,255,0.06)", color: "#F0E8D8", opacity: 0.55, padding: "2px 8px", letterSpacing: "0.1em" }}>{selected.plataforma}</span>
                <span style={{ fontSize: 8, background: FC[selected.formato]?.badge, color: "white", padding: "2px 8px", letterSpacing: "0.15em" }}>{FC[selected.formato]?.label}</span>
              </div>
              <div style={{ fontSize: 9, letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A84C", marginBottom: 5 }}>{selected.pilar}</div>
              <div style={{ fontFamily: "Georgia,serif", fontSize: 24, fontWeight: 500, color: "#F0E8D8", lineHeight: 1.15, maxWidth: 560 }}>{selected.titulo}</div>
              <div style={{ position: "absolute", right: 48, top: 22, fontFamily: "Georgia,serif", fontSize: 64, fontWeight: 700, color: "rgba(201,168,76,0.07)", lineHeight: 1 }}>0{selected.id}</div>
            </div>

            {/* TABS */}
            <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {TABS.map((t, i) => (
                <button key={i} onClick={() => setTab(i)} style={{
                  padding: "11px 20px", background: tab === i ? "rgba(201,168,76,0.1)" : "transparent",
                  border: "none", borderBottom: tab === i ? `2px solid #C9A84C` : "2px solid transparent",
                  color: tab === i ? "#C9A84C" : "#7A6B52", fontFamily: "inherit",
                  fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer",
                }}>{t}</button>
              ))}
            </div>

            {/* TAB CONTENT */}
            <div style={{ padding: "24px 32px 32px" }}>

              {/* TAB 0: HOOKS */}
              {tab === 0 && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 2 }}>
                  {selected.hooks.map((h, i) => (
                    <div key={i} style={{ background: "rgba(255,255,255,0.03)", padding: "16px 14px", borderLeft: `2px solid ${HC[i]}` }}>
                      <div style={{ fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: HC[i], marginBottom: 8 }}>{h.tipo}</div>
                      <div style={{ fontFamily: "Georgia,serif", fontSize: 14, fontStyle: "italic", color: "#F0E8D8", lineHeight: 1.55 }}>"{h.texto}"</div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 1: GUIÓN O SLIDES */}
              {tab === 1 && (
                <div>
                  {/* REEL: guión completo */}
                  {selected.formato === "reel" && selected.guion && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      {[
                        { label: "🎣 HOOK — primeros 3 segundos", content: selected.guion.hook, color: "#A0372A" },
                        { label: "📖 DESARROLLO", content: selected.guion.desarrollo, color: "#2A6060" },
                        { label: "📣 CTA DE CIERRE", content: selected.guion.cta, color: "#5A3A7A" },
                      ].map((block, i) => (
                        <div key={i} style={{ borderLeft: `3px solid ${block.color}`, background: "rgba(255,255,255,0.03)", padding: "16px 18px" }}>
                          <div style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: block.color, marginBottom: 12 }}>{block.label}</div>
                          <pre style={{ fontFamily: "inherit", fontSize: 12, color: "#F0E8D8", opacity: 0.82, lineHeight: 1.75, whiteSpace: "pre-wrap", margin: 0 }}>{block.content}</pre>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CARRUSEL: slides */}
                  {selected.formato === "carrusel" && selected.slides && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      {selected.slides.map((s, i) => (
                        <div key={i} style={{ background: "rgba(255,255,255,0.03)", padding: "14px 18px", borderLeft: `2px solid rgba(201,168,76,${0.2 + i * 0.1})` }}>
                          <div style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A84C", marginBottom: 10 }}>{s.num}</div>
                          <pre style={{ fontFamily: "inherit", fontSize: 12, color: "#F0E8D8", opacity: 0.82, lineHeight: 1.75, whiteSpace: "pre-wrap", margin: 0 }}>{s.copy}</pre>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* ESTÁTICO: script simplificado */}
                  {selected.formato === "estatico" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      {selected.script.map((s, i) => (
                        <div key={i} style={{ display: "flex", gap: 14, background: "rgba(255,255,255,0.03)", padding: "14px 16px", borderLeft: "2px solid rgba(201,168,76,0.22)" }}>
                          <span style={{ fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C9A84C", minWidth: 56, paddingTop: 2, flexShrink: 0 }}>{s.tag}</span>
                          <span style={{ fontSize: 12, color: "#F0E8D8", opacity: 0.8, lineHeight: 1.65 }}>{s.body}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: VISUAL & AUDIO */}
              {tab === 2 && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                  <div>
                    <div style={{ fontSize: 9, letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A84C", marginBottom: 10 }}>Referencia visual / edición</div>
                    <div style={{ background: "rgba(255,255,255,0.03)", padding: "14px 16px", borderLeft: "2px solid rgba(201,168,76,0.22)", fontSize: 12, color: "#F0E8D8", opacity: 0.78, lineHeight: 1.7 }}>{selected.visual}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 9, letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A84C", marginBottom: 10 }}>Audio / música tendencia</div>
                    <div style={{ background: "rgba(201,168,76,0.05)", border: "1px solid rgba(201,168,76,0.12)", padding: "14px 16px", display: "flex", gap: 12 }}>
                      <span style={{ fontSize: 20 }}>🎵</span>
                      <span style={{ fontSize: 12, color: "#F0E8D8", lineHeight: 1.6, opacity: 0.85 }}>{selected.audio}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: CTA */}
              {tab === 3 && (
                <div style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", padding: "18px 20px", fontFamily: "Georgia,serif", fontSize: 16, fontStyle: "italic", color: "#E8D5A3", lineHeight: 1.6 }}>
                  "{selected.cta}"
                </div>
              )}

            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div style={{ padding: "24px 5vw", borderTop: "1px solid rgba(201,168,76,0.12)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <div>
          <div style={{ fontFamily: "Georgia,serif", fontSize: 17, fontStyle: "italic", color: "#C9A84C" }}>Modular Estudio Creativo</div>
          <div style={{ fontSize: 10, color: "#7A6B52", marginTop: 3 }}>Parrilla editorial · Geraldine Arte · Junio 2026</div>
        </div>
        <div style={{ fontSize: 10, color: "#7A6B52", textAlign: "right" }}>Clic en tarjeta para ver desglose · 🎨 Identidad Visual en el filtro</div>
      </div>
    </div>
  );
}

function Sec({ label, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "#C9A84C", marginBottom: 14, paddingBottom: 8, borderBottom: "1px solid rgba(201,168,76,0.15)" }}>{label}</div>
      {children}
    </div>
  );
}
