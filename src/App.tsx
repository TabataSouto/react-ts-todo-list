import Header from "./components/header"
import Footer from "./components/footer"
import TaskForm from "./components/taskform";
import TaskList from "./components/tasklist";

import { ITask } from "./interfaces/ITask";

import styles from "./App.module.css";

const App = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <section>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar tarefa"/>
        </section>
        <section>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
