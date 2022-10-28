const gameUrl = "https://opentdb.com/api.php?amount=10"
let question = []
let questionAnswers = []
let cardContainer = document.getElementById('card-container')
const categories = document.getElementById('category')
const gameButton = document.getElementById('btn')


async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

async function main() {
    data = await getJson(gameUrl)
    question = data.results
    console.log(question)

}


function questionCard() {
    for (let i = 0; i < question.length; i++) {
        questionAnswers.push(question[i].incorrect_answers)
        questionAnswers.push(question[i].correct_answer)
        questionAnswers = Array.from(() =>{
            question[i].incorrect_answers.forEach()
        })



        const questionContainer = document.createElement('div')
        const questionHeader = document.createElement('div')
        const questionBody = document.createElement('div')
        questionContainer.setAttribute('class', 'card')
        questionHeader.setAttribute('class', 'card-header')
        questionBody.setAttribute('class', 'card-body')
        questionHeader.innerHTML = question[i].category.toString()
        questionBody.innerHTML = question[i].question.toString()
        cardContainer.appendChild(questionContainer)
        questionContainer.appendChild(questionHeader)
        questionContainer.appendChild(questionBody)

        for (let a = 0; a < question[i].incorrect_answers.length; a++) {
            const answersList = document.createElement('ul')
            const questionChoices = document.createElement('li')

            answersList.setAttribute('class', 'card-text')
            questionChoices.innerHTML = question[i].incorrect_answers[a]
            questionBody.appendChild(questionChoices)
            questionChoices.appendChild(answersList)


        }
    }
}


gameButton.addEventListener('click', () => {
    main()
    questionCard()

})




