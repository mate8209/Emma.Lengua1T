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
  loadNounEasy();
  loadNounHard();
  loadAdjType();
  loadAdjAgree();
  loadSpeakerEasy();
  loadSpeakerHard();
});


const nounEasyQuestions = [
  { prompt: "¿Qué tipo de sustantivo es ‘Argentina’?", type: "propio", explanation: "Es propio porque nombra un país en particular." },
  { prompt: "¿Qué tipo de sustantivo es ‘escuela’?", type: "comun", explanation: "Es común porque nombra algo en general." },
  { prompt: "¿Qué tipo de sustantivo es ‘María’?", type: "propio", explanation: "Es propio porque nombra a una persona en particular." },
  { prompt: "¿Qué tipo de sustantivo es ‘perro’?", type: "comun", explanation: "Es común porque nombra un animal de manera general." }
];

const nounHardQuestions = [
  { prompt: "¿Qué tipo de sustantivo es ‘tristeza’?", type: "abstracto", explanation: "Es abstracto porque nombra un sentimiento." },
  { prompt: "¿Qué tipo de sustantivo es ‘arboleda’?", type: "colectivo", explanation: "Es colectivo porque nombra un conjunto de árboles." },
  { prompt: "¿Qué tipo de sustantivo es ‘manzana’?", type: "concreto", explanation: "Es concreto porque se puede ver y tocar." },
  { prompt: "¿Qué tipo de sustantivo es ‘pez’?", type: "individual", explanation: "Es individual porque nombra un solo ser." },
  { prompt: "¿Qué tipo de sustantivo es ‘bandada’?", type: "colectivo", explanation: "Es colectivo porque nombra un grupo de aves." },
  { prompt: "¿Qué tipo de sustantivo es ‘amistad’?", type: "abstracto", explanation: "Es abstracto porque nombra una idea o sentimiento." }
];

const nounFlashcards = [
  { q: "Decí un sustantivo propio y uno común.", a: "Ejemplo: ‘Sofía’ es propio y ‘niña’ es común." },
  { q: "¿Cuál es el sustantivo colectivo de ‘abejas’?", a: "Enjambre." },
  { q: "¿Cuál es el sustantivo individual de ‘rebaño’?", a: "Oveja." },
  { q: "En la oración ‘La alegría llenó el aula’, ¿qué sustantivo es abstracto?", a: "‘Alegría’, porque nombra un sentimiento." }
];

const adjTypeQuestions = [
  { prompt: "En ‘niña correntina’, ¿qué tipo de adjetivo es ‘correntina’?", type: "gentilicio", explanation: "Es gentilicio porque indica origen o procedencia." },
  { prompt: "En ‘flor hermosa’, ¿qué tipo de adjetivo es ‘hermosa’?", type: "calificativo", explanation: "Es calificativo porque dice cómo es la flor." },
  { prompt: "En ‘equipo argentino’, ¿qué tipo de adjetivo es ‘argentino’?", type: "gentilicio", explanation: "Es gentilicio porque indica de dónde es." },
  { prompt: "En ‘mochila pesada’, ¿qué tipo de adjetivo es ‘pesada’?", type: "calificativo", explanation: "Es calificativo porque describe al sustantivo." }
];

const adjAgreementQuestions = [
  { prompt: "Elegí la opción correcta.", options: ["las mariposa coloridas", "las mariposas coloridas", "la mariposas colorida"], correct: 1, explanation: "‘Mariposas’ está en plural y femenino, por eso va ‘coloridas’." },
  { prompt: "Elegí la opción correcta.", options: ["el perro juguetón", "la perro juguetona", "los perro juguetones"], correct: 0, explanation: "‘Perro’ está en singular y masculino, por eso va ‘juguetón’." },
  { prompt: "Elegí la opción correcta.", options: ["las niñas estudiosa", "los niñas estudiosos", "las niñas estudiosas"], correct: 2, explanation: "‘Niñas’ está en femenino plural, por eso va ‘estudiosas’." }
];

const adjFlashcards = [
  { q: "En ‘La casa blanca está en la esquina’, ¿cuál es el adjetivo?", a: "‘Blanca’, porque dice cómo es la casa." },
  { q: "En ‘El jugador brasileño saludó al público’, ¿cuál es el adjetivo?", a: "‘Brasileño’, y es un gentilicio." },
  { q: "En ‘Las flores perfumadas alegran el jardín’, ¿cuál es el adjetivo?", a: "‘Perfumadas’, porque describe a las flores." }
];

const speakerEasyQuestions = [
  { prompt: "¿Qué tipo de oración es ‘¡Qué hermoso dibujo!’?", type: "exclamativa", explanation: "Es exclamativa porque expresa emoción." },
  { prompt: "¿Qué tipo de oración es ‘Cerrá la puerta, por favor’?", type: "imperativa", explanation: "Es imperativa porque da una orden o pedido." },
  { prompt: "¿Qué tipo de oración es ‘Hoy tenemos música’?", type: "enunciativa", explanation: "Es enunciativa porque informa algo." },
  { prompt: "¿Qué tipo de oración es ‘¿Quién vino hoy?’?", type: "interrogativa", explanation: "Es interrogativa porque hace una pregunta." }
];

const speakerHardQuestions = [
  { prompt: "¿Qué tipo de oración es ‘Tal vez mañana lleguemos temprano’?", type: "dubitativa", explanation: "Es dubitativa porque expresa duda." },
  { prompt: "¿Qué tipo de oración es ‘Ojalá salga el sol’?", type: "desiderativa", explanation: "Es desiderativa porque expresa un deseo." },
  { prompt: "¿Qué tipo de oración es ‘Quizás lleve paraguas’?", type: "dubitativa", explanation: "Es dubitativa porque muestra duda." },
  { prompt: "¿Qué tipo de oración es ‘Deseo que tengas un lindo día’?", type: "desiderativa", explanation: "Es desiderativa porque expresa un deseo." }
];

const speakerFlashcards = [
  { q: "‘¿Me prestás un lápiz?’ ¿Qué quiere hacer quien habla?", a: "Quiere preguntar o pedir algo. Es una oración interrogativa." },
  { q: "‘¡Ganamos el partido!’ ¿Qué quiere hacer quien habla?", a: "Quiere expresar emoción o alegría. Es una oración exclamativa." },
  { q: "‘Por favor, sentate.’ ¿Qué quiere hacer quien habla?", a: "Quiere dar una orden o pedido. Es una oración imperativa." },
  { q: "‘Ojalá apruebe Lengua.’ ¿Qué quiere hacer quien habla?", a: "Quiere expresar un deseo. Es una oración desiderativa." }
];

let nounEasyIndex = 0;
let nounHardIndex = 0;
let adjTypeIndex = 0;
let adjAgreeIndex = 0;
let speakerEasyIndex = 0;
let speakerHardIndex = 0;
let currentNounCard = null;
let currentAdjCard = null;
let currentSpeakerCard = null;

function loadNounEasy() {
  const el = document.getElementById('nounEasyPrompt');
  if (el) el.textContent = nounEasyQuestions[nounEasyIndex].prompt;
}
function answerNounEasy(type) {
  const fb = document.getElementById('nounEasyFeedback');
  const q = nounEasyQuestions[nounEasyIndex];
  if (type === q.type) {
    fb.textContent = '✅ ¡Muy bien! ' + q.explanation;
    nounEasyIndex = (nounEasyIndex + 1) % nounEasyQuestions.length;
    setTimeout(() => { loadNounEasy(); fb.textContent = 'Nueva consigna lista.'; }, 1200);
  } else {
    fb.textContent = '💡 Pensalo otra vez. ' + q.explanation;
  }
}

function loadNounHard() {
  const el = document.getElementById('nounHardPrompt');
  if (el) el.textContent = nounHardQuestions[nounHardIndex].prompt;
}
function answerNounHard(type) {
  const fb = document.getElementById('nounHardFeedback');
  const q = nounHardQuestions[nounHardIndex];
  if (type === q.type) {
    fb.textContent = '✅ ¡Excelente! ' + q.explanation;
    nounHardIndex = (nounHardIndex + 1) % nounHardQuestions.length;
    setTimeout(() => { loadNounHard(); fb.textContent = 'Nueva consigna lista.'; }, 1200);
  } else {
    fb.textContent = '💡 Volvé a mirar la palabra. ' + q.explanation;
  }
}

function newNounCard() {
  currentNounCard = nounFlashcards[Math.floor(Math.random() * nounFlashcards.length)];
  document.getElementById('nounCardQuestion').textContent = currentNounCard.q;
  const ans = document.getElementById('nounCardAnswer');
  ans.textContent = currentNounCard.a;
  ans.classList.add('hidden');
}
function revealNounCard() {
  if (!currentNounCard) return;
  document.getElementById('nounCardAnswer').classList.remove('hidden');
}

function loadAdjType() {
  const el = document.getElementById('adjTypePrompt');
  if (el) el.textContent = adjTypeQuestions[adjTypeIndex].prompt;
}
function answerAdjType(type) {
  const fb = document.getElementById('adjTypeFeedback');
  const q = adjTypeQuestions[adjTypeIndex];
  if (type === q.type) {
    fb.textContent = '✅ ¡Muy bien! ' + q.explanation;
    adjTypeIndex = (adjTypeIndex + 1) % adjTypeQuestions.length;
    setTimeout(() => { loadAdjType(); fb.textContent = 'Nueva consigna lista.'; }, 1200);
  } else {
    fb.textContent = '💡 Revisá otra vez. ' + q.explanation;
  }
}

function loadAdjAgree() {
  const q = adjAgreementQuestions[adjAgreeIndex];
  const prompt = document.getElementById('adjAgreePrompt');
  if (prompt) prompt.textContent = q.prompt;
  q.options.forEach((opt, i) => {
    const btn = document.getElementById('adjAgreeOpt' + (i + 1));
    if (btn) btn.textContent = opt;
  });
}
function answerAdjAgree(selected) {
  const fb = document.getElementById('adjAgreeFeedback');
  const q = adjAgreementQuestions[adjAgreeIndex];
  if (selected === q.correct) {
    fb.textContent = '✅ ¡Correcto! ' + q.explanation;
    adjAgreeIndex = (adjAgreeIndex + 1) % adjAgreementQuestions.length;
    setTimeout(() => { loadAdjAgree(); fb.textContent = 'Nueva consigna lista.'; }, 1200);
  } else {
    fb.textContent = '💡 Fijate si el sustantivo y el adjetivo combinan bien. ' + q.explanation;
  }
}

function newAdjCard() {
  currentAdjCard = adjFlashcards[Math.floor(Math.random() * adjFlashcards.length)];
  document.getElementById('adjCardQuestion').textContent = currentAdjCard.q;
  const ans = document.getElementById('adjCardAnswer');
  ans.textContent = currentAdjCard.a;
  ans.classList.add('hidden');
}
function revealAdjCard() {
  if (!currentAdjCard) return;
  document.getElementById('adjCardAnswer').classList.remove('hidden');
}

function loadSpeakerEasy() {
  const el = document.getElementById('speakerEasyPrompt');
  if (el) el.textContent = speakerEasyQuestions[speakerEasyIndex].prompt;
}
function answerSpeakerEasy(type) {
  const fb = document.getElementById('speakerEasyFeedback');
  const q = speakerEasyQuestions[speakerEasyIndex];
  if (type === q.type) {
    fb.textContent = '✅ ¡Muy bien! ' + q.explanation;
    speakerEasyIndex = (speakerEasyIndex + 1) % speakerEasyQuestions.length;
    setTimeout(() => { loadSpeakerEasy(); fb.textContent = 'Nueva consigna lista.'; }, 1200);
  } else {
    fb.textContent = '💡 Mirá qué quiere hacer quien habla. ' + q.explanation;
  }
}

function loadSpeakerHard() {
  const el = document.getElementById('speakerHardPrompt');
  if (el) el.textContent = speakerHardQuestions[speakerHardIndex].prompt;
}
function answerSpeakerHard(type) {
  const fb = document.getElementById('speakerHardFeedback');
  const q = speakerHardQuestions[speakerHardIndex];
  if (type === q.type) {
    fb.textContent = '✅ ¡Excelente! ' + q.explanation;
    speakerHardIndex = (speakerHardIndex + 1) % speakerHardQuestions.length;
    setTimeout(() => { loadSpeakerHard(); fb.textContent = 'Nueva consigna lista.'; }, 1200);
  } else {
    fb.textContent = '💡 Leé despacito la oración y pensá su intención. ' + q.explanation;
  }
}

function newSpeakerCard() {
  currentSpeakerCard = speakerFlashcards[Math.floor(Math.random() * speakerFlashcards.length)];
  document.getElementById('speakerCardQuestion').textContent = currentSpeakerCard.q;
  const ans = document.getElementById('speakerCardAnswer');
  ans.textContent = currentSpeakerCard.a;
  ans.classList.add('hidden');
}
function revealSpeakerCard() {
  if (!currentSpeakerCard) return;
  document.getElementById('speakerCardAnswer').classList.remove('hidden');
}

