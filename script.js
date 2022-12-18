const underWeightColor = "#75cfff"
const normalWeightColor = "#75ff78"
const overWeightColor = "#dfff75"
const obeseOneColor = "#ffea75"
const obeseTwoColor = "#ffba75"
const obeseThreeColor = "#ff7575"

function getBmi() {
    console.log("Passou aqui.");
    const weight = document.getElementById("weight-input").value
    const height = document.getElementById("height-input").value
    const resultText = document.getElementById("result-text")
    const resultBox = document.getElementById("result-box")

    if(!weight || !height || 
        weight == "" || height == ""){
            return
        }
    
    let bmi = weight / (height*height)

    bmi = bmi.toFixed(2)

    let resultMessage
    let boxColor

    if(bmi < 18.5){
        resultMessage = "Abaixo do peso ideal."
        boxColor = underWeightColor
    } else if (bmi < 25) {
        resultMessage = "Peso ideal."
        boxColor = normalWeightColor
    } else if (bmi < 30) {
        resultMessage = "Acima do peso."
        boxColor = overWeightColor
    } else if (bmi < 35) {
        resultMessage = "Obesidade grau I."
        boxColor = obeseOneColor
    } else if (bmi < 40) {
        resultMessage = "Obesidade grau II (Severa)."
        boxColor = obeseTwoColor
    } else {
        resultMessage = "Obesidade grau III (Mórbida)."
        boxColor = obeseThreeColor
    }

    
    resultMessage = `${bmi}: ${resultMessage}`
    
    resultBox.style.borderColor = boxColor
    resultText.innerHTML = resultMessage
}

