---
layout: layouts/default.html
title: Display Server
---

---

El **Display Server** (servidor de pantalla) es un componente esencial en la interfaz gráfica de Linux. Su función principal es actuar como intermediario entre el hardware gráfico y las aplicaciones que generan interfaces gráficas, permitiendo la representación visual en la pantalla.

## Función del Display Server

El servidor de pantalla gestiona:
- **Entrada y salida de gráficos**: Renderiza las interfaces gráficas y las muestra en la pantalla.
- **Eventos de entrada del usuario**: Captura y envía eventos del teclado, ratón y otros dispositivos de entrada a las aplicaciones.
- **Gestión de ventanas**: Interactúa con el Window Manager para definir cómo se organizan las ventanas en pantalla.

## Principales Display Servers en Linux

### 1. **X11 (Xorg)**
X11, o simplemente X, es el sistema de ventana más antiguo y ampliamente utilizado en Linux. Xorg es su implementación más común.

**Características:**
- Modelo cliente-servidor, donde las aplicaciones (clientes) se comunican con el servidor de pantalla.
- Soporta redirección remota de aplicaciones gráficas.
- Modular y altamente extensible mediante extensiones como XRandR y XComposite.

**Desventajas:**
- Diseño anticuado con problemas de seguridad y rendimiento.
- Necesita un compositor adicional para efectos modernos y fluidez.

### 2. **Wayland**
Wayland es un protocolo más moderno que busca reemplazar a X11, ofreciendo una arquitectura más simple y eficiente.

**Características:**
- No usa un modelo cliente-servidor tradicional, reduciendo la latencia y mejorando la seguridad.
- Incorpora compositor integrado, eliminando la necesidad de componentes externos como XComposite.
- Mejor compatibilidad con pantallas HiDPI y sincronización de frames.

**Desventajas:**
- Todavía no es compatible con todas las aplicaciones y controladores gráficos.
- Falta de compatibilidad con el redireccionamiento remoto de aplicaciones (aunque existen soluciones como PipeWire para transmisión de pantalla).

## Diferencias entre X11 y Wayland

| Característica  | X11 (Xorg) | Wayland |
|---------------|------------|---------|
| Modelo       | Cliente-servidor | Directo con compositor |
| Rendimiento  | Más latencia | Menos latencia |
| Seguridad    | Menos segura (X11 permite sniffing de entradas) | Más segura |
| Soporte de Red | Sí | No nativo |
| Soporte de HiDPI | Limitado | Nativo |

