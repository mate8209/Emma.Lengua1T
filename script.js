const wordQuestions = [
  { word: "Corrientes", type: "propio", explanation: "Es propio porque nombra un lugar particular y lleva mayúscula." },
  { word: "alegría", type: "abstracto", explanation: "Es abstracto porque nombra un sentimiento." },
  { word: "rebaño", type: "colectivo", explanation: "Es colectivo porque nombra un conjunto." },
  { word: "escuela", type: "comun", explanation: "Es común porque nombra algo en general." },
  { word: "Sofía", type: "propio", explanation: "Es propio porque nombra a una persona en particular." },
  { word: "amor", type: "abstracto", explanation: "Es abstracto porque nombra una idea o sentimiento." }
];

const textTypeQuestions = [
  { prompt: "Un relato explica cómo nació la flor del ceibo y mezcla realidad con imaginación.", type: "leyenda", explanation: "Es leyenda porque explica el origen de algo y mezcla realidad e imaginación." },
  { prompt: "Un cuento breve con una tortuga que deja una enseñanza final.", type: "fabula", explanation: "Es fábula porque deja una moraleja." },
  { prompt: "Un texto informa que el viernes habrá feria de lectura en la escuela.", type: "noticia", explanation: "Es noticia porque informa un hecho real y actual." },
  { prompt: "Un relato con animales que hablan y enseñan una lección.", type: "fabula", explanation: "Es fábula porque tiene animales personificados y moraleja." }
];

const flashcards = [
  { q: "¿Qué es el emisor?", a: "Es quien envía el mensaje." },
  { q: "¿Qué oración hace una pregunta?", a: "La interrogativa." },
  { q: "Decí un sustantivo propio.", a: "Por ejemplo: Corrientes, Sofía o Argentina." },
  { q: "¿Qué es una leyenda?", a: "Es un relato que mezcla realidad e imaginación y puede explicar el origen de algo." },
  { q: "¿Qué enseñanza deja una fábula?", a: "La moraleja." },
  { q: "¿Qué preguntas responde una noticia?", a: "Qué pasó, cuándo, dónde y quiénes participaron." },
  { q: "¿Qué es un adjetivo calificativo?", a: "Una palabra que dice cómo es un sustantivo." }
];

let currentWord = 0;
let currentTextType = 0;
let currentFlash = null;

function flipCard(card) {
  card.classList.toggle('flipped');
}

function toggleBox(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('hidden');
}

function checkSingleAnswer(id, text, correct) {
  const box = document.getElementById(id);
  box.textContent = text;
  box.style.borderLeftColor = correct ? '#4f8cff' : '#ff6e9c';
}

function loadWordGame() {
  const box = document.getElementById('wordGame');
  if (box) box.textContent = wordQuestions[currentWord].word;
}

function answerWordGame(type) {
  const feedback = document.getElementById('wordFeedback');
  const q = wordQuestions[currentWord];
  if (type === q.type) {
    feedback.textContent = '✅ ¡Muy bien! ' + q.explanation;
    currentWord = (currentWord + 1) % wordQuestions.length;
    setTimeout(() => {
      loadWordGame();
      feedback.textContent = 'Nueva palabra lista. ¡Seguimos!';
    }, 1200);
  } else {
    feedback.textContent = '💡 Pensalo otra vez. ' + q.explanation;
  }
}

function loadTextTypeGame() {
  const box = document.getElementById('textTypePrompt');
  if (box) box.textContent = textTypeQuestions[currentTextType].prompt;
}

function answerTextType(type) {
  const feedback = document.getElementById('textTypeFeedback');
  const q = textTypeQuestions[currentTextType];
  if (type === q.type) {
    feedback.textContent = '✅ ¡Excelente! ' + q.explanation;
    currentTextType = (currentTextType + 1) % textTypeQuestions.length;
    setTimeout(() => {
      loadTextTypeGame();
      feedback.textContent = 'Nuevo desafío listo.';
    }, 1300);
  } else {
    feedback.textContent = '💡 Probá otra vez. ' + q.explanation;
  }
}

function newFlashcard() {
  currentFlash = flashcards[Math.floor(Math.random() * flashcards.length)];
  document.getElementById('flashQuestion').textContent = currentFlash.q;
  const answer = document.getElementById('flashAnswer');
  answer.textContent = currentFlash.a;
  answer.classList.add('hidden');
}

function revealFlashcard() {
  const answer = document.getElementById('flashAnswer');
  if (currentFlash && answer) answer.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  loadWordGame();
  loadTextTypeGame();
});
