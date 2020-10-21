import React, { useState, useEffect } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.start(); //browser ask permission of microphone access and start listening to our voice

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    voiceCommands(); //when component load this function called
  });

  const voiceCommands = () => {
    //On start
    recognition.onstart = () => {
      console.log("voice is activated");
    };

    //Do something when we get a result
    recognition.onresult = (e) => {
      let current = e.resultIndex;
      let transcript = e.results[current][0].transcript;
      console.log(transcript); //what ever we speeck that store in the transcript so we fetch our words from event
      // let mobileRepeatBug =
      //   current === 1 && transcript === e.results[0][0].transcript;
      // //this used for we only get one result
      // console.log(mobileRepeatBug);

      if (transcript) {
        if (transcript === "next" || transcript === " next") {
          setCount(count + 1);
        }

        if (transcript === "back" || transcript === " back") {
          setCount(count - 1);
        }

        if (transcript === "Mohammed" || transcript === " Mohammed") {
          setName("Bhai Khud");
        }

        if (transcript === "Divya" || transcript === "Divya") {
          setName(" Woto Pagal Hai");
        }
        if (transcript === "Rashmi" || transcript === "Rashmi") {
          setName("Bade Log");
        }
        if (transcript === "Daksh" || transcript === "Daksh") {
          setName("Kuch Bolna Hi Nahi Hai");
        }

        if (transcript === "Nishtha" || transcript === "Nishtha") {
          setName("Welle Tester");
        }
      }

      setTimeout(() => {
        recognition.start();
      }, 0);
      //if we don't write this line browser will only listen 1st time
    };

    recognition.onspeechend = () => {
      recognition.stop();
      console.log("voice stoped");
    };
  };

  return (
    <div className="App">
      <p>Counter :{count}</p>
      <p>Name : {name}</p>
      {/* <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button> */}
    </div>
  );
}

export default App;
