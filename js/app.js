// Simulación simple de chat
const chatForm = document.getElementById("chat-form");
const chatText = document.getElementById("chat-text");
const chatWindow = document.getElementById("chat-window");

if (chatForm) {
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = chatText.value.trim();
    if (!text) return;

    const msg = document.createElement("div");
    msg.className = "chat-message";
    msg.innerHTML = `<strong>Tú:</strong> ${text}`;
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    chatText.value = "";

    // respuesta simulada del sistema
    setTimeout(() => {
      const reply = document.createElement("div");
      reply.className = "chat-message system";
      reply.textContent = "El crupier baraja las cartas...";
      chatWindow.appendChild(reply);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 800);
  });
}

// Simulación básica de botones de acción
const buttons = document.querySelectorAll(".action-buttons .btn");
const potCenter = document.getElementById("pot-center");
let potValue = 350;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;
    let message = "";

    switch (action) {
      case "fold":
        message = "Te has retirado de la mano.";
        break;
      case "check":
        message = "Has pasado. Esperando a los demás jugadores...";
        break;
      case "call":
        message = "Pagas la apuesta actual.";
        potValue += 100;
        break;
      case "raise":
        message = "Subes la apuesta. Los rivales se ponen nerviosos...";
        potValue += 250;
        break;
      default:
        message = "Acción desconocida.";
    }

    if (potCenter) {
      potCenter.textContent = `$ ${potValue}`;
    }

    const log = document.createElement("div");
    log.className = "chat-message system";
    log.textContent = message;
    chatWindow.appendChild(log);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  });
});
