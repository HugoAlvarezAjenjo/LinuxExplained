---
layout: layouts/default.html
title: Compositor
---

El **Compositor** es un componente clave de la interfaz gráfica en Linux que se encarga de dibujar y combinar todas las ventanas y elementos visuales en pantalla. Su función principal es mejorar la experiencia gráfica proporcionando efectos avanzados y una mejor gestión de las ventanas.

## Función del Compositor

El compositor actúa como intermediario entre el **Display Server** y el **Window Manager**, asegurando que todas las ventanas y gráficos se rendericen de manera fluida y sin interferencias visuales. Sus principales funciones incluyen:

- **Efectos gráficos avanzados**: Transparencias, sombras, desenfoques y animaciones.
- **Redibujo eficiente**: Previene el parpadeo y los cortes de imagen al actualizar solo las partes necesarias de la pantalla.
- **Gestión de superposición de ventanas**: Controla qué ventana está en primer plano y cómo interactúan entre sí.
- **Compatibilidad con alto refresco**: Permite sincronización con la tasa de refresco del monitor (VSync) para evitar desgarros de imagen (*screen tearing*).

## Tipos de Compositores en Linux

Existen dos tipos principales de compositores en Linux:

### 1. **Compositores Integrados**

Son parte del entorno de escritorio y están diseñados para funcionar de manera optimizada con él. Ejemplos:

- **Mutter** (usado en GNOME)
- **KWin** (usado en KDE Plasma)
- **Xfwm** (usado en XFCE)

### 2. **Compositores Independientes**

Se pueden usar con cualquier Window Manager, especialmente en entornos minimalistas o con gestores de ventanas flotantes o en mosaico (*tiling*). Ejemplos:

- **Compton/Picom** (ligero y configurable, ideal para Openbox o i3)
- **XCompmgr** (uno de los primeros compositores, muy básico)
- **Wayfire** (compositor para Wayland con efectos avanzados)

## Compositor en X11 vs Wayland

| Característica | X11 con Compositor | Wayland |
|--------------|------------------|---------|
| Necesidad de un compositor externo | Sí | No (Wayland integra el compositor)
| Rendimiento | Menos eficiente | Más eficiente
| Screen tearing | Puede ocurrir si no está bien configurado | Eliminado por diseño
| Efectos avanzados | Depende del compositor usado | Nativos en la mayoría de los entornos

## ¿Cuándo usar un compositor independiente?

Si usas un Window Manager minimalista o no tienes un entorno de escritorio completo, un compositor independiente como **Picom** puede mejorar tu experiencia visual sin sobrecargar el sistema.

