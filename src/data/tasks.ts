import { useTasksStore } from "@/stores/tasks.ts";
import { Priority, Status, Task } from "@/types/Task.ts";

function generateDummyTasks() {
  const newTasks: Task[] = [
    {
      id: Math.random(),
      title: "Design Website Homepage",
      created_at: new Date(),
      updated_at: new Date(),
      isEpic: false,
      priority: Priority.High,
      status: Status.Todo,
    },
    {
      id: Math.random(),
      title: "Review Vendor Contract",
      created_at: new Date(),
      updated_at: new Date(),
      isEpic: false,
      priority: Priority.Normal,
      status: Status.Todo,
    },
  ];

  newTasks.forEach((task) => {
    useTasksStore().create(task);
  });
}

export default generateDummyTasks;
