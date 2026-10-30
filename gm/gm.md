# Instrucciones de Idioma y Comunicación

- Idioma principal: Comunícate, explica y responde en español.
- Documentación y mensajes: Redacta explicaciones, resúmenes, mensajes de estado y comentarios en español a menos que se indique explícitamente lo contrario.

## Notificación Sonora al Finalizar
- Al completar una tarea o respuesta, ejecuta el siguiente código corto para emitir un sonido de que finalizó la tarea:
  ```powershell
  [console]::beep(1000, 250)
  ```

## Lectura de Archivos sin Consola (Regla Estricta de Lectura por Lotes)
- **Prohibido usar comandos de consola para leer o buscar texto** (nada de `Select-String`, `grep`, `Get-Content`, `type` o scripts de PowerShell para inspeccionar código).
- Utiliza **exclusivamente la herramienta nativa `read_file`** de forma directa.
- Para archivos extensos de más de 800 líneas, lee el archivo por lotes consecutivos usando los parámetros de rango de líneas:
  - Primer lote: `StartLine: 1`, `EndLine: 800`
  - Segundo lote: `StartLine: 801`, `EndLine: 1600`
  - Tercer lote: `StartLine: 1601`, `EndLine: 2400`
  - Y así sucesivamente hasta cubrir la sección requerida.

## Edición de Archivos en CLI (Windows / CRLF)
- En el entorno de la terminal de windows, para evitar errores de incompatibilidad de saltos de linea con `edit_file`, utiliza prioritario `write_file` para actualizar archivos completos de manera directa y rápida.

## Autenticación de GitHub CLI (Al Iniciar Cada Chat)
- Cada vez que comience una nueva conversación o sesión de chat, la IA debe consultar y verificar el token activo de GitHub CLI ejecutando:
  ```powershell
  gh auth token
  ```
- Usa este token para cualquier operación de `git push` o autenticación con repositorios remotos y así evitar bloqueos por falta de credenciales.

## Configuración y Autenticación de GitHub CLI en Nuevas PCs
- En nuevas computadoras o entornos donde no esté configurado o instalado GitHub CLI (`gh`):
  1. **Instalación obligatoria**: Asegurarse de que esté instalado; si no lo está, ejecutar:
     ```powershell
     winget install github.cli
     ```
  2. **Inicio de sesión**: Ejecutar el comando para iniciar sesión:
     ```powershell
     gh auth login
     ```
  3. **Entrega de código y enlace**: La IA debe capturar y proporcionar directamente en la respuesta la URL (enlace) y el código de un solo uso generado por GitHub CLI para que el usuario pueda iniciar sesión en el navegador, asegurándose de que la herramienta quede correctamente instalada y autenticada.

## Repositorios y Automatización de Git
- **Sincronización Previa Obligatoria (Git Pull Siempre ANTES)**:
  - Siempre, antes de realizar cualquier cambio o modificación de código en la PC local, es **obligatorio** ejecutar un `git pull` para descargar primero los cambios de los demás colaboradores y evitar conflictos:
  ```powershell
  git pull origin main
  ```
- **Git Push Automático**:
  - Al terminar las modificaciones en el repositorio actual de trabajo (como `edunv`, `engl` o cualquier otro repositorio Git en el que se esté trabajando), realiza automáticamente `git add .`, `git commit -m "n"` y `git push origin main` (usando el token de autenticación si es necesario).
  - El mensaje del commit siempre debe ser únicamente `"n"`.
  - No le pidas al usuario confirmaciones para hacer push ni le indiques usar GitHub Desktop.
