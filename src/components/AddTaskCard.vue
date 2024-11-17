<template>
  <div
    class="mt-4 flex items-center text-gray-500 text-sm cursor-pointer"
    @click="showForm = true"
    v-if="!showForm"
  >
    <i class="fas fa-plus text-gray-400 mr-2"></i>Add Task
  </div>

  <div class="mt-4 border rounded-lg p-4 bg-gray-50" v-if="showForm">
    <div class="flex items-center mb-2">
      <select
        v-model="newTask.priority"
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Set a priority</option>
        <template v-for="priority in priorities">
          <option :value="priority">{{ priority }}</option>
        </template>
      </select>
    </div>
    <input
      type="text"
      v-model="newTask.title"
      id="large-input"
      class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
    />
    <button
      type="button"
      class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      @click="addTask"
    >
      Add
    </button>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import { useTasksStore } from "@/stores/tasks";
import { Status, Task, Priority } from "@/types/Task";
import { Ref, ref } from "vue";

const showForm = ref(false);
const props = defineProps<{
  status: Status;
}>();
const tasksStore = useTasksStore();

const priorities = Object.values(Priority);

const initTask: Partial<Task> = {
  priority: Priority.Normal,
  status: props.status,
  title: "",
};

const newTask: Ref<Partial<Task>> = ref(initTask);

const resetForm = () => {
  newTask.value = initTask;
};

const addTask = () => {
  if (newTask.value) {
    tasksStore.add(newTask.value, props.status);
    showForm.value = false;
    resetForm();
  }
};
</script>
