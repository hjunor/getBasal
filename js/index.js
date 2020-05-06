const form = document.getElementById('form');

form.addEventListener('submit',handleSubmit)

function handleSubmit(event){

    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    
    const weight = parseInt(document.getElementById('weight').value);

    const height = parseInt(document.getElementById('height').value);

    const gender = handleValue('gender');

    const activity_level = parseFloat( handleValue('activity_level'));

    const tmb = (
        gender ==='famele'
        ? (655 + (9.6 * weight ) + (1.8 * height ) - (4.7 * age))
        : (66 + (13.7 * weight ) + (5 * height) - (6.8 * age))
    )

    const maintenance = Math.round((tmb * activity_level))
    
    const loseWeight = maintenance - 450;

    const gainWeight = maintenance + 450;
      
    const layout = `
        <div class="resultDiv">
            <h4 class="result">Metabolismo Basal : <span>${Math.round(tmb)} calorias</span>.</h4> 
            <h4 class="result">Manter o peso: <span>${maintenance} calorias </span>.</h4>
            <h4 class="result">Ganhar peso: <span>${gainWeight} calorias </span>.</h4>
            <h4 class="result">Perde peso: <span>${loseWeight} calorias </span>.</h4>
        </div>`;


    const result = document.getElementById('cont');

  return  result.innerHTML = layout;

}

function handleValue(id){
    var fix = document.getElementById(id);
 return fix.options[fix.selectedIndex].value;

}