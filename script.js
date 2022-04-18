const questions = document.querySelectorAll(".question")
const answers = document.querySelectorAll(".answer")
const arrows = document.querySelectorAll(".arrow-down")

questions.forEach((question,index) => {
    question.addEventListener("click", ()=> {
        
        if (question.classList.contains("clicked")) {
            question.classList.remove("clicked")
            answers[index].classList.add("hide")
            arrows[index].classList.remove("clicked")
        } else {
            questions.forEach(question => question.classList.remove("clicked"))
            answers.forEach(answer => answer.classList.add("hide"))
            arrows.forEach(arrow => arrow.classList.remove("clicked"))
            question.classList.add("clicked")
            answers[index].classList.remove("hide")
            arrows[index].classList.add("clicked")

        }
    })
})

arrows.forEach((arrow,index) => {
    arrow.addEventListener("click", ()=> {
        
        if (arrow.classList.contains("clicked")) {
            questions[index].classList.remove("clicked")
            answers[index].classList.add("hide")
            arrow.classList.remove("clicked")
        } else {
            questions.forEach(question => question.classList.remove("clicked"))
            answers.forEach(answer => answer.classList.add("hide"))
            arrows.forEach(arrow => arrow.classList.remove("clicked"))
            questions[index].classList.add("clicked")
            answers[index].classList.remove("hide")
            arrow.classList.add("clicked")
        }
    })
})