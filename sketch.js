let idadeUsuario;
let gostaFantasia, gostaAventura, gostaDrama;
let filmesRecomendados = [];
let filmes = [
  { nome: "minha culpa", idade: 0, categorias: ["romance", "aventura"] },
  { nome: "como treinar o seu dragão", idade: 0, categorias: ["fantasia", "aventura"] },
  { nome: "a 5 passos de voce", idade: 10, categorias: ["drama", "fantasia", "aventura"] },
  { nome: "Guardiões da Galáxia", idade: 12, categorias: ["fantasia", "aventura"] },
  { nome: "aladim", idade: 12, categorias: ["drama"] },
  { nome: "O menino que descobriu o vento", idade: 14, categorias: ["drama"] }
];

function setup() {
  createCanvas(600, 400);
  background(240);
  textSize(16);
  fill(50);
  text("Recomendador de Filmes", 20, 30);

  // Coletar idade
  idadeUsuario = parseInt(prompt("Qual sua idade?"));

  // Coletar preferências
  gostaFantasia = prompt("Você gosta de filmes de fantasia? (sim/não)").toLowerCase() === "sim";
  gostaAventura = prompt("Você gosta de filmes de aventura? (sim/não)").toLowerCase() === "sim";
  gostaDrama = prompt("Você gosta de filmes de drama? (sim/não)").toLowerCase() === "sim";

  for (let filme of filmes) {
    if (idadeUsuario >= filme.idade) {
      if (
        (gostaFantasia && filme.categorias.includes("fantasia")) ||
        (gostaAventura && filme.categorias.includes("aventura")) ||
        (gostaDrama && filme.categorias.includes("drama"))
      ) {
        filmesRecomendados.push(filme.nome);
      }
    }
  }

  if (filmesRecomendados.length > 0) {
    text("Filmes recomendados para você:", 20, 70);
    for (let i = 0; i < filmesRecomendados.length; i++) {
      text("- " + filmesRecomendados[i], 40, 100 + i * 25);
    }
  } else {
    text("Nenhum filme disponível para sua idade e preferências.", 20, 70);
  }
}

function draw() {
  // A função draw é chamada continuamente, mas como não há nada para atualizar,
  // podemos deixá-la vazia para este programa.
}
