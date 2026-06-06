function toggleAnswer(button) {
  const answer = button.nextElementSibling;
  if (answer.classList.contains("visible")) {
    answer.classList.remove("visible");
    button.textContent = "Ver respuesta";
  } else {
    answer.classList.add("visible");
    button.textContent = "Ocultar respuesta";
  }
}
