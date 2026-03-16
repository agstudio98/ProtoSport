// ===== CHATBOT =====
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

const KB = {
  greet: {
    keys: ['hola', 'buenas', 'saludos', 'hey', 'buenos'],
    reply: `¡Hola! Soy ProtoBot, el asistente de <strong>ProtoSport</strong>.\n\nPuedo ayudarte con:\n• Navegar el catálogo\n• Info sobre marcas y productos\n• Consultar métodos de pago\n• Completar una compra por WhatsApp\n\n¿En qué puedo ayudarte hoy?`
  },
  catalogo: {
    keys: ['catalogo', 'catálogo', 'productos', 'ver', 'qué tienen', 'que tienen', 'stock'],
    reply: `Tenemos todo lo que necesitás para entrenar.\n\n<strong>Categorías disponibles:</strong>\n• Calzados deportivos\n• Calzados playeros (Crocs, Ojotas)\n• Remeras de running\n• Buzos deportivos\n• Ropa ciclista\n• Shorts deportivos\n\nPodés ver todo en nuestro <a href="catalogo.html" style="color:var(--arctic);">Catálogo completo →</a>`
  },
  marcas: {
    keys: ['marca', 'marcas', 'nike', 'adidas', 'puma', 'kappa', 'umbro', 'penalty', 'le coq'],
    reply: `Trabajamos con las mejores marcas del deporte.\n\n<strong>Marcas afiliadas:</strong>\n• Nike\n• Adidas\n• Puma\n• Kappa\n• Umbro\n• Penalty\n• Le Coq Sportfit\n\nTodas con garantía y autenticidad certificada.`
  },
  pago: {
    keys: ['pago', 'pagar', 'cómo compro', 'como compro', 'mercadopago', 'visa', 'efectivo', 'cuotas', 'tarjeta'],
    reply: `Aceptamos múltiples formas de pago para tu comodidad.\n\n<strong>Métodos disponibles:</strong>\n• <strong>MercadoPago</strong> — Transferencia y QR\n• <strong>Visa/Mastercard</strong> — Hasta 12 cuotas sin interés\n• <strong>Efectivo</strong> — Con descuento en local\n\nPara coordinar la compra, te dirigimos directo a nuestro WhatsApp.`
  },
  compra: {
    keys: ['comprar', 'compra', 'quiero', 'pedido', 'whatsapp', 'wsp'],
    reply: `¡Perfecto! El proceso de compra es súper simple.\n\n<strong>Paso a paso:</strong>\n1. Abrí el <a href="catalogo.html" style="color:var(--arctic);">catálogo</a>\n2. Hacé click en el producto que te interesa\n3. Presioná "Ver más" y luego "Comprar por WhatsApp"\n4. Te redirigimos a WhatsApp con el pedido listo\n5. ¡Coordinamos entrega o retiro en local!\n\nEstamos en Barrio General Paz, Córdoba.`
  },
  local: {
    keys: ['local', 'dirección', 'donde', 'ubicación', 'general paz', 'córdoba', 'cordoba', 'retiro'],
    reply: `Podés visitarnos en nuestro local.\n\n<strong>ProtoSport Local</strong>\nBarrio General Paz, Córdoba Capital\n\n<strong>Horario de atención:</strong>\nLun a Vie: 9:00 - 20:00\nSábados: 9:00 - 14:00\n\nTambién podés hacer tu pedido online y coordinar el retiro.`
  },
  historia: {
    keys: ['historia', 'quiénes son', 'quienes son', 'fundaron', 'hermanos', 'benitez', 'emprendimiento', '2018'],
    reply: `<strong>ProtoSport</strong> fue fundada en <strong>2018</strong> por los Hermanos Benítez.\n\nComenzaron en el departamento de uno de ellos con sueños grandes y mucha pasión por el deporte. Con esfuerzo y dedicación crecieron hasta alquilar su propio local en el Barrio General Paz, Córdoba.\n\nHoy son referentes en indumentaria deportiva en la ciudad.`
  },
  envio: {
    keys: ['envío', 'envio', 'mandan', 'delivery', 'llega', 'envían'],
    reply: `Consultá por envíos disponibles.\n\nPara consultar disponibilidad de envíos a tu zona, te recomendamos consultar directamente por WhatsApp donde te damos info actualizada sobre:\n• Zonas de cobertura\n• Costos de envío\n• Tiempos estimados\n\n¡Escribinos y te respondemos rápido!`
  },
  default: `No tengo información específica sobre eso.\n\nPero puedo ayudarte con:\n• Ver el <a href="catalogo.html" style="color:var(--arctic);">catálogo de productos</a>\n• Info sobre métodos de pago\n• Ubicación del local\n• Historia de la marca\n\n¿O preferís hablar directo con nosotros en <a href="https://wa.me/5493515000000" target="_blank" style="color:#25D366;">WhatsApp</a>?`
};

function getReply(input) {
  const lower = input.toLowerCase();
  for (const [, val] of Object.entries(KB)) {
    if (val.keys && val.keys.some(k => lower.includes(k))) {
      return val.reply;
    }
  }
  return KB.default;
}

function getTime() {
  return new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
}

function addMessage(text, isUser = false) {
  const msg = document.createElement('div');
  msg.className = `message ${isUser ? 'user' : 'bot'}`;
  msg.innerHTML = `
    <div class="message-avatar">${isUser
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`
      : `<span style="font-family:var(--font-display);font-size:11px;font-weight:900;letter-spacing:-0.5px;">PB</span>`
    }</div>
    <div>
      <div class="message-content">${text.replace(/\n/g, '<br>')}</div>
      <div class="message-time">${getTime()}</div>
    </div>`;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
  const typing = document.createElement('div');
  typing.className = 'message bot';
  typing.id = 'typingIndicator';
  typing.innerHTML = `
    <div class="message-avatar"><span style="font-family:var(--font-display);font-size:11px;font-weight:900;letter-spacing:-0.5px;">PB</span></div>
    <div class="typing-indicator">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>`;
  chatMessages.appendChild(typing);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTyping() {
  const el = document.getElementById('typingIndicator');
  if (el) el.remove();
}

function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  addMessage(text, true);
  chatInput.value = '';
  chatInput.style.height = '50px';

  showTyping();
  setTimeout(() => {
    removeTyping();
    addMessage(getReply(text));
  }, 800 + Math.random() * 600);
}

if (sendBtn) sendBtn.addEventListener('click', sendMessage);

if (chatInput) {
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  chatInput.addEventListener('input', () => {
    chatInput.style.height = '50px';
    chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
  });
}

// Suggestion buttons
document.querySelectorAll('.sugg-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const q = btn.dataset.query;
    chatInput.value = q;
    sendMessage();
  });
});

// Welcome message
setTimeout(() => {
  addMessage(`¡Bienvenido a <strong>ProtoSport</strong>! Soy ProtoBot, tu asistente.\n\nPodés preguntarme sobre productos, marcas, pagos, o cómo comprar. ¿En qué te ayudo?`);
}, 600);
