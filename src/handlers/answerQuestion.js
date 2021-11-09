import { quizData } from "../data.js"
let resultCounter =0;
function  checkAnswer (){
    
if(quizData.questions[quizData.currentQuestionIndex].correct === quizData.questions[quizData.currentQuestionIndex].selected){
   resultCounter++
    console.log('right',resultCounter)
}else{
    console.log('wrong')
}
}

export default checkAnswer