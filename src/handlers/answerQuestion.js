import { quizData } from "../data.js"

function  checkAnswer (){
if(quizData.questions[quizData.currentQuestionIndex].correct === quizData.questions[quizData.currentQuestionIndex].selected){
    console.log('right')
}else{
    console.log('wrong')
}
}

export default checkAnswer