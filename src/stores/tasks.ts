import { defineStore } from "pinia";
import { Task, Status, Priority } from "@/types/Task.ts";

export const useTasksStore = defineStore("tasks", {
  state: () => {
    return {
      task: undefined as Task | undefined,
      tasks: [] as Task[],
    };
  },
  getters: {
    getTasksForStatus: (state) => {
      return (status: Status) => state.tasks.filter((t) => t.status === status);
    },
    getTask: (state) => {
      return (task: Task) => state.tasks.filter((t) => t.id === task.id);
    },
  },

  actions: {
    create(task: Task) {
      const created_at = new Date();
      this.tasks.push({
        ...task,
        created_at,
        updated_at: created_at,
      });
    },
    add(task: Partial<Task>, status: Status, index?: number) {
      const newTask: Task = {
        ...task,
        created_at: task.created_at ?? new Date(),
        updated_at: task.updated_at ?? new Date(),
        status,
        id: task.id ?? 0,
        isEpic: task.isEpic ?? false,
        priority: task.priority ?? Priority.Normal,
        title: task.title ?? "",
      };

      const tasksOfStatus: Task[] = this.tasks.filter(
        (t) => t.status === status
      );
      if (index) {
        tasksOfStatus.splice(index, 0, newTask);
      } else {
        tasksOfStatus.push(newTask);
      }
      // remove all tasks with status with the new updated tasksOfStatus
      this.updateTasks(status, tasksOfStatus);
    },
    update(task: Task) {},
    updateTasks(status: Status, updatedTasks: Task[]) {
      // remove all tasks with status from store and add new ones.
      this.tasks = this.tasks.filter((task) => task.status !== status);

      // Add new updated tasks to the store
      this.tasks.push(...updatedTasks);
    },
  },
});
