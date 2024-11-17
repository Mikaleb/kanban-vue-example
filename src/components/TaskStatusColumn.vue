<template>
  <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
    <div class="flex items-center justify-between border-b pb-3">
      <h2 class="text-lg font-semibold text-gray-800 flex items-center">
        <i class="fas fa-sun text-yellow-400 mr-2"></i>{{ props.status }}
        <span class="text-gray-400 ml-1">18</span>
      </h2>
      <i class="fas fa-ellipsis-h text-gray-400"></i>
    </div>

    <template v-for="task in tasks">
      <TaskCard :task="task" />
    </template>

    <div class="mt-4 flex items-center text-gray-500 text-sm cursor-pointer">
      <i class="fas fa-plus text-gray-400 mr-2"></i>Add Task
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

const props = defineProps<{
  status: Status;
}>();

import TaskCard from "@/components/TaskCard.vue";
import { useTasksStore } from "@/stores/tasks";
const tasksStore = useTasksStore();
const { tasks } = storeToRefs(tasksStore);
</script>
