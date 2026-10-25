# Instrucciones de Idioma y Comunicación

- Idioma principal: Comunícate, explica y responde en español.
- Documentación y mensajes: Redacta explicaciones, resúmenes, mensajes de estado y comentarios en español a menos que se indique explícitamente lo contrario.

## Notificación Sonora al Finalizar
- Al completar una tarea o respuesta, ejecuta el siguiente código corto para emitir un sonido de que finalizó la tarea:
  ```powershell
  [console]::beep(1000, 250)
  ```

## Repositorios y Automatización de Git
- **Git Push Automático**: Al terminar modificaciones en el repositorio actual de trabajo (como `edunv`, `engl` o cualquier otro repositorio Git en el que se esté trabajando), realiza automáticamente `git add .`, `git commit -m "n"` y `git push origin main`.
- El mensaje del commit siempre debe ser únicamente `"n"`.
- No le pidas al usuario confirmaciones para hacer push ni le indiques usar GitHub Desktop.
