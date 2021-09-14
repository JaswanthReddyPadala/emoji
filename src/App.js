import React, { useState } from "react";
import "./styles.css";

const emojipedia = {
  "😀": "Grinning face",
  "😁": "Beaming face with smiling eyes",
  "😂": "Face with tears of joy",
  "🤣": "Rolling on the floor laughing",
  "😉": "Winking face",
  "😋": "Face savouring food",
  "🤗": "Hugging",
  "🤔": "Thinking",
  "🤨": "Sucspecting look",
  "😑": "Expressionless face",
  "😥": "Sad",
  "😍": "Love eyes / Excited with love",
  "😘": "Kiss",
  "🥰": "Feeling to be loved",
  "😪": "Sleepy",
  "😎": "Cool face",
  "😕": "Frowning face",
  "😨": "Fearful face",
  "🤯": "So tensed and stressfull",
  "😒": "Unamused face",
  "🥵": "Hot face",
  "😵": "Dizzy face",
  "🥴": "Woozy face",
  "🥱": "Yawning face",
  "😴": "Sleeping face",
  "🤓": "Nerd",
  "😭": "Crying",
  "😡": "Angry",
  "👻": "Ghost",
  "👽": "Alien",
  "🤖": "Robot",
  "🤡": "Clown",
  "💀": "Skull"
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
