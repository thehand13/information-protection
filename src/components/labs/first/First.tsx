import { FormEvent, useState } from "react";
import styles from "../Labs.module.css";

const RUSSIAN_KEYS = [
  "a",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "и",
  "у",
  "ф",
  "х",
  "ц",
  "ш",
  "щ",
  "ъ",
  "ы",
  "ь",
  "э",
  "ю",
  "я",
];

const First = () => {
  const [resultState, setResult] = useState("");
  const [inputState, setInputState] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    let i = 0;
    const resultArray = [];
    while (i < inputState.length) {
      const letter = inputState[i] + inputState[i + 1];
      if (inputState[i] === "*" || inputState[i + 1] === "*") {
        resultArray.push("");
        i++;
      } else {
        resultArray.push(RUSSIAN_KEYS[+letter]);
        i++;
        i++;
      }
    }
    setResult(resultArray.join(""));
  };
  return (
    <section className={styles.lab}>
      <form onSubmit={onSubmitHandler}>
        <input type="text" onChange={onChangeHandler} value={inputState} />
        <button className={styles.calculate}>Calculate</button>
      </form>
      <div>
        <b>Result is:</b> {resultState}
      </div>
    </section>
  );
};

export default First;
