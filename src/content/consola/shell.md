---
layout: layouts/default.html
title: Shell
---

---

La **shell** es un programa que actúa como intermediario entre el usuario y el sistema operativo. Permite ejecutar comandos, administrar procesos y automatizar tareas mediante scripts.

En sí es un **intérprete de comandos** que permite a los usuarios interactuar con el sistema operativo. Su principal función es recibir comandos del usuario, interpretarlos y ejecutar las acciones correspondientes.

## Shells más Populares

### Bash (Bourne Again Shell)

**Bash** es la shell predeterminada en la mayoría de distribuciones Linux. Es una evolución de la Bourne Shell (`sh`) con mejoras significativas, como:

- Autocompletado de comandos.
- Historial de comandos (`history`).
- Variables y scripting avanzado.
- Manejo de alias y funciones personalizadas.

Si has tocado la terminal en Linux, seguramente hayas usado esto. Se puede configurar mediante dos archivos principales:

- `~/.bashrc` → Configuración interactiva.
- `~/.bash_profile` o `~/.profile` → Configuración de inicio de sesión.

### Zsh (Z Shell)

**Zsh** es una alternativa avanzada a Bash, con características adicionales que mejoran la experiencia del usuario:

- Corrección automática de comandos.
- Resaltado de sintaxis en la terminal.
- Potente sistema de plugins y temas (Oh My Zsh).
- Autocompletado mejorado y selección de archivos con tabulador.

Se compone de un archivo de configuracion:

- `~/.zshrc` → Configuración principal.

### Fish (Friendly Interactive Shell)

**Fish** es una shell moderna con un enfoque en la facilidad de uso y características innovadoras:

- Sugerencias automáticas de comandos basadas en el historial.
- Configuración sin necesidad de editar archivos manualmente.
- Sintaxis más limpia y menos dependiente de variables de entorno.

Se compone de un archivo de configuración:

- `~/.config/fish/config.fish` → Configuración principal.

<br>

Yo personalmente uso una ZSH