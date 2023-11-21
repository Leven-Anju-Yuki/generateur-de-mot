const mots = [
  "Chien",
  "Chat",
  "Cheval",
  "Oiseau",
  "Poisson",
  "Lapin",
  "Tigre",
  "Lion",
  "Éléphant",
  "Girafe",
  "Zèbre",
  "Singe",
  "Koala",
  "Panda",
  "Dauphin",
  "Baleine",
  "Requin",
  "Serpent",
  "Crocodile",
  "Tortue",
];

function genererMotAleatoire() {
  const index = Math.floor(Math.random() * mots.length);
  return mots[index];
}

document.getElementById("generateButton").addEventListener("click", function () {
  const motAleatoire = genererMotAleatoire();
  document.getElementById("randomWord").textContent = motAleatoire;
});
