// Objeto con textos para ambos idiomas
const texts = {
  es: {
    alertSaved: "✅ ¡Proyecto guardado con éxito!",
    alertError: "❌ Error al guardar: ",
    deleteConfirm: "¿Estás seguro de eliminar este proyecto?",
    gpsError: "Error al obtener ubicación: ",
    gpsNotSupported: "Geolocalización no soportada en este navegador.",
    invalidCoords: "Ingresa coordenadas válidas primero.",
    noProjectsExcel: "No hay proyectos para exportar.",
    noProjectsPDF: "No hay proyectos para exportar.",
    jsPDFNotLoaded: "jsPDF no está cargado. Intenta recargar la página.",
    placeholders: {
      jobName: "Ej: Parque Central",
      dcvLocation: "Ej: Cerca de la válvula principal",
      masterValve: "Ej: Válvula 1",
      flowSensor: "Ej: FS-200",
      decode: "Ej: 23",
      location: "Ej: Camino principal",
      runTime: "20",
       labelAreaType: "Tipo de área:",
    optionLawn: "Césped",
    optionBed: "Jardín",
    labelHeadType: "Tipo de aspersores:",
    optionSpray: "Aspersor fijo",
    optionRotor: "Rotor",
    optionMpRotor: "Mp Rotor",

    },
    buttons: {
      addZone: "➕ Agregar Zona",
      saveProject: "💾 Guardar Proyecto",
      viewLocal: "📂 Ver Locales",
      viewSheet: "☁️ Ver desde Google Sheets",
      exportExcel: "📊 Exportar a Excel",
      exportPDF: "📄 Exportar a PDF"
    },
    headings: {
      generalInfo: "Información General",
      zones: "Zonas de Riego"
    }
  },
  en: {
    alertSaved: "✅ Project saved successfully!",
    alertError: "❌ Error saving project: ",
    deleteConfirm: "Are you sure you want to delete this project?",
    gpsError: "Error getting location: ",
    gpsNotSupported: "Geolocation is not supported in this browser.",
    invalidCoords: "Please enter valid coordinates first.",
    noProjectsExcel: "There are no projects to export.",
    noProjectsPDF: "There are no projects to export.",
    jsPDFNotLoaded: "jsPDF is not loaded. Try refreshing the page.",
    placeholders: {
      jobName: "Ex: Central Park",
      dcvLocation: "Ex: Near main valve",
      masterValve: "Ex: Valve 1",
      flowSensor: "Ex: FS-200",
      decode: "Ex: 23",
      location: "Ex: Main road",
      runTime: "20",
      labelAreaType: "Type of Area:",
      optionLawn: "Lawn",
      optionBed: "Bed",
      labelHeadType: "Type of Heads:",
      optionSpray: "Spray",
      optionRotor: "Rotor",
      optionMpRotor: "Mp Rotor",
        optionDrip: "Drip"
    },
    buttons: {
      addZone: "➕ Add Zone",
      saveProject: "💾 Save Project",
      viewLocal: "📂 View Local",
      viewSheet: "☁️ View from Google Sheets",
      exportExcel: "📊 Export to Excel",
      exportPDF: "📄 Export to PDF"
    },
    headings: {
      generalInfo: "General Information",
      zones: "Irrigation Zones"
    }
  }
};

let currentLang = 'es';

// Actualiza los textos y placeholders según idioma actual
function updateTexts() {
  document.getElementById('jobName').placeholder = texts[currentLang].placeholders.jobName;
  document.getElementById('dcvLocation').placeholder = texts[currentLang].placeholders.dcvLocation;
  document.getElementById('masterValve').placeholder = texts[currentLang].placeholders.masterValve;
  document.getElementById('flowSensor').placeholder = texts[currentLang].placeholders.flowSensor;

  // Actualizar headers tabla zonas
  const zonesTableHeaders = document.querySelectorAll('#zonesTable th');
  zonesTableHeaders[0].textContent = "Zone"; // Igual en ambos idiomas
  zonesTableHeaders[1].textContent = currentLang === 'es' ? "Decode" : "Decode";
  zonesTableHeaders[2].textContent = currentLang === 'es' ? "Location" : "Location";
  zonesTableHeaders[3].textContent = currentLang === 'es' ? "Bed/Lawn" : "Bed/Lawn";
  zonesTableHeaders[4].textContent = currentLang === 'es' ? "Type of Heads" : "Type of Heads";
  zonesTableHeaders[5].textContent = currentLang === 'es' ? "Run Time (min)" : "Run Time (min)";
  zonesTableHeaders[6].textContent = currentLang === 'es' ? "Foto" : "Photo";
  zonesTableHeaders[7].textContent = currentLang === 'es' ? "GPS Location" : "GPS Location";
  zonesTableHeaders[8].textContent = currentLang === 'es' ? "Mapa" : "Map";

  // Actualizar botones formulario
  document.querySelector('button[onclick="addZone()"]').textContent = texts[currentLang].buttons.addZone;
  document.querySelector('form#riegoForm button[type="submit"]').textContent = texts[currentLang].buttons.saveProject;
  document.querySelector('button[onclick="loadProjects()"]').textContent = texts[currentLang].buttons.viewLocal;
  document.querySelector('button[onclick="loadProjectsFromSheet()"]').textContent = texts[currentLang].buttons.viewSheet;

  // Botones exportar
  document.querySelector('button[onclick="exportToExcel()"]').textContent = texts[currentLang].buttons.exportExcel;
  document.querySelector('button[onclick="exportToPDF()"]').textContent = texts[currentLang].buttons.exportPDF;

  // Cambiar encabezados
  document.querySelector('form#riegoForm h2:nth-of-type(1)').textContent = texts[currentLang].headings.generalInfo;
  document.querySelector('form#riegoForm h2:nth-of-type(2)').textContent = texts[currentLang].headings.zones;

  // Actualizar placeholders inputs dinámicos (decode, location, runTime)
  const table = document.getElementById('zonesTable');
  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    row.cells[1].querySelector('input').placeholder = texts[currentLang].placeholders.decode;
    row.cells[2].querySelector('input').placeholder = texts[currentLang].placeholders.location;
    row.cells[5].querySelector('input').placeholder = texts[currentLang].placeholders.runTime;

    // Actualizar selects de Bed/Lawn y Type of Heads
    const bedLawnSelect = row.cells[3].querySelector('select');
    bedLawnSelect.options[0].text = currentLang === 'es' ? 'Bed' : 'Bed';
    bedLawnSelect.options[1].text = currentLang === 'es' ? 'Lawn' : 'Lawn';

    const headsSelect = row.cells[4].querySelector('select');
    headsSelect.options[0].text = currentLang === 'es' ? 'Rotor' : "Rotor's";
    headsSelect.options[1].text = currentLang === 'es' ? 'Aspersor' : 'Spray';
    headsSelect.options[2].text = currentLang === 'es' ? 'Mp Rotor' : "Mp Rotor's";
    headsSelect.options[3].text = currentLang === 'es' ? 'Goteo' : 'Drip';

    // Actualizar botón Mapa
    row.cells[8].querySelector('button').textContent = currentLang === 'es' ? '🗺️ Ver Mapa' : '🗺️ View Map';
  }
}

// Escuchar cambio en selector de idioma
document.getElementById('langSelector').addEventListener('change', e => {
  currentLang = e.target.value;
  updateTexts();
});

// Al cargar DOM, inicializa textos
document.addEventListener('DOMContentLoaded', () => {
  updateTexts();
});


// ===== VARIABLES GLOBALES =====
let zonesCount = 1;
let map;
let markers = [];
let proyectosDesdeSheets = [];
let jsPDF;

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', function () {
  initMap();
  addZone();
  loadProjects();
});

// ===== FORMULARIO - ZONAS =====
function addZone() {
  const table = document.getElementById('zonesTable');
  const row = table.insertRow(-1);

  // Zone
  const cellZone = row.insertCell(0);
  cellZone.innerText = `Zone ${zonesCount}`;

  // Decode
  const cellDecode = row.insertCell(1);
  cellDecode.innerHTML = `<input type="text" placeholder="${texts[currentLang].placeholders.decode}">`;

  // Location
  const cellLocation = row.insertCell(2);
  cellLocation.innerHTML = `<input type="text" placeholder="${texts[currentLang].placeholders.location}">`;

  // Bed/Lawn
  const cellBedLawn = row.insertCell(3);
  cellBedLawn.innerHTML = `
    <select>
      <option value="Bed">${currentLang === 'es' ? 'bed' : 'Bed'}</option>
      <option value="Lawn">${currentLang === 'es' ? 'lawn' : 'Lawn'}</option>
    </select>
  `;

  // Type of Heads
  const cellHeads = row.insertCell(4);
  cellHeads.innerHTML = `
    <select>
      <option value="Rotor's">${currentLang === 'es' ? 'Rotor' : "Rotor's"}</option>
      <option value="Spray">${currentLang === 'es' ? 'spray' : 'Spray'}</option>
      <option value="Mp Rotor's">${currentLang === 'es' ? 'Mp Rotor' : "Mp Rotor's"}</option>
      <option value="Drip">${currentLang === 'es' ? 'drip' : 'Drip'}</option>
    </select>
  `;

  // Run Time
  const cellRunTime = row.insertCell(5);
  cellRunTime.innerHTML = `<input type="number" placeholder="${texts[currentLang].placeholders.runTime}" min="0">`;

  // Foto
  const cellPhoto = row.insertCell(6);
  cellPhoto.innerHTML = `
    <input type="file" accept="image/*" onchange="previewPhoto(this)">
    <img class="photo-preview" style="display: none;">
  `;

  // GPS
  const cellGPS = row.insertCell(7);
  cellGPS.innerHTML = `
    <input type="text" class="gps-coords" placeholder="47.6062, -122.3321">
    <button type="button" onclick="getLocation(this)">📍 GPS</button>
  `;

  // Mapa
  const cellMap = row.insertCell(8);
  cellMap.innerHTML = `<button type="button" onclick="showMap(this)">${currentLang === 'es' ? '🗺️ Ver Mapa' : '🗺️ View Map'}</button>`;

  zonesCount++;
}


// ===== MANEJO DE FORMULARIO =====
document.getElementById('riegoForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  document.getElementById('spinner').style.display = 'block';
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => btn.disabled = true);

  try {
    const project = {
      jobName: document.getElementById('jobName').value,
      dcvLocation: document.getElementById('dcvLocation').value,
      masterValve: document.getElementById('masterValve').value,
      flowSensor: document.getElementById('flowSensor').value,
      zones: []
    };

    const table = document.getElementById('zonesTable');
    for (let i = 1; i < table.rows.length; i++) {
      const row = table.rows[i];
      const photoInput = row.cells[6].querySelector('input[type="file"]');

      let photoBase64 = null;
      if (photoInput.files && photoInput.files[0]) {
        photoBase64 = await getBase64(photoInput.files[0]);
      }

      const gpsRaw = row.cells[7].querySelector('input').value;
      let [latitude, longitude] = [null, null];

      if (gpsRaw.includes(',')) {
        const coords = gpsRaw.split(',').map(c => parseFloat(c.trim()));
        if (!isNaN(coords[0]) && !isNaN(coords[1])) {
          [latitude, longitude] = coords;
        }
      }

      project.zones.push({
        zone: row.cells[0].innerText,
        decode: row.cells[1].querySelector('input').value,
        location: row.cells[2].querySelector('input').value,
        bedLawn: row.cells[3].querySelector('select').value,
        heads: row.cells[4].querySelector('select').value,
        runTime: row.cells[5].querySelector('input').value,
        photo: photoBase64,
        gps: gpsRaw,
        latitude,
        longitude
      });
    }

    saveProject(project);
    await saveProjectToSheet(project);
    await loadProjectsFromSheet();

    this.reset();
    resetZonesTable();
    zonesCount = 1;

    alert(texts[currentLang].alertSaved);
  } catch (err) {
   alert(texts[currentLang].alertError + err.message);
    console.error(err);
  }

  document.getElementById('spinner').style.display = 'none';
  buttons.forEach(btn => btn.disabled = false);
});

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function saveProject(project) {
  let projects = JSON.parse(localStorage.getItem('irrigationProjects')) || [];
  projects.push(project);
  localStorage.setItem('irrigationProjects', JSON.stringify(projects));
  console.log("Proyecto guardado en localStorage:", project);
}

async function saveProjectToSheet(project) {
  const url = "https://script.google.com/macros/s/AKfycbzKBUj_otYaJTww2nivH663lrIRI7ZeTGju28aQBSxGPyp33hHNIPwpZocXINvH-cQu/exec";
  const form = new FormData();
  form.append("data", JSON.stringify(project));

  try {
    const res = await fetch(url, { method: "POST", body: form });
    const text = await res.text();
    console.log("Respuesta de Google Sheets:", text);
    if (!res.ok) throw new Error(text);
  } catch (e) {
    alert("No se pudo guardar en Google Sheets.");
    console.error(e);
  }
}

function loadProjects() {
  const projects = JSON.parse(localStorage.getItem('irrigationProjects')) || [];
  mostrarProyectosFiltrados(projects);
}

function deleteProject(index) {
  
if(confirm(texts[currentLang].deleteConfirm)) {
    let projects = JSON.parse(localStorage.getItem('irrigationProjects')) || [];
    projects.splice(index, 1);
    localStorage.setItem('irrigationProjects', JSON.stringify(projects));
    loadProjects();
  }
}

function resetZonesTable() {
  document.getElementById('zonesTable').innerHTML = `
    <tr>
      <th>Zone</th>
      <th>Decode</th>
      <th>Location</th>
      <th>Bed/Lawn</th>
      <th>Type of Heads</th>
      <th>Run Time (min)</th>
      <th>Foto</th>
      <th>GPS Location</th>
      <th>Mapa</th>
    </tr>
  `;
}

// ===== MAPA =====
function initMap() {
  map = L.map('map').setView([19.4326, -99.1332], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
}

function getLocation(button) {
  const row = button.closest('tr');
  const gpsInput = row.querySelector('.gps-coords');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = `${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`;
        gpsInput.value = coords;
        addMarkerToMap(pos.coords.latitude, pos.coords.longitude, `Zone ${row.cells[0].innerText}`);
      },
      (err) => alert(texts[currentLang].gpsError + error.message)
    );
  } else {
   alert(texts[currentLang].gpsNotSupported);
  }
}

function showMap(button) {
  const row = button.closest('tr');
  const coords = row.querySelector('.gps-coords').value.split(',').map(Number);
  if (coords.length === 2 && !isNaN(coords[0])) {
    addMarkerToMap(coords[0], coords[1], `Zone ${row.cells[0].innerText}`);
    document.getElementById('map').style.display = 'block';
  } else {
   alert(texts[currentLang].invalidCoords);
  }
}

function addMarkerToMap(lat, lng, title) {
  clearMarkers();
  const marker = L.marker([lat, lng]).addTo(map).bindPopup(title);
  markers.push(marker);
  map.setView([lat, lng], 18);
}

function clearMarkers() {
  markers.forEach(marker => map.removeLayer(marker));
  markers = [];
}

// ===== EXPORTAR =====
function exportToExcel() {
  const projects = JSON.parse(localStorage.getItem('irrigationProjects')) || [];
  if (projects.length === 0) return alert("No hay proyectos para exportar.");

  const wb = XLSX.utils.book_new();
  projects.forEach((p, i) => {
    const wsData = [
      ["Job Name", p.jobName],
      ["DCV Location", p.dcvLocation],
      ["Master Valve", p.masterValve],
      ["Flow Sensor", p.flowSensor],
      [],
      ["Zone", "Location", "Heads", "Run Time", "GPS"],
      ...p.zones.map(z => [z.zone, z.location, z.heads, z.runTime, z.gps || "N/A"])
    ];
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, `Proyecto ${i + 1}`);
  });

  XLSX.writeFile(wb, "Proyectos_Riego.xlsx");
}

function exportToPDF() {
  if (!window.jspdf || !window.jspdf.jsPDF) return alert("jsPDF no está cargado.");
  const { jsPDF } = window.jspdf;

  const projects = JSON.parse(localStorage.getItem('irrigationProjects')) || [];
  if (projects.length === 0) return alert("No hay proyectos para exportar.");

  const doc = new jsPDF();
  projects.forEach((p, i) => {
    if (i > 0) doc.addPage();

    doc.setFontSize(18);
    doc.text(`Proyecto: ${p.jobName || 'Sin nombre'}`, 10, 10);
    doc.setFontSize(12);
    doc.text(`Ubicación DCV: ${p.dcvLocation || 'N/A'}`, 10, 20);
    doc.text(`Master Valve: ${p.masterValve || 'N/A'}`, 10, 30);

    doc.autoTable({
      startY: 40,
      head: [["Zone", "Location", "Heads", "Run Time", "GPS"]],
      body: p.zones.map(z => [z.zone, z.location, z.heads, `${z.runTime} min`, z.gps || "N/A"]),
      theme: 'grid'
    });
  });

  doc.save("Proyectos_Riego.pdf");
}

// ===== SHEET SYNC =====
async function loadProjectsFromSheet() {
  const url = "https://script.google.com/macros/s/AKfycbzKBUj_otYaJTww2nivH663lrIRI7ZeTGju28aQBSxGPyp33hHNIPwpZocXINvH-cQu/exec";
  try {
    const res = await fetch(url);
    proyectosDesdeSheets = await res.json();
    mostrarProyectosFiltrados(proyectosDesdeSheets);
  } catch (err) {
    console.error("Error al cargar proyectos:", err);
  }
}

// ===== FILTRADO Y RENDER =====
function mostrarProyectosFiltrados(projects) {
  const container = document.getElementById('savedProjects');
  container.innerHTML = '<h2>📋 Proyectos Guardados</h2>';

  if (projects.length === 0) {
    container.innerHTML += '<p>No se encontraron proyectos.</p>';
    return;
  }

  projects.forEach((project, index) => {
    container.innerHTML += `
      <div class="project-card">
        <h3>${project.jobName} - ${project.dcvLocation}</h3>
        <p><strong>Master Valve:</strong> ${project.masterValve}</p>
        <p><strong>Flow Sensor:</strong> ${project.flowSensor}</p>
        <h4>Zonas (${project.zones.length}):</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 10px;">
          ${project.zones.map(zone => `
            <div class="zone-card">
              <h5>${zone.zone}</h5>
              <p><strong>Ubicación:</strong> ${zone.location}</p>
              <p><strong>Tipo:</strong> ${zone.heads}</p>
              <p><strong>Tiempo:</strong> ${zone.runTime} min</p>
              ${zone.photo ? `<img src="${zone.photo}" style="max-width: 100%; max-height: 100px;">` : ''}
              ${zone.gps ? `<p><small>📍 ${zone.gps}</small></p>` : ''}
            </div>
          `).join('')}
        </div>
        <button onclick="deleteProject(${index})" class="delete-btn">Eliminar</button>
      </div>
    `;
  });
}

function filtrarProyectos() {
  const texto = document.getElementById('searchInput').value.toLowerCase();
  const filtrados = proyectosDesdeSheets.filter(project =>
    project.jobName.toLowerCase().includes(texto) ||
    project.dcvLocation.toLowerCase().includes(texto) ||
    project.zones.some(zone =>
      (zone.zone && zone.zone.toLowerCase().includes(texto)) ||
      (zone.location && zone.location.toLowerCase().includes(texto))
    )
  );
  mostrarProyectosFiltrados(filtrados);
}

// ===== PREVISUALIZAR FOTO =====
function previewPhoto(input) {
  const preview = input.nextElementSibling;
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = e => {
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(input.files[0]);
  }
}
