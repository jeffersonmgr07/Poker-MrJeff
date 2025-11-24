# PokerRoom Demo 🎲🃏

PokerRoom Demo es una **interfaz de mesa de póker online** pensada como proyecto de portafolio para demostrar habilidades de **diseño frontend**, **maquetación** e **interactividad básica** con JavaScript.

> ⚠️ Importante:  
> Este proyecto es solo una **demo visual**.  
> No procesa dinero real ni está conectada a ningún sistema de apuestas.  
> Su propósito es únicamente **educativo y de demostración**.

---

## ✨ Características

- Diseño de **mesa de póker estilo casino** (Texas Hold'em).
- Distribución de **jugadores alrededor de la mesa** con stacks simulados.
- Visualización de **bote (pot)** y **cartas comunitarias** simuladas.
- **Barra de acciones del jugador**:
  - Retirarse (Fold)
  - Pasar (Check)
  - Pagar (Call)
  - Subir (Raise)
- Panel lateral con:
  - Información de la mesa (ciegas, jugadores, bote, etc.)
  - Historial de manos simulado
- Panel de **chat de la mesa** con:
  - Envío de mensajes desde el jugador
  - Mensajes de sistema simulados
- Diseño **responsive** para pantallas pequeñas (tablet / móvil).

---

## 🧱 Tecnologías usadas

- **HTML5**
- **CSS3** (diseño responsive, layout con Grid y Flexbox)
- **JavaScript (Vanilla)** para la lógica básica de interacción

Sin frameworks, para mostrar la lógica “desde cero”.

---

## 🗂️ Estructura del proyecto

```text
poker-app-frontend/
├── index.html       # Página principal con la estructura de la app
├── css/
│   └── style.css    # Estilos de la mesa, layout y componentes
├── js/
│   └── app.js       # Lógica básica de chat y botones de acción
└── img/
    └── ...          # (Opcional) Cartas, logos, fichas, etc.
