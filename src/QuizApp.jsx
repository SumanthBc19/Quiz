import React, { useState } from "react";
import { data } from './data';
import './Style.css';

export default function QuizApp() {
    const [index, setindex] = useState(0);
    const [option, setOption]= useState(null);
    const [score, setScore] = useState(0);
    const [Quizfinished, setQuizfinish] = useState(false);
    const correctAnswers =['Option1', 'Option1', 'Option1', 'Option1', 'Option1','Option1','Option1', 'Option1', 'Option1','Option1',]

    const handleNext =()=>{
        if(option === correctAnswers[index]){
            setScore(score+1)
        }
        if (index< data.length-1){
            setindex(index+1);
            setOption(null);
        }
        else {
            setQuizfinish(true);
        }
    }

    if(Quizfinished){
        return (
            <>
            <h1> Quiz Finished </h1>
            <h3> Your Score is  {score} out of {data.length} </h3>
            </>
        )
    }

    const handleSelect = (optn) =>{
        setOption(optn);
    }
    return (
        <div className='quiz'>
        <h1>KodQuiz</h1>
        <h3>{data[index].Question}</h3>
        <ul>
            <li className={option === 'Option1'?'selected':''}
            onClick={()=> {handleSelect('Option1')}}
            >{data[index].Option1}</li>
            
                <li className={option === 'Option2'?'selected':''}
                onClick={()=> {handleSelect('Option2')}}
                >{data[index].Option2}</li>
            
                <li className={option === 'Option3'?'selected':''}
                onClick={()=> {handleSelect('Option3')}}
                >{data[index].Option3}</li>

                <li className={option === 'Option4'?'selected':''}
                onClick={()=> {handleSelect('Option4')}}
                >{data[index].Option4}</li>
        </ul>
        
        <button onClick={handleNext} disabled = {!option}>Next</button>
        <h5>Question {index+1} out of {data.length}</h5>
        </div>
    );
}
           