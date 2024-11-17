import { ref, type Ref } from "vue";
import { defineStore } from "pinia";
import { Task } from "@/types/Task.ts";

export const useTasksStore = defineStore("tasks", () => {
  const task: Ref<Task | undefined> = ref();
  const tasks: Ref<Task[]> = ref([]) as Ref<Task[]>;

  async function create(task: Task) {
    const created_at = new Date();
    tasks.value.push({
      ...task,
      created_at,
      updated_at: created_at,
    });
  }

  return {
    task,
    tasks,
    create,
  };
});
