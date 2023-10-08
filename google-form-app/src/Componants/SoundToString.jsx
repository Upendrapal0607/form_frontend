import React, { useEffect, useState } from 'react';
import annyang from 'annyang';

const SpeechRecognitionComponent = () => {
 const [IsTrue,setIsTrue]=useState(false)
 console.log({IsTrue})
    console.log({annyang})
 const handleClick=()=>{
    setIsTrue(!IsTrue)
    if (annyang&&!IsTrue) {
      // Initialize annyang with your commands
      console.log(annyang.start())

      // Define a command to capture speech
      annyang.addCallback('result', (phrases) => {
        const capturedSpeech = phrases[0]; // Get the first recognized phrase
        console.log('Captured Speech:', capturedSpeech);

        // Now you can store `capturedSpeech` in your state or perform any other actions.
      });
    }
    else{
       console.log( annyang.abort())
    }

}

  return (
    <div>
      <p>Speak something to capture sound!</p>
     <button onClick={handleClick}>Sound</button>
    </div>
  );
};

export default SpeechRecognitionComponent;
