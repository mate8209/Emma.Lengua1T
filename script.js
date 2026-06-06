const wordQuestions = [
  { word: "Corrientes", type: "propio", explanation: "Es propio porque nombra un lugar particular y va con mayúscula." },
  { word: "alegría", type: "abstracto", explanation: "Es abstracto porque nombra un sentimiento." },
  { word: "rebaño", type: "colectivo", explanation: "Es colectivo porque nombra un conjunto de ovejas." },
  { word: "escuela", type: "comun", explanation: "Es común porque nombra algo de manera general." },
  { word: "Martina", type: "propio", explanation: "Es propio porque nombra a una persona en particular." },
  { word: "amor", type: "abstracto", explanation: "Es abstracto porque nombra un sentimiento o idea." }
];

const textTypeQuestions = [
  { prompt: "Un texto explica cómo nació la flor del ceibo y mezcla realidad con imaginación.", type: "leyenda", explanation: "Es leyenda porque explica el origen de algo y tiene elementos imaginarios." },
  { prompt: "Un cuento breve donde una tortuga enseña que la constancia es importante.", type: "fabula", explanation: "Es fábula porque deja una enseñanza o moraleja." },
  { prompt: "Un texto informa que mañana habrá una feria de lectura en la escuela.", type: "noticia", explanation: "Es noticia porque informa un hecho real, actual y de interés." },
  { prompt: "Un relato con animales que hablan y una enseñanza final.", type: "fabula", explanation: "Es fábula porque tiene animales personificados y moraleja." }
];

const flashcards = [
  { q: "¿Qué es el emisor?", a: "Es quien envía el mensaje." },
  { q: "¿Qué es el receptor?", a: "Es quien recibe el mensaje." },
  { q: "¿Qué oración pregunta algo?", a: "La oración interrogativa." },
  { q: "¿Qué tipo de sustantivo es 'libertad'?", a: "Abstracto, porque nombra una idea." },
  { q: "¿Qué es un adjetivo calificativo?", a: "Una palabra que dice cómo es un sustantivo." },
  { q: "¿Qué es una moraleja?", a: "La enseñanza que deja una fábula." },
  { q: "¿Qué preguntas responde una noticia?", a: "Qué pasó, cuándo, dónde y quiénes participaron." },
  { q: "¿Qué es una leyenda?", a: "Un relato que mezcla realidad e imaginación y puede explicar el origen de algo." }
];

let currentWord = 0;
let currentTextType = 0;
let currentFlash = null;

function flipCard(card) {
  card.classList.toggle("flipped");
}

function showSimpleAnswer(id) {
  const item = document.getElementById(id);
  item.classList.toggle("hidden");
}

function checkChoice(button, selected) {
  const card = button.closest(".choice-card");
  const correct = card.dataset.correct;
  const feedback = card.querySelector(".feedback");

  if (selected === correct) {
    feedback.textContent = "¡Muy bien! Es interrogativa porque hace una pregunta.";
    feedback.style.borderLeftColor = "#4f8cff";
  } else {
    feedback.textContent = "Probá de nuevo. Mirá los signos ¿ ? y pensá qué intención tiene.";
    feedback.style.borderLeftColor = "#ff6b9a";
  }
}

function loadWordGame() {
  const box = document.getElementById("wordGame");
  if (!box) return;
  box.textContent = wordQuestions[currentWord].word;
}

function answerWordGame(type) {
  const feedback = document.getElementById("wordFeedback");
  const q = wordQuestions[currentWord];
  if (type === q.type) {
    feedback.textContent = "✅ ¡Correcto! " + q.explanation;
    currentWord = (currentWord + 1) % wordQuestions.length;
    setTimeout(() => {
      loadWordGame();
      feedback.textContent = "Nueva palabra lista. ¡Vamos!";
    }, 1200);
  } else {
    feedback.textContent = "💡 Revisá otra vez. Pista: " + q.explanation;
  }
}

function loadTextTypeGame() {
  const prompt = document.getElementById("textTypePrompt");
  if (!prompt) return;
  prompt.textContent = textTypeQuestions[currentTextType].prompt;
}

function answerTextType(type) {
  const feedback = document.getElementById("textTypeFeedback");
  const q = textTypeQuestions[currentTextType];
  if (type === q.type) {
    feedback.textContent = "✅ ¡Excelente! " + q.explanation;
    currentTextType = (currentTextType + 1) % textTypeQuestions.length;
    setTimeout(() => {
      loadTextTypeGame();
      feedback.textContent = "Nuevo desafío preparado.";
    }, 1300);
  } else {
    feedback.textContent = "💡 Pensalo otra vez. " + q.explanation;
  }
}

function newFlashcard() {
  currentFlash = flashcards[Math.floor(Math.random() * flashcards.length)];
  document.getElementById("flashQuestion").textContent = currentFlash.q;
  const answer = document.getElementById("flashAnswer");
  answer.textContent = currentFlash.a;
  answer.classList.add("hidden");
}

function revealFlashcard() {
  if (!currentFlash) return;
  document.getElementById("flashAnswer").classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  loadWordGame();
  loadTextTypeGame();
});
