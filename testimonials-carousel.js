// testimonials-carousel.js

// Testimonios dinámicos y auto-scroll vertical
(function(){
  const data = [
  // ... tus datos originales ...
  {name: "Laura M.", city: "Tucumán", time: "15:20", text: "¡Vine por el anuncio de TikTok y qué suerte! Gané en mi primera jugada 🎉"},
  {name: "Roberto P.", city: "Corrientes", time: "19:55", text: "Gracias al TikTok que vi, probé y retiré ganancias al toque. 😎"},
  {name: "Camila V.", city: "Ushuaia", time: "10:10", text: "Nunca creí en suerte hasta que vi el TikTok y gané $15k 🍀"},
  {name: "Fernando C.", city: "San Luis", time: "23:15", text: "El algoritmo de TikTok me mostró esto y fue mi mejor coincidencia 💰"},
  {name: "Daniela R.", city: "Río Negro", time: "08:30", text: "¡Por el anuncio de TikTok entré y tuve la suerte más grande! 🤑"},
  {name: "Gonzalo T.", city: "Chubut", time: "21:40", text: "Vi el TikTok a las 3 AM y ahora tengo +$50k. ¡Increíble! �"},
  {name: "Micaela J.", city: "Catamarca", time: "17:25", text: "Al principio dudé del TikTok, pero confirmo: es 100% real ✔️"},
  {name: "Lucas G.", city: "Formosa", time: "14:18", text: "¡Suerte instantánea! Vine por TikTok y en 10 min ya ganaba 💸"},
  {name: "Romina P.", city: "Jujuy", time: "16:50", text: "El mejor consejo que me dio TikTok: registrarme aquí 🏆"},
  {name: "Oscar L.", city: "Santa Cruz", time: "12:05", text: "Gané $20k tras ver el anuncio. ¡TikTok no miente esta vez! 🙌"},
  {name: "Natalia F.", city: "Neuquén", time: "22:30", text: "De ver el TikTok a retirar ganancias en 1 hora. ¡Épico! ⚡"},
  {name: "Pablo S.", city: "Santiago del Estero", time: "13:22", text: "Si dudas del TikTok como yo dudé: ¡ARRIESGATE! Vale totalmente 💯"}
];
  const container = document.getElementById('testimonialsCarousel');
  let idx = 0, timer;

  // Crear y anexar elementos al contenedor
  data.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'testimonial-item';
    div.innerHTML = `
      <p>"${item.text}"</p>
      <div class="meta">${item.name}, ${item.city} · ${item.time}</div>
    `;
    container.appendChild(div);
  });

  const items = container.querySelectorAll('.testimonial-item');

  function show(index) {
    items.forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });
  }

  function next() {
    idx = (idx + 1) % items.length;
    show(idx);
  }

  // Mostrar el primero y lanzar auto-scroll
  show(0);
  timer = setInterval(next, 4000);

  // Pausar al hacer hover o touch
  container.addEventListener('mouseenter', () => clearInterval(timer));
  container.addEventListener('mouseleave', () => timer = setInterval(next, 4000));
  container.addEventListener('touchstart', () => clearInterval(timer));
  container.addEventListener('touchend', () => timer = setInterval(next, 4000));
})();
