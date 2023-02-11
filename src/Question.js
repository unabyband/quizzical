import React from "react";
import { encoder } from "./encoder";

export default function Question(props) {
 
  return (
    props.data.length ? (
    <div className="questions">
        {props.data.length && props.data.map((question, questionNum) => {
          return (
            <div className="question_wrap">
              <p className="question_text">{encoder(question.question)}</p>
              <div className="question_answers">

                {question.answers.map((answer, index) => { 
                  return (
                    <div 
                      className={question.choice === index ? 
                                "question_answer active selected" : 
                                "question_answer active"} 
                      onClick={() => {props.selectAnswer(
                                        answer, question.correct, 
                                        index, questionNum)}
                              }
                    >{encoder(answer)}</div>
                  )
                })}
              </div>
            </div>
          )
        })}
    </div>) :
    <h1>Wait...</h1>
  );
}