import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

import styles from "./TaskForm.module.css";

import { ITask } from "../../interfaces/ITask";

interface IProps {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const TaskForm = ({ btnText, taskList, setTaskList }: IProps) => {
  // const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);
    const newTask: ITask = { id, title, difficulty};

    setTaskList!([...taskList, newTask]);
    setTitle("")
    setDifficulty(0)
  };

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
          value={title}
          placeholder="Título da tarefa"
          onChange={handleChange}
        />
      </div>

      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          value={difficulty}
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
        />
      </div>

      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
