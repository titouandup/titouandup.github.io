//Tableau liste des projets
const projets = [
  {
    titre: "Homelab Proxmox",
    desc: "Serveur auto-hébergé sous Proxmox : streaming, photos, mots de passe, DNS filtrant et domotique, accessible à distance de façon sécurisée.",
    techs: ["Proxmox", "Linux", "Docker", "Tailscale", "Reverse proxy"],
    lien: "https://github.com/titouandup"
  },
  {
    titre: "Thermostat ESP32",
    desc: "Thermostat connecté pour piloter le chauffage électrique, intégré à Home Assistant.",
    techs: ["ESP32", "C/C++", "Home Assistant"],
    lien: "https://github.com/titouandup"
  },
  {
    titre: "Station météo embarquée (3W)",
    desc: "Station météo complète sur STM32 : capteurs, position GPS (trames NMEA en UART), horodatage RTC, enregistrement sur carte SD, modes de fonctionnement gérés par boutons et LED.",
    techs: ["STM32", "C", "UART", "GPS", "Carte SD", "RTC"],
    lien: "https://github.com/titouandup/StationMeteoSTM32"
  }
];

function badges(techs) {
  return techs.map((t) => `<span class="badge">${t}</span>`).join("");
}

function carteProjet(p) {
  return `
    <article class="carte">
      ${p.image ? `<img src="${p.image}" alt="${p.titre}">` : ""}
      <div class="carte-contenu">
        <h3>${p.titre}</h3>
        <p>${p.desc}</p>
        <div class="techs">${badges(p.techs)}</div>
        <a href="${p.lien}">Voir le code →</a>
      </div>
    </article>`;
}

document.getElementById("liste-projets").innerHTML = projets.map(carteProjet).join("");