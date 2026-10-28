/**
 * main.js - Manejo de traducción bilingüe (Español / Inglés),
 * menú adaptativo para dispositivos móviles y utilidades interactivas.
 */

// Diccionario de textos bilingüe
const translations = {
  es: {
    badge_hero: "Estructura de Redes • Proyecto Escolar",
    hero_title: "Arquitectura y Evolución de los Computadores",
    hero_desc: "Una base interactiva diseñada para explorar la historia, componentes y funcionamiento del hardware computacional y su impacto en las redes.",
    btn_timeline: "Línea de Tiempo",
    btn_components: "Ver Componentes",
    nav_history: "Historia",
    nav_components: "Componentes",
    nav_network: "Hardware & Redes",
    nav_glossary: "Glosario",
    nav_lab: "Laboratorio",
    
    // Historia
    hist_title: "Computadores Históricos (Antes de 1980)",
    hist_desc: "Los primeros hitos de la computación que sentaron las bases para las redes y la microcomputación moderna.",
    eniac_title: "ENIAC - Primer Computador Electrónico de Propósito General",
    eniac_desc: "Ocupaba una habitación entera y empleaba más de 17.000 válvulas de vacío. Fue crucial para el cálculo balístico y científico.",
    ibm7090_title: "IBM 7090 - Sistema Central Transistorizado",
    ibm7090_desc: "Reemplazó las válvulas de vacío por transistores, multiplicando por 6 la velocidad de cálculo y reduciendo el consumo eléctrico.",
    altair_title: "Altair 8800 - Primer Microcomputador Comercial",
    altair_desc: "Basado en el procesador Intel 8080. Dio origen al software de microcomputadoras y al inicio de la informática personal.",
    apple2_title: "Apple II - Microcomputador Personal Integrado",
    apple2_desc: "Uno de los primeros microcomputadores producidos en masa con teclado integrado, gráficos a color y ranuras de expansión.",

    // Componentes
    comp_title: "Componentes de un Computador",
    comp_desc: "Los pilares del hardware que permiten procesar datos, ejecutar programas y comunicarse en red.",
    mb_title: "Placa Madre (Motherboard)",
    mb_desc: "El circuito principal que interconecta el procesador, memorias, tarjetas de red y dispositivos de almacenamiento.",
    mb_sub: "Conectividad & Buses",
    cpu_title: "Procesador (CPU)",
    cpu_desc: "El cerebro del sistema encargado de ejecutar instrucciones, realizar cálculos lógicos y coordinar periféricos.",
    cpu_sub: "Unidad Central de Procesamiento",
    ram_title: "Memoria RAM",
    ram_desc: "Almacenamiento de alta velocidad y temporal donde se cargan los programas en ejecución y los búferes de red.",
    ram_sub: "Memoria de Acceso Aleatorio",
    storage_title: "Almacenamiento (SSD / HDD)",
    storage_desc: "Memoria persistente donde se almacena el sistema operativo, controladores, datos y servicios de red.",
    storage_sub: "Persistencia de Datos",
    nic_title: "Adaptador de Red (NIC)",
    nic_desc: "Hardware clave en estructura de redes para conectar el host a redes Ethernet LAN o inalámbricas Wi-Fi.",
    nic_sub: "Interfaz LAN / WLAN",
    psu_title: "Fuente de Poder (PSU)",
    psu_desc: "Convierte la corriente alterna en los voltajes continuos que alimentan con estabilidad a cada circuito del equipo.",
    psu_sub: "Distribución Eléctrica",

    // Hardware y Redes
    net_title: "Del Hardware a la Red",
    net_desc: "Cómo el equipo físico se enlaza e interactúa en una infraestructura de red local (LAN).",
    mac_title: "Dirección MAC (Hardware Address)",
    mac_desc: "Identificador físico único de 48 bits grabado directamente en la memoria ROM de cada tarjeta de red (NIC) para la capa de enlace de datos.",
    eth_title: "Puertos Físicos y Conectividad",
    eth_desc: "Interfaces RJ-45 para cable de par trenzado (Ethernet) e interfaces de radiofrecuencia (Wi-Fi) conectadas mediante el bus PCIe.",
    flow_title: "Flujo de Datos en el Host",
    flow_desc: "Los paquetes viajan desde la memoria RAM, son procesados por la CPU y enviados al controlador NIC para su modulación y transmisión en el medio físico.",

    // Glosario
    glos_title: "Glosario Técnico de Redes y Computación",
    glos_desc: "Conceptos esenciales en inglés técnico para la comunicación en redes y arquitectura de sistemas.",
    term_throughput: "Throughput (Tasa de transferencia efectiva)",
    desc_throughput: "Volumen real de datos transferidos con éxito entre dos puntos de la red en un intervalo de tiempo.",
    term_bandwidth: "Bandwidth (Ancho de banda)",
    desc_bandwidth: "Capacidad máxima teórica de transmisión de un canal o medio de red medido en bps (bits por segundo).",
    term_nic: "NIC (Network Interface Card)",
    desc_nic: "Circuito integrado que proporciona el puente físico y lógico entre el bus interno del computador y el cable de red.",
    term_packet: "Packet (Paquete de red)",
    desc_packet: "Unidad de datos formateada con encabezados de origen, destino y carga útil que viaja por la red.",

    // Laboratorio
    lab_title: "Área de Innovación & Expansiones",
    lab_desc: "Módulos experimentales preparados para futuras entregas del equipo.",
    model3d_title: "Simulación de Torre 3D",
    model3d_desc: "Espacio reservado para integrar Three.js o un visor 3D interactivo que permita rotar y desarmar una torre de PC virtual.",
    model3d_wait: "Modelo 3D en desarrollo (Three.js / WebGL)",
    ps_title: "Diagnóstico de Hardware (PowerShell)",
    ps_desc: "Código nativo en Windows para consultar los componentes reales del equipo en el que se ejecuta la práctica de laboratorio:",
    copy_code: "Copiar",
    copied_code: "¡Copiado!",

    footer_text: "Estructura de Redes"
  },
  en: {
    badge_hero: "Network Structure • School Project",
    hero_title: "Computer Architecture and Evolution",
    hero_desc: "An interactive baseline designed to explore the history, hardware components, and networking foundation of computers.",
    btn_timeline: "Timeline",
    btn_components: "View Components",
    nav_history: "History",
    nav_components: "Components",
    nav_network: "Hardware & Networks",
    nav_glossary: "Glossary",
    nav_lab: "Lab",

    // History
    hist_title: "Historical Computers (Pre-1980s)",
    hist_desc: "Pioneering milestones in computing that paved the way for networking and modern personal computing.",
    eniac_title: "ENIAC - General-Purpose Electronic Computer",
    eniac_desc: "Occupied an entire room and used over 17,000 vacuum tubes. Key for ballistic trajectories and scientific calculation.",
    ibm7090_title: "IBM 7090 - Transistorized Mainframe System",
    ibm7090_desc: "Replaced fragile vacuum tubes with solid-state transistors, multiplying computing speeds by 6 and saving energy.",
    altair_title: "Altair 8800 - First Commercial Microcomputer",
    altair_desc: "Powered by the Intel 8080 CPU. Marked the birth of microcomputer software and the dawn of personal computing.",
    apple2_title: "Apple II - Integrated Personal Microcomputer",
    apple2_desc: "One of the first mass-produced microcomputers with integrated keyboard, color graphics, and expansion slots.",

    // Components
    comp_title: "Computer Components",
    comp_desc: "The essential hardware building blocks that process instructions, run software, and communicate across networks.",
    mb_title: "Motherboard",
    mb_desc: "The central circuit board that bridges the CPU, memory modules, network adapters, and permanent storage drives.",
    mb_sub: "Connectivity & System Buses",
    cpu_title: "Central Processing Unit (CPU)",
    cpu_desc: "The computer's brain tasked with executing instructions, running logic calculations, and managing hardware peripherals.",
    cpu_sub: "Core Execution Engine",
    ram_title: "RAM Memory",
    ram_desc: "Ultra fast temporary storage where active programs, operating system tasks, and network buffers reside.",
    ram_sub: "Random Access Memory",
    storage_title: "Storage Drives (SSD / HDD)",
    storage_desc: "Non-volatile memory where the operating system, network drivers, user data, and service files are preserved.",
    storage_sub: "Persistent Storage",
    nic_title: "Network Interface Card (NIC)",
    nic_desc: "Critical hardware for network structure that links the computer to local Ethernet LAN or wireless Wi-Fi.",
    nic_sub: "LAN / WLAN Interface",
    psu_title: "Power Supply Unit (PSU)",
    psu_desc: "Converts household AC power into regulated low-voltage DC power to safely feed all hardware components.",
    psu_sub: "Clean Power Distribution",

    // Hardware & Networks
    net_title: "From Hardware to Network",
    net_desc: "How physical host hardware interfaces with local area network (LAN) infrastructures.",
    mac_title: "MAC Address (Hardware Address)",
    mac_desc: "A unique 48-bit physical identifier permanently stored in the NIC ROM used at the Data Link Layer.",
    eth_title: "Physical Ports and Connectivity",
    eth_desc: "RJ-45 interfaces for twisted pair Ethernet cables and wireless RF adapters interconnected through the PCIe bus.",
    flow_title: "Host Data Flow Architecture",
    flow_desc: "Data packets stream from RAM buffers, undergo CPU processing, and are dispatched to the NIC controller for physical signal modulation.",

    // Glossary
    glos_title: "Technical Glossary (Networks & Hardware)",
    glos_desc: "Core English terminology essential for computer architecture and network engineering.",
    term_throughput: "Throughput",
    desc_throughput: "Actual amount of data successfully transferred across a network link within a specific timeframe.",
    term_bandwidth: "Bandwidth",
    desc_bandwidth: "Theoretical maximum transmission capacity of a network communication channel measured in bps.",
    term_nic: "NIC (Network Interface Card)",
    desc_nic: "Dedicated expansion card or integrated chipset providing physical and logical access to network media.",
    term_packet: "Packet",
    desc_packet: "A structured unit of data formatted with headers containing source, destination, and payload.",

    // Lab
    lab_title: "Innovation Lab & Expansions",
    lab_desc: "Experimental modules prepared for team milestones and advanced presentations.",
    model3d_title: "3D PC Case Simulation",
    model3d_desc: "Reserved space to integrate Three.js or WebGL models to inspect and disassemble a virtual PC tower.",
    model3d_wait: "3D model placeholder (Three.js / WebGL)",
    ps_title: "Hardware Diagnostics (PowerShell)",
    ps_desc: "Native Windows code to inspect the physical hardware specifications during lab sessions:",
    copy_code: "Copy",
    copied_code: "Copied!",

    footer_text: "Network Structure"
  }
};

// Carga de idioma persistente (guarda en localStorage)
let currentLang = localStorage.getItem('user_lang') || 'es';

function toggleLanguage() {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('user_lang', currentLang);
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const langLabel = document.getElementById('lang-label');
  if (langLabel) {
    langLabel.textContent = lang.toUpperCase();
  }
  document.documentElement.lang = lang;
}

// Configuración del botón de copiar código
function setupCopyButton() {
  const copyBtn = document.getElementById('copy-code-btn');
  const codeElem = document.getElementById('ps-code');
  if (!copyBtn || !codeElem) return;

  copyBtn.addEventListener('click', () => {
    const textToCopy = codeElem.textContent.trim();
    navigator.clipboard.writeText(textToCopy).then(() => {
      copyBtn.textContent = translations[currentLang].copied_code;
      setTimeout(() => {
        copyBtn.textContent = translations[currentLang].copy_code;
      }, 2000);
    });
  });
}

// Menú hamburguesa (3 rayitas) para móviles y tablets
function setupMobileMenu() {
  const menuBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (!menuBtn || !navMenu) return;

  menuBtn.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('is-active');
    menuBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    menuBtn.textContent = isActive ? '✕' : '☰';
  });

  // Cerrar el menú automáticamente al hacer clic en cualquier enlace
  const links = navMenu.querySelectorAll('a');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('is-active')) {
        navMenu.classList.remove('is-active');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.textContent = '☰';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const langToggleBtn = document.getElementById('lang-toggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', toggleLanguage);
  }
  setupCopyButton();
  setupMobileMenu();
  applyLanguage(currentLang);
});
