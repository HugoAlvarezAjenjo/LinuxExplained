---
layout: layouts/default.html
title: Gestor Paquetes
---

---

Un **gestor de paquetes** es una herramienta de software que automatiza la instalación, actualización, configuración y eliminación de programas en un sistema operativo Linux. Su función principal es simplificar la administración de software y garantizar que las dependencias necesarias para cada aplicación se instalen correctamente.

## Funcionamiento

Los gestores de paquetes utilizan **repositorios**, que son colecciones de paquetes organizadas y mantenidas por la comunidad o por la distribución de Linux. Al instalar un paquete, el gestor verifica las dependencias y las instala automáticamente si es necesario.

Los hay de dos tipos, los que te instalan los paquetes precompilados y los que compilan el software desde el código fuente antes de instalarlo.

## Principales Gestores de Paquetes por Distribución

| Distribución | Gestor de Paquetes | Comando Base |
|-------------|------------------|--------------|
| Debian, Ubuntu | APT (Advanced Package Tool) | `apt` |
| Arch Linux | Pacman | `pacman` |
| Fedora, RHEL, CentOS | DNF (anteriormente YUM) | `dnf` |
| openSUSE | Zypper | `zypper` |
| Gentoo | Portage | `emerge` |
| NixOS | Nix | `nix` |
| Void Linux | XBPS | `xbps-install` |

Para realizar una comparativa entre los distintos comandos usados con cada gestor de paquetes, recomendamos [esta sección](https://wiki.archlinux.org/title/Pacman/Rosetta) de la Wiki de Arch. 

## Dependencias

Los gestores de paquetes resuelven dependencias automáticamente, asegurando que el software funcione correctamente. Sin embargo, algunas herramientas como `dpkg` (Debian) requieren la instalación manual de dependencias.
