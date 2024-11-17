<template>
  <main>Paylead App</main>

  <TaskStatusColumn :status="Status.Todo"></TaskStatusColumn>
  <TaskStatusColumn :status="Status.Ongoing"></TaskStatusColumn>
  <TaskStatusColumn :status="Status.Done"></TaskStatusColumn>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { Status } from "@/types/Task";
import TaskStatusColumn from "@/components/TaskStatusColumn.vue";
import { useTasksStore } from "@/stores/tasks";
const tasksStore = useTasksStore();
const { tasks } = storeToRefs(tasksStore);
</script>
