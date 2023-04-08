import React, { useState } from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import TaskForm from "./components/taskform";
import TaskList from "./components/tasklist";

import { ITask } from "./interfaces/ITask";

import styles from "./App.module.css";
import Modal from "./components/modal";

const App = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    display ? modal!.classList.remove("hide") : modal!.classList.add("hide");
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updated: ITask = { id, title, difficulty };
    const updateItem = taskList.map((task) =>
      task.id === updated.id ? updated : task
    );
    setTaskList(updateItem);
    hideOrShowModal(false)
  };

  return (
    <div>
      <Modal>
        {
          <TaskForm
            btnText="Editar Tarefa"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      </Modal>
      <Header />
      <main className={styles.main}>
        <section>
          <h2>O que você vai fazer?</h2>
          <TaskForm
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </section>
        <section>
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDeleteTask={deleteTask}
            handleEdit={editTask}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
