import { ITask } from "../../interfaces/ITask";

import styles from "./TaskList.module.css";

interface IProps {
  taskList: ITask[];
}

const TaskList = ({ taskList }: IProps) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map(({ id, title, difficulty }) => (
          <div key={id} className={styles.task}>
            <div className={styles.details}>
              <h4>{title}</h4>
              <p>Dificuldade: {difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className="bi-pencil"></i>
              <i className="bi-trash"></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  );
};

export default TaskList;
