import React, { useState } from "react";
import "./styles.css";

const emojipedia = {
  "๐": "Grinning face",
  "๐": "Beaming face with smiling eyes",
  "๐": "Face with tears of joy",
  "๐คฃ": "Rolling on the floor laughing",
  "๐": "Winking face",
  "๐": "Face savouring food",
  "๐ค": "Hugging",
  "๐ค": "Thinking",
  "๐คจ": "Sucspecting look",
  "๐": "Expressionless face",
  "๐ฅ": "Sad",
  "๐": "Love eyes / Excited with love",
  "๐": "Kiss",
  "๐ฅฐ": "Feeling to be loved",
  "๐ช": "Sleepy",
  "๐": "Cool face",
  "๐": "Frowning face",
  "๐จ": "Fearful face",
  "๐คฏ": "So tensed and stressfull",
  "๐": "Unamused face",
  "๐ฅต": "Hot face",
  "๐ต": "Dizzy face",
  "๐ฅด": "Woozy face",
  "๐ฅฑ": "Yawning face",
  "๐ด": "Sleeping face",
  "๐ค": "Nerd",
  "๐ญ": "Crying",
  "๐ก": "Angry",
  "๐ป": "Ghost",
  "๐ฝ": "Alien",
  "๐ค": "Robot",
  "๐คก": "Clown",
  "๐": "Skull"
};

let isnotFilled = false;
var emojiKeys = Object.keys(emojipedia);
export default function App() {
  var [meaning, setMeaning] = useState("");

  function changeHandler(event) {
    var inputEmoji = event.target.value;
    // console.log(inputEmoji);
    if (inputEmoji === "") {
      meaning = "Please click or enter a emoji";
      setMeaning(meaning);
    } else if (inputEmoji === undefined) {
      meaning = "Please enter a emoji";
      setMeaning(meaning);
    } else if (emojipedia[inputEmoji] === undefined) {
      isnotFilled = false;
      meaning =
        "We need to update the app with more emojis so, please try with different emoji";
      setMeaning(meaning);
    } else {
      meaning = emojipedia[inputEmoji];
      isnotFilled = false;
      setMeaning(meaning);
    }
  }

  function emojiClickHandler(item) {
    meaning = emojipedia[item];
    isnotFilled = false;
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "rgba(59, 53, 109, 1)",
          fontSize: "3rem",
          letterSpacing: "2px",
          padding: "5%",
          width: "100vw",
          margin: "0"
        }}
      >
        EMOJIPEDIA
      </h1>
      <input onChange={changeHandler} placeholder="Enter an emoji"></input>
      <div className="emojiShow">
        <h1>{meaning}</h1>
        <h2 style={{ width: "100%" }}>
          {isnotFilled ? `Click on the emoji and know the meaning` : ``}
        </h2>
        {emojiKeys.map((item) => {
          return (
            <span
              key={emojipedia[item]}
              onClick={() => emojiClickHandler(item)}
              className="emojiShow_item"
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
