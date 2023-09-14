const estrazioneButton = document.getElementById("estrazione");
const numeriEstratti = new Set();
const tabellaNumeri = document.getElementById("tabella-numeri");

estrazioneButton.addEventListener("click", () => {
  // Genera un numero casuale da 1 a 75
  let numeroEstratto;
  do {
    numeroEstratto = Math.floor(Math.random() * 75) + 1;
  } while (numeriEstratti.has(numeroEstratto));

  // Aggiungi il numero estratto al set
  numeriEstratti.add(numeroEstratto);

  // Evidenzia la cella corrispondente al numero estratto
  const cella = document.getElementById(`cella-${numeroEstratto}`);
  cella.classList.add("highlight");
});

// Genera dinamicamente le celle del tabellone con numeri da 1 a 75, suddivisi in righe da 10
for (let riga = 0; riga < 8; riga++) {
  const tr = document.createElement("tr");
  for (let colonna = 1; colonna <= 10; colonna++) {
    const numero = riga * 10 + colonna;
    const cella = document.createElement("td");
    cella.id = `cella-${numero}`;
    cella.textContent = numero;
    tr.appendChild(cella);
  }
  tabellaNumeri.appendChild(tr);
}
