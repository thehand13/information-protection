import { FormEvent, useState } from "react";
import styles from "../Labs.module.css";

const LETTERS = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

const Fourth = () => {
  const [resultState, setResult] = useState("");
  const [inputState, setInputState] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();

    const resultArray: string[] = [];

    const d = 5,
      x1 = (-3 + Math.sqrt(d)) / 2,
      x2 = (-3 - Math.sqrt(d)) / 2,
      s1 = (((((x1 + 3) * x1 + 1) * x1 + 1) * x1 + 4) * x1 + 4) * x1 + 3,
      s2 = (((((x2 + 3) * x2 + 1) * x2 + 1) * x2 + 4) * x2 + 4) * x2 + 3,
      k = Math.floor(s1);
    for (let i = 0; i < inputState.length; i++) {
      if (LETTERS.indexOf(inputState[i])) {
        resultArray.push(LETTERS[(LETTERS.indexOf(inputState[i]) - k) % 33]);
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

export default Fourth;
