import React from "react"
import Start from "./Start"
import Quiz from "./Quiz"

export default function App() {

  const [start, setStart] = React.useState(false)
  const [numberOfQuestions, setNumberOfQuestions] = React.useState(5)

  function getNumber(event) {
    setNumberOfQuestions(event.target.value)
}

  function startQuiz() {
    setStart(true)
  }

  return (
    <main>
      {start ? <Quiz
                numberOfQuestions={numberOfQuestions}
                /> 
              : 
        <Start
          onClick={startQuiz}
          getNumber={getNumber}
        />
      }
    </main>
  )
}
