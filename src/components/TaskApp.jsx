import React from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader/>
      <AddTask/>
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
