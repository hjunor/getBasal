const form = document.getElementById("form");

const button = document.getElementById("button");

form.addEventListener("submit", handleSubmit);

button.addEventListener("click", handleClick);

function handleSubmit(event) {
  event.preventDefault();

  const age = parseInt(document.getElementById("age").value);

  const weight = parseInt(document.getElementById("weight").value);

  const height = parseInt(document.getElementById("height").value);

  const gender = handleValue("gender");

  const activity_level = parseFloat(handleValue("activity_level"));

  if (age && weight && height && gender && activity_level) {
    const result = document.createElement("div");
    result.innerHTML = "Preencha todos os campos!";

    return document.getElementById("cont").appendChild(result);
  } else {
    const tmb =
      gender === "famele"
        ? 655 + 9.6 * weight + 1.8 * height - 4.7 * age
        : 66 + 13.7 * weight + 5 * height - 6.8 * age;

    const maintenance = Math.round(tmb * activity_level);

    const loseWeight = maintenance - 450;

    const gainWeight = maintenance + 450;
    const result = document.createElement("div");

    const layout = `
        <div class="resultDiv">
            <h4 class="result">Metabolismo Basal : <span>${Math.round(
              tmb
            )} calorias</span>.</h4> 
            <h4 class="result">Manter o peso: <span>${maintenance} calorias </span>.</h4>
            <h4 class="result">Ganhar peso: <span>${gainWeight} calorias </span>.</h4>
            <h4 class="result">Perde peso: <span>${loseWeight} calorias </span>.</h4>
        </div>`;
    result.innerHTML = layout;

    return document.getElementById("cont").appendChild(result);
  }
}

function handleValue(id) {
  let fix = document.getElementById(id);
  return fix.options[fix.selectedIndex].value;
}

function handleClick() {
  const questionOneA = document.getElementById("questionOneA");
  const questionOneB = document.getElementById("questionOneB");
  const questionOneD = document.getElementById("questionOneD");

  const questionTwoB = document.getElementById("questionTwoB");
  const questionTwoC = document.getElementById("questionTwoC");
  const questionTwoD = document.getElementById("questionTwoD");

  const remove = document.getElementById("question");
  const removeTwo = document.getElementById("questionTwo");

  remove.removeChild(questionOneA);
  remove.removeChild(questionOneB);
  remove.removeChild(questionOneD);

  removeTwo.removeChild(questionTwoB);
  removeTwo.removeChild(questionTwoC);
  removeTwo.removeChild(questionTwoD);

  console.log(remove);
}
