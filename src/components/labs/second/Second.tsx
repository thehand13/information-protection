import { FormEvent, useState } from "react";
import styles from "../Labs.module.css";

const Second = () => {
  const [resultState, setResult] = useState("");
  const [inputState, setInputState] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const resultArray = [];
    for (let i = 0; i < inputState.length; i++) {
      let letter = inputState.charCodeAt(i).toString();
      while (letter.length < 4) {
        letter = "0" + letter;
      }
      resultArray.push(letter);
    }
    setResult(resultArray.join(" "));
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

export default Second;
