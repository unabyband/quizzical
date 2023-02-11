import React from "react";
import { encoder } from "./encoder";

export default function Result(props) {

    function displayAnswer(isCorrect, choice, correct, current, myAnswer) {
        if(isCorrect && current == choice)
        {
            return "question_answer correct"
        } else if(!isCorrect && myAnswer[current] == correct) {
            return "question_answer correct"
        } else if(!isCorrect && current == choice) {
            return "question_answer incorrect"
        } else {
            return "question_answer"
        }
    }
 
  return (
    <div className="questions">
        {props.data.length && props.data.map(question => {
          return (
            <div className="question_wrap">
              <p className="question_text">{encoder(question.question)}</p>
              <div className="question_answers inactive">
                {question.answers.map((answer, index) => { 
                  return (
                    <div 
                      className={displayAnswer(
                                    question.isCorrect, 
                                    question.choice,   
                                    question.correct, 
                                    index, question.answers)}
                    >{encoder(answer)}</div>
                  )
                })}
              </div>
            </div>
          )
        })}
    </div>)
}