---
layout: layouts/default.html
title: Display Manager
---

---

El **Display Manager** (gestor de pantalla) es el componente responsable de gestionar la pantalla de inicio de sesión en Linux. Su función principal es permitir a los usuarios autenticarse y seleccionar su entorno de escritorio antes de acceder a la sesión.

## Funciones del Display Manager

- **Gestión del inicio de sesión**: Proporciona una interfaz gráfica para que los usuarios ingresen sus credenciales.
- **Selección de entorno de escritorio**: Permite elegir entre diferentes entornos de escritorio instalados en el sistema.
- **Gestión de sesiones**: Inicia y administra sesiones de usuario.
- **Cambio de usuario**: Facilita el cambio entre múltiples usuarios sin cerrar sesiones activas.

## Principales Display Managers en Linux

### 1. **GDM (GNOME Display Manager)**

- Usado por el entorno de escritorio GNOME.
- Diseño moderno e integración con Wayland.
- Soporte para autenticación biométrica.

### 2. **SDDM (Simple Desktop Display Manager)**

- Usado por KDE Plasma.
- Interfaz altamente personalizable con temas en QML.
- Soporte para Wayland y X11.

### 3. **LightDM**

- Ligero y rápido, compatible con múltiples entornos de escritorio.
- Soporta diferentes interfaces gráficas como `lightdm-gtk-greeter`.
- Fácil de configurar y personalizar.

### 4. **LXDM**

- Diseñado para el entorno LXQt, pero puede usarse con otros escritorios.
- Ligero y rápido, ideal para sistemas con pocos recursos.

## ¿Cómo cambiar el Display Manager?

En la mayoría de las distribuciones, puedes cambiar el Display Manager instalando uno nuevo y configurándolo como predeterminado. En sistemas basados en Debian/Ubuntu:

```bash
sudo dpkg-reconfigure gdm3  # o sddm, lightdm, lxdm
```

En Arch Linux, se puede habilitar con `systemctl`:

```bash
sudo systemctl enable sddm.service --force
```

