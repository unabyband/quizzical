import React from "react";
import Question from "./Question";
import Result from "./Result"

export default function Quiz(props) {
    const [scores, setScores] = React.useState(true)
    const [counter, setCounter] = React.useState(0)
    const [questions, setQuestions] = React.useState([])

    React.useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=${props.numberOfQuestions}&type=multiple`)
      .then(res => res.json())
      .then(data => setQuestions(data.results.map(result => {
                    return {
                        question: result.question,
                        correct: result.correct_answer,
                        answers: [result.correct_answer, ...result.incorrect_answers]
                                    .sort(() => Math.random() - 0.5),
                        choice: 4,
                        isCorrect: false
                    }
      })))
    }, [])

    function selectAnswer(selectedAnswer, correctAnswer, answerNum, questionNumber) {
        const correctValue = selectedAnswer == correctAnswer
        const oldQuestions = questions
        setQuestions(oldQuestions.map((result, index) => {
            return {
                question: result.question,
                correct: result.correct,
                answers: [...result.answers],
                choice: index === questionNumber ? answerNum : result.choice,
                isCorrect: index === questionNumber ? correctValue : result.isCorrect
                }
            }
        )
        )
    }

    function calculateScores() {
        let value = 0
        for (let i = 0; i < questions.length; i++) {
            if(questions[i].isCorrect === true) {
                value = value + 1
            }  
        }
        setCounter(value)
    }

    function checkAnswers() {
        setScores(false)
        calculateScores()
    }

    function playAgain() {
        window.location.reload()
    }

    return (
        <div className="quizpage">
            {scores ?
                <Question
                    data={questions}
                    selectAnswer={selectAnswer}
                />
                :
                <Result
                    data={questions}
                    selectAnswer={selectAnswer} 
                />
            }
            {scores ? <button 
                            className="quizpage-button_check" 
                            onClick={checkAnswers}>
                                Check answers
                        </button> 
                    : <div className="quizpage-scores">
                        <h4 className="quizpage-scores_info">
                            You scored {counter}/{props.numberOfQuestions} correct answers</h4>
                        <button 
                            className="quizpage-button_playagain" 
                            onClick={playAgain}>Play again
                        </button>  
                    </div>
            }
        </div>
    )
}