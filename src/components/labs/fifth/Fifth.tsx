import { FormEvent, useState } from "react";
import styles from "../Labs.module.css";

const KEYS = ["1001001110111101110", "1111001101110010110", "1111100000"];

const Fifth = () => {
  const [keyState, setKey] = useState(KEYS[0]);
  const [resultState, setResult] = useState("");
  const [inputState, setInputState] = useState("");

  const onChangeSelectHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setKey(event.target.value);
  };

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (keyState.length === inputState.length) {
      const resultArray = [];
      for (let i = 0; i < inputState.length; i++) {
        if (keyState[i] === "1") {
          resultArray.push(inputState[i]);
        } else {
          if (inputState[i] === "1") {
            resultArray.push("0");
          } else {
            resultArray.push("1");
          }
        }
      }
      setResult(resultArray.join(""));
    }
  };
  return (
    <section className={styles.lab}>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.select}>
          <label className={styles.selectLabel} htmlFor="key-select">
            <b>Choose a key:</b>
          </label>
          <select name="keys" onChange={onChangeSelectHandler}>
            {KEYS.map((key) => {
              return <option key={key}>{key}</option>;
            })}
          </select>
        </div>

        <input type="text" onChange={onChangeInputHandler} value={inputState} />
        <button className={styles.calculate}>Calculate</button>
      </form>
      <div>
        <b>Result is:</b> {resultState}
      </div>
    </section>
  );
};

export default Fifth;
