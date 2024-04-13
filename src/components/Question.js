import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
 
  const [timeRemaining, setTimeRemaining] = useState(10);
useEffect (()=>{
  setTimeout(() =>setTimeRemaining(0),10000 )
console.log ("called me ??")

},[])
  useEffect(()=>{
    const timerID =  setTimeout(()=> {
      console.log("hello")

     setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1);
    }, 1000);
    return function cleanup() {
      clearTimeout(timerID);
    };
  }, [timeRemaining]);
  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
    }
  }, [timeRemaining]);

  ////got the timer to count down but said timer still counts down
  //   setTimeRemaining(timeRemaining - 1 )}
  //   )}
  //   ,[])
    
    

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)} >
            {answer} 
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
