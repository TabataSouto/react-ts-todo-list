import { useState } from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import TaskForm from "./components/taskform";
import TaskList from "./components/tasklist";

import { ITask } from "./interfaces/ITask";

import styles from "./App.module.css";

const App = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <div>
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
          <TaskList />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
