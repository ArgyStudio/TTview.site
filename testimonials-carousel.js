// testimonials-carousel.js

// Testimonios dinámicos y auto-scroll vertical
(function(){
  const data = [
    {name: "María P.", city: "Buenos Aires", time: "16:23", text: "¡Excelente experiencia, retiros inmediatos!"},
    {name: "Lucía G.", city: "Córdoba", time: "09:12", text: "Muy fácil de usar y con gran atención."},
    {name: "Martín R.", city: "Rosario", time: "20:45", text: "La mejor plataforma de casino móvil."},
    {name: "Sofía L.", city: "Mendoza", time: "14:05", text: "Los bonos son increíbles, la recomiendo."},
    {name: "Carlos F.", city: "La Plata", time: "18:30", text: "Interfaz rápida y atractiva."},
    {name: "Ana T.", city: "Mar del Plata", time: "12:50", text: "¡Gané y retiré mis fondos al instante!"},
    {name: "Diego V.", city: "Salta", time: "22:10", text: "Soporte 24/7 y promociones diarias."},
    {name: "Valentina S.", city: "San Juan", time: "11:15", text: "Me encanta la fluidez de la app."},
    {name: "Javier N.", city: "Paraná", time: "17:05", text: "Lo mejor para jugar desde el celular."},
    {name: "Julieta C.", city: "Santa Fe", time: "13:40", text: "Pagos seguros y rápidos."}
    // ... podés agregar más objetos para variabilidad
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
