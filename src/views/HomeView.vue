<template>
  <main>Paylead App</main>
  <div class="flex m-8 mx-auto justify-center">
    <TaskStatusColumn :status="Status.Todo"></TaskStatusColumn>
    <TaskStatusColumn :status="Status.Ongoing"></TaskStatusColumn>
    <TaskStatusColumn :status="Status.Done"></TaskStatusColumn>
  </div>
</template>

<script setup lang="ts">
import { Status } from "@/types/Task";
import TaskStatusColumn from "@/components/TaskStatusColumn.vue";
</script>
