import React from 'react'
const popQuiz = ()=>{
    return(
        <div>

        </div>
    )

}

export default popQuiz



// function displayQuestions(question) {
//     let quizContainer = document.querySelector(".quizContainer");
//
//     let questionElement = document.createElement("div");
//     questionElement.classList.add("question");
//     questionElement.textContent = question.question;
//
//     let optionElement = document.createElement("div");
//     optionElement.classList.add("options");
//     question.options.forEach(option => {
//         let optionLabel = document.createElement("label");
//         let optionInput = document.createElement("input");
//         optionInput.type = "text";
//         optionInput.name = "option";
//         optionInput.value = option;
//         optionLabel.textContent = option;
//         optionElement.appendChild(optionInput);
//         optionElement.appendChild(optionLabel);
//     });
//     quizContainer.appendChild(questionElement);
//     questionElement.appendChild(optionElement);
// }
// displayQuestions(questions);

