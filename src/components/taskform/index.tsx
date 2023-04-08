import { useState, ChangeEvent, FormEvent, useEffect } from "react";

import styles from "./TaskForm.module.css";

import { ITask } from "../../interfaces/ITask";

interface IProps {
  btnText: string;
}

const TaskForm = ({ btnText }: IProps) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = () => {};

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    name === "title" ? setTitle(value) : setDifficulty(+value);
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
        />
      </div>

      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
        />
      </div>

      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
