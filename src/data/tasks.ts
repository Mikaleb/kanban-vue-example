import { useTasksStore } from "@/stores/tasks.ts";
import { Priority, Status, Task } from "@/types/Task.ts";

function generateDummyTasks() {
  const generateRandId = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };

  const newTasks: Task[] = [
    {
      id: generateRandId(),
      title: "Design Website Homepage",
      created_at: new Date(),
      updated_at: new Date(),
      isEpic: false,
      priority: Priority.High,
      status: Status.Todo,
    },
    {
      id: generateRandId(),
      title: "Review Vendor Contract",
      created_at: new Date(),
      updated_at: new Date(),
      isEpic: false,
      priority: Priority.Normal,
      status: Status.Todo,
    },
    {
      id: generateRandId(),
      title: "Darkmode",
      created_at: new Date(),
      updated_at: new Date(),
      isEpic: false,
      priority: Priority.Normal,
      status: Status.Ongoing,
    },
    {
      id: generateRandId(),
      title: "Settings",
      created_at: new Date(),
      updated_at: new Date(),
      isEpic: false,
      priority: Priority.Normal,
      status: Status.Ongoing,
    },
    {
      id: generateRandId(),
      title: "KPI analysis",
      created_at: new Date(),
      updated_at: new Date(),
      isEpic: false,
      priority: Priority.Low,
      status: Status.Ongoing,
    },
    {
      id: generateRandId(),
      title: "Admin role",
      created_at: new Date(),
      updated_at: new Date(),
      isEpic: false,
      priority: Priority.High,
      status: Status.Done,
    },
  ];

  newTasks.forEach((task) => {
    useTasksStore().create(task);
  });
}

export default generateDummyTasks;
