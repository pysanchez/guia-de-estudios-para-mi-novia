const examAnswers = [
  { correct: 1, explanation: "La guía distingue la conducta antisocial, definida por el perjuicio o la vulneración de normas de convivencia, del delito, que está tipificado por la ley penal.", source: "Soria Verde y Sáiz Roca (2006), Psicología criminal, cap. 2, pp. 25–57; guía, fase 1, tema 1" },
  { correct: 1, explanation: "En el ejemplo, conseguir lo exigido ocurre después de la amenaza y es su consecuencia; podría favorecer que la conducta se repita.", source: "Soria Verde y Sáiz Roca (2006), cap. 2, pp. 25–57; guía, fase 1, tema 3" },
  { correct: 0, explanation: "La evaluación clínica orienta atención y tratamiento. La forense responde una pregunta delimitada relevante para la justicia; no decide culpabilidad.", source: "Echeburúa, Muñoz y Loinaz (2011); Soria Verde y Sáiz Roca (2006), cap. 3, pp. 59–119" },
  { correct: 2, explanation: "Una experiencia aislada no basta para diagnosticar. Se revisan historia, contexto, duración, impacto y explicaciones alternativas.", source: "APA (2022), DSM-5-TR; OMS (2024), CIE-11; NIMH (2023a); guía, fase 2, tema 1" },
  { correct: 0, explanation: "El refuerzo vicario se relaciona con observar las consecuencias que recibe un modelo; el directo recae sobre la propia conducta.", source: "Bandura (1977), Social learning theory; manual SAP–UGT, módulo I" },
  { correct: 0, explanation: "El sesgo de atribución hostil consiste en interpretar intención hostil ante información ambigua. Minimizar el daño es una justificación diferente.", source: "Crick y Dodge (1994); Soria Verde y Sáiz Roca (2006), cap. 2, pp. 43–51" },
  { correct: 1, explanation: "La guía presenta las trayectorias como propuestas teóricas, señala que no agotan la diversidad y advierte que el inicio temprano no determina persistencia.", source: "Moffitt (1993); Soria Verde y Sáiz Roca (2006), cap. 2, pp. 43–51; guía, fase 3, tema 3" },
  { correct: 0, explanation: "El informe debe separar datos, inferencias y conclusiones, contrastar alternativas y declarar sus límites.", source: "Vázquez (coord., 2022), Manual de prueba pericial; Echeburúa, Muñoz y Loinaz (2011)" },
  { correct: 1, explanation: "Es una categoría diagnóstica que exige evaluación clínica e historia; la comisión de un delito no basta para establecerla.", source: "APA (2022), DSM-5-TR; Skeem et al. (2011); guía, fase 2, tema 2" },
  { correct: 0, explanation: "La agresión reactiva responde a una amenaza o provocación percibida; la proactiva se utiliza para lograr un objetivo.", source: "Crick y Dodge (1994); Soria Verde y Sáiz Roca (2006), cap. 2, pp. 43–51" },
  { correct: 0, explanation: "El motivo es una hipótesis sobre para qué se actúa y debe contrastarse con datos; no equivale a una prueba de culpabilidad.", source: "Soria Verde y Sáiz Roca (2006), Psicología criminal, cap. 2, pp. 25–57; guía, fase 1, tema 3" },
  { correct: 0, explanation: "Ante síntomas psicóticos se consideran sustancias, medicamentos, condiciones médicas y otros trastornos.", source: "APA (2022), DSM-5-TR; OMS (2024), CIE-11; NIMH (2023a)" },
  { correct: 0, explanation: "La guía define alucinación como una experiencia perceptiva sin un estímulo externo correspondiente.", source: "NIMH (2023a), Cómo comprender qué es la psicosis; APA (2022), DSM-5-TR" },
  { correct: 1, explanation: "La observación puede permitir adquirir una conducta, pero aprenderla no implica ejecutarla; intervienen otras condiciones.", source: "Bandura (1977), Social learning theory; manual SAP–UGT, módulo I" },
  { correct: 0, explanation: "Un factor de protección puede reducir la probabilidad de un resultado o favorecer adaptación, pero no garantiza un resultado.", source: "Moffitt (1993); manual SAP–UGT, módulo I; guía, fase 3, tema 3" },
  { correct: 0, explanation: "La agresión proactiva se utiliza para lograr un objetivo; la reactiva responde a una amenaza o provocación percibida.", source: "Crick y Dodge (1994); Soria Verde y Sáiz Roca (2006), cap. 2, pp. 43–51" },
  { correct: 0, explanation: "Desistimiento se refiere a la reducción o abandono de la conducta antisocial a lo largo del tiempo.", source: "Moffitt (1993); Soria Verde y Sáiz Roca (2006), cap. 2, pp. 43–51" },
  { correct: 0, explanation: "Se exploran duración, impacto, funcionamiento previo y otras causas; no toda experiencia traumática produce estrés postraumático.", source: "NIMH (2023b), Trastorno por estrés postraumático; APA (2022), DSM-5-TR; OMS (2024), CIE-11" },
  { correct: 0, explanation: "La criminología integra el estudio del delito, la victimización y el control social; la psicología aporta conocimiento sobre procesos psicológicos.", source: "Soria Verde y Sáiz Roca (2006), Psicología criminal, cap. 2, pp. 25–57; García-López (coord., 2010)" },
  { correct: 0, explanation: "La guía recomienda definir, aplicar a los datos, explicar el razonamiento y señalar qué información falta.", source: "Vázquez (coord., 2022), Manual de prueba pericial; guía, verificación final de estudio" }
];

const writingChecks = {
  motive: {
    source: "Soria Verde y Sáiz Roca (2006), cap. 2, pp. 25–57; guía, fase 1, tema 3",
    model: "El motivo es una hipótesis sobre para qué se actúa, por ejemplo obtener un beneficio o control. El antecedente ocurre antes de la conducta y la consecuencia después; si una amenaza permite obtener lo exigido, esa consecuencia podría favorecer que se repita. Para contrastar motivos se necesitan datos del caso y considerar hipótesis alternativas.",
    concepts: [
      { label: "Motivo como hipótesis o finalidad", terms: ["motivo", "hipotesis", "finalidad", "para que se actua", "beneficio", "control", "represalia", "aceptacion grupal"] },
      { label: "Antecedente previo a la conducta", terms: ["antecedente", "antes de la conducta", "situacion previa", "recibe una negativa", "provocacion"] },
      { label: "Conducta identificable", terms: ["conducta", "amenaza", "accion", "comportamiento"] },
      { label: "Consecuencia posterior", terms: ["consecuencia", "despues de la conducta", "obtiene lo exigido", "favorece su repeticion", "refuerzo"] },
      { label: "Contrastar la hipótesis con datos", terms: ["contrastar", "datos", "evidencia", "fuentes", "hipotesis alternativas", "informacion del caso"] }
    ]
  },
  forensic: {
    source: "Soria Verde y Sáiz Roca (2006), cap. 3, pp. 59–119; Echeburúa, Muñoz y Loinaz (2011); Vázquez (coord., 2022)",
    model: "La evaluación forense parte de una pregunta delimitada. Integra entrevistas, documentos, observación e instrumentos pertinentes; revisa funcionamiento, temporalidad y alternativas. Los síntomas pueden orientar una hipótesis, pero no prueban por sí solos que ocurrió un hecho. El informe distingue datos, inferencias y conclusiones, explica límites, y la decisión jurídica corresponde a la autoridad.",
    concepts: [
      { label: "Pregunta forense delimitada", terms: ["pregunta delimitada", "encargo juridico", "pregunta relevante para la justicia", "objetivo de la evaluacion"] },
      { label: "Varias fuentes o métodos", terms: ["entrevistas", "documentos", "observacion", "instrumentos", "varias fuentes", "multiples fuentes"] },
      { label: "Temporalidad, historia y alternativas", terms: ["temporalidad", "historia", "funcionamiento previo", "alternativas", "otras causas", "contrastar"] },
      { label: "Los síntomas no prueban por sí solos un hecho", terms: ["sintomas no prueban", "no prueban el hecho", "no demuestran el hecho", "no bastan para probar", "no establecen que ocurrio"] },
      { label: "Separar datos, inferencias y conclusiones", terms: ["datos", "inferencias", "conclusiones"] },
      { label: "Límites del informe y decisión jurídica", terms: ["limites", "decision juridica", "autoridad", "no decide culpabilidad"] }
    ]
  },
  trajectories: {
    source: "Moffitt (1993); Soria Verde y Sáiz Roca (2006), cap. 2, pp. 43–51; manual SAP–UGT, módulo I",
    model: "Moffitt distingue una trayectoria persistente a lo largo de la vida, asociada con inicio temprano e interacción acumulativa entre dificultades individuales y entorno adverso, y otra limitada a la adolescencia, relacionada con la brecha de madurez y la imitación de pares. Los factores de riesgo y protección modifican probabilidades: el inicio temprano no determina persistencia y siempre deben considerarse posibilidades de cambio.",
    concepts: [
      { label: "Trayectoria persistente a lo largo de la vida", terms: ["persistente", "persistencia a lo largo de la vida", "curso de vida"] },
      { label: "Trayectoria limitada a la adolescencia", terms: ["limitada a la adolescencia", "adolescencia limitada", "transitoria en la adolescencia"] },
      { label: "Mecanismos explicativos de ambas trayectorias", terms: ["inicio temprano", "entorno adverso", "dificultades individuales", "brecha de madurez", "imitacion de pares", "pares"] },
      { label: "Factores de riesgo y protección", terms: ["factor de riesgo", "factores de riesgo", "factor de proteccion", "factores de proteccion", "apoyo familiar", "apoyo escolar"] },
      { label: "El inicio temprano no determina el futuro", terms: ["no determina", "no es inevitable", "no constituye un destino", "posibilidad de cambio", "puede cambiar", "desistimiento"] },
      { label: "Considerar el desarrollo y varias fuentes", terms: ["cronologia", "a lo largo del tiempo", "varias fuentes", "historia familiar", "escuela", "contexto"] }
    ]
  }
};

function normalizeText(value) {
  return value
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function addTextElement(parent, tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
}

function renderWritingFeedback(prompt, check, response) {
  const feedback = prompt.querySelector(".writing-feedback");
  const normalizedResponse = normalizeText(response);
  const matched = check.concepts.filter((concept) =>
    concept.terms.some((term) => normalizedResponse.includes(normalizeText(term)))
  );
  const missing = check.concepts.filter((concept) => !matched.includes(concept));
  const percentage = Math.round((matched.length / check.concepts.length) * 100);
  const label = percentage >= 80 ? "Buena cobertura" : percentage >= 50 ? "En desarrollo" : "Agrega conceptos clave";

  feedback.replaceChildren();
  feedback.hidden = false;
  feedback.classList.toggle("is-strong", percentage >= 80);
  addTextElement(feedback, "strong", "writing-score", `${label} · ${matched.length} de ${check.concepts.length} conceptos (${percentage}%)`);
  addTextElement(feedback, "p", "writing-check-note", "Revisión orientativa por coincidencia de conceptos; no evalúa significado ni sustituye la revisión docente.");

  const conceptList = document.createElement("ul");
  conceptList.className = "concept-list";
  for (const concept of matched) addTextElement(conceptList, "li", "concept-found", `Incluido: ${concept.label}`);
  for (const concept of missing) addTextElement(conceptList, "li", "concept-missing", `Por revisar: ${concept.label}`);
  feedback.append(conceptList);

  addTextElement(feedback, "span", "model-answer-label", `RESPUESTA DE REFERENCIA · ${check.source.toLocaleUpperCase("es")}`);
  addTextElement(feedback, "p", "model-answer", check.model);
}

function createQuestionFeedback(question, isCorrect, correctLabel, explanation, source) {
  const feedback = document.createElement("div");
  feedback.className = `question-feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
  feedback.setAttribute("role", "status");
  addTextElement(feedback, "strong", "question-feedback-title", isCorrect ? "Correcta" : "Revisa esta respuesta");
  if (!isCorrect) addTextElement(feedback, "p", "question-correction", `Respuesta correcta: ${correctLabel}`);
  addTextElement(feedback, "p", "question-explanation", explanation);
  addTextElement(feedback, "span", "answer-source", `GUÍA · ${source.toLocaleUpperCase("es")}`);
  return feedback;
}

function gradeExam(form) {
  const questions = [...form.querySelectorAll(".exam-question")];
  const result = form.querySelector("#exam-result");
  const unansweredIndex = questions.findIndex((question) => !question.querySelector("input:checked"));

  if (unansweredIndex !== -1) {
    const unanswered = questions[unansweredIndex];
    const hiddenSection = unanswered.closest(".more-questions");
    if (hiddenSection) hiddenSection.open = true;
    result.replaceChildren();
    result.hidden = false;
    result.className = "exam-result is-incomplete";
    addTextElement(result, "strong", "", "Falta completar el simulacro");
    addTextElement(result, "p", "", `Responde el reactivo ${String(unansweredIndex + 1).padStart(2, "0")} y vuelve a calificar.`);
    unanswered.scrollIntoView({ behavior: "smooth", block: "center" });
    unanswered.querySelector("input")?.focus({ preventScroll: true });
    return;
  }

  let score = 0;
  questions.forEach((question, index) => {
    const answer = examAnswers[index];
    const labels = [...question.querySelectorAll("label")];
    const selectedInput = question.querySelector("input:checked");
    const selectedIndex = [...question.querySelectorAll("input")].indexOf(selectedInput);
    const isCorrect = selectedIndex === answer.correct;
    if (isCorrect) score += 1;

    labels.forEach((label, labelIndex) => {
      label.classList.toggle("is-correct", labelIndex === answer.correct);
      label.classList.toggle("is-incorrect", labelIndex === selectedIndex && !isCorrect);
    });

    question.querySelector(".question-feedback")?.remove();
    question.append(createQuestionFeedback(
      question,
      isCorrect,
      labels[answer.correct].querySelector("span").textContent,
      answer.explanation,
      answer.source
    ));
  });

  const percentage = Math.round((score / questions.length) * 100);
  result.replaceChildren();
  result.hidden = false;
  result.className = `exam-result ${score === questions.length ? "all-correct" : "has-incorrect"}`;
  addTextElement(result, "strong", "exam-score", `Resultado: ${score} de ${questions.length} · ${percentage}%`);
  addTextElement(result, "p", "", score === questions.length
    ? "Todas correctas en este intento. Revisa las explicaciones para consolidar los conceptos."
    : "Las respuestas incorrectas están marcadas con su corrección y fundamento; puedes cambiar una opción y volver a calificar.");
  result.scrollIntoView({ behavior: "smooth", block: "center" });
}

function clearExamFeedback(form) {
  form.querySelectorAll(".exam-question").forEach((question) => {
    question.querySelectorAll("label").forEach((label) => label.classList.remove("is-correct", "is-incorrect"));
    question.querySelector(".question-feedback")?.remove();
  });
  const result = form.querySelector("#exam-result");
  result.hidden = true;
  result.replaceChildren();
  result.className = "exam-result";
}

document.querySelectorAll(".writing-prompt").forEach((prompt) => {
  const textarea = prompt.querySelector("textarea[data-writing-check]");
  const button = prompt.querySelector(".compare-button");
  button.addEventListener("click", () => {
    const response = textarea.value.trim();
    const feedback = prompt.querySelector(".writing-feedback");
    if (!response) {
      feedback.replaceChildren();
      feedback.hidden = false;
      addTextElement(feedback, "p", "writing-empty", "Escribe una respuesta antes de revisarla.");
      textarea.focus();
      return;
    }
    renderWritingFeedback(prompt, writingChecks[textarea.dataset.writingCheck], response);
  });
});

const examForm = document.querySelector(".exam-form");
examForm.addEventListener("submit", (event) => {
  event.preventDefault();
  gradeExam(examForm);
});
examForm.addEventListener("reset", () => clearExamFeedback(examForm));