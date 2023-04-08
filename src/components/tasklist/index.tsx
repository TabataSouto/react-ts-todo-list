import { ITask } from "../../interfaces/ITask";

import styles from "./TaskList.module.css";

interface IProps {
  taskList: ITask[];
  handleDeleteTask(id: number): void;
  handleEdit(task: ITask  ): void;
}

const TaskList = ({ taskList, handleDeleteTask, handleEdit }: IProps) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className="bi-pencil" onClick={() => handleEdit(task)}></i>
              <i className="bi-trash" onClick={() => handleDeleteTask(task.id)}></i>
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
