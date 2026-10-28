# Proyecto Escolar: Estructura de Redes & Inglés 🖥️

Sitio web educativo sobre la arquitectura, historia y componentes de los computadores.

## 📁 Estructura del Proyecto

```text
engl/
│
├── CNAME                  # Configuración de dominio personalizado (nvision.social)
├── index.html             # Estructura principal y semántica del sitio
├── README.md              # Documentación y guía de trabajo para el equipo
│
├── css/
│   └── styles.css         # Estilos visuales, temas, modo responsivo y diseño de tarjetas
│
├── js/
│   └── main.js            # Lógica de cambio bilingüe (Español / Inglés) y utilidades
│
└── assets/
    └── images/            # Fotografías históricas, diagramas de hardware e íconos
```

---

## 👥 Reparto Recomendado de Tareas

Para que cada integrante edite sin pisar el trabajo de los demás:

1. **Integrante 1 (Historia Pre-1980):**
   - Agrega más computadores a la sección `#historia` en `index.html`.
   - Busca fotos históricas libres de derechos y guárdalas en `assets/images/`.
   - Actualiza los textos correspondientes en `js/main.js`.

2. **Integrante 2 (Componentes de Hardware & Redes):**
   - Profundiza en cada tarjeta de `#componentes` (tarjeta madre, procesador, RAM, disco, tarjeta de red/NIC).
   - Explica el rol de cada componente dentro de la materia *Estructura de Redes*.

3. **Integrante 3 (Traducción y Glosario en Inglés):**
   - Revisa y perfecciona las traducciones en el objeto `translations.en` de `js/main.js`.
   - Agrega vocabulario técnico relevante para la profesora de inglés.

4. **Integrante 4 (Laboratorio y Extensiones):**
   - Trabaja en las funciones opcionales: simulación 3D (`Three.js`) y/o comandos de auditoría en PowerShell.

---

## 🚀 Flujo de Trabajo en GitHub con VS Code

Para evitar conflictos al trabajar en equipo:

1. **Antes de empezar a trabajar siempre actualiza:**
   ```bash
   git pull origin main
   ```
2. **Crea tu propia rama de trabajo:**
   ```bash
   git checkout -b feature/nombre-de-tu-seccion
   ```
3. **Guarda y sube tus cambios:**
   ```bash
   git add .
   git commit -m "n"
   git push origin feature/nombre-de-tu-seccion
   ```
4. **Crea un Pull Request en GitHub:**
   - Un compañero revisa los cambios y los une (*merge*) a `main`.

---

## 🌐 Dominio y Despliegue
El repositorio cuenta con el archivo `CNAME` configurado para `nvision.social` y está listo para servirse tanto en la red LAN escolar como en GitHub Pages.
