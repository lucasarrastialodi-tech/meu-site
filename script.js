// Lista de imagens reais (coloque o nome dos arquivos da pasta 'images')
const fotos = [
  "images/pet1.jpg",
  "images/pet2.jpg",
  "images/pet3.jpg",
  "images/pet4.jpg"
];

const galeria = document.getElementById("galeria-dinamica");

// Cria dinamicamente os elementos de imagem
fotos.forEach((foto) => {
  const img = document.createElement("img");
  img.src = foto;
  img.alt = "Pet feliz";
  galeria.appendChild(img);
});
