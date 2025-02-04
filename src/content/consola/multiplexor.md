---
layout: layouts/default.html
title: Multiplexores de Terminal
---

---

Los multiplexores de terminal son herramientas que permiten gestionar múltiples sesiones dentro de una misma ventana de terminal. Son especialmente útiles para usuarios que trabajan con servidores remotos, sesiones persistentes y organización avanzada del espacio de trabajo en la línea de comandos.

## ¿Qué es un Multiplexor de Terminal?

Un multiplexor de terminal es un programa que permite dividir una sesión de terminal en múltiples paneles o pestañas y gestionar sesiones de manera independiente. Esto es útil para mantener procesos en ejecución, incluso si la conexión con el terminal se pierde.

Algunos [emuladores de terminal](./emulador.md) ya los tienen integrados

### Beneficios de usar un multiplexor:

- Permite dividir la terminal en múltiples paneles.
- Mantiene sesiones activas en segundo plano.
- Facilita la administración de múltiples tareas en un solo entorno.
- Ofrece funcionalidad avanzada como el reenvío de sesiones en SSH.

## Multiplexores Populares

### tmux

`tmux` es uno de los multiplexores más populares en Linux. Ofrece una gran flexibilidad y personalización.

**Características:**

- Soporte para múltiples ventanas y paneles.
- Sesiones persistentes incluso si se cierra la terminal.
- Atajos de teclado personalizables.
- Compatibilidad con scripting y automatización.

**Archivos de configuración:**
- `~/.tmux.conf`

### GNU Screen

`screen` es otro multiplexor ampliamente utilizado, con un enfoque en la estabilidad y facilidad de uso.

**Características:**

- Mantiene sesiones activas en segundo plano.
- Soporte para múltiples ventanas.
- Integración con SSH para sesiones persistentes.
- Permite compartir sesiones con otros usuarios.

**Archivos de configuración:**
- `~/.screenrc`
