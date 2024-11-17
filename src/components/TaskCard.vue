<template v-if="props.task">
  <div class="mt-4 border rounded-lg p-4 bg-gray-50">
    <div class="flex items-center mb-2">
      <span
        :class="getStatusClass(props.task.status)"
        class="text-xs font-medium px-2 py-1 rounded-md mr-2 bg-gray-100"
      >
        {{ getStatus(props.task.status) }}
      </span>
      <span
        class="text-xs font-medium px-2 py-1 rounded-md mr-2"
        :class="getPriorityClass(props.task.priority)"
      >
        {{ props.task.priority }}</span
      >
    </div>
    <h3 class="text-sm font-medium text-gray-800 mb-1">
      {{ props.task.title }}
    </h3>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import { Status, Task, Priority } from "@/types/Task.ts";

const props = defineProps<{
  task: Task;
}>();

const getPriorityClass = (priority: Priority) => {
  const priorityClasses = {
    [Priority.Urgent]: "text-blue-600 bg-blue-100",
    [Priority.High]: "text-orange-600 bg-orange-100",
    [Priority.Normal]: "text-yellow-600 bg-yellow-100",
    [Priority.Low]: "text-blue-600 bg-blue-100",
  };

  return priorityClasses[priority] || "";
};

const getStatusClass = (status: Status) => {
  const statusClasses = {
    [Status.Todo]: "text-grey-500 ",
    [Status.Ongoing]: "text-orange-500 ",
    [Status.Done]: "text-green-500 ",
  };

  return statusClasses[status] || "";
};

const getStatus = (status: Status) => {
  switch (status) {
    case Status.Todo:
      return "To do";
    case Status.Ongoing:
      return "In Progress";
    case Status.Done:
      return "Completed";
    default:
      return "Unknown status";
  }
};
</script>
