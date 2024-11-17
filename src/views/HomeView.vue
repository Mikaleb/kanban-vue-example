<template>
  <main>Paylead App</main>

  <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-4">
    <div class="flex items-center justify-between border-b pb-3">
      <h2 class="text-lg font-semibold text-gray-800 flex items-center">
        <i class="fas fa-sun text-yellow-400 mr-2"></i>To-do
        <span class="text-gray-400 ml-1">18</span>
      </h2>
      <i class="fas fa-ellipsis-h text-gray-400"></i>
    </div>

   <TaskCard />

    <div class="mt-4 border rounded-lg p-4 bg-gray-50">
      <div class="flex items-center mb-2">
        <span
          class="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded-md mr-2"
          >To-do</span
        >
        <span
          class="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-md mr-2"
          >Normal</span
        >
        <span
          class="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-md"
          >Dashboard</span
        >
      </div>
      <h3 class="text-sm font-medium text-gray-800 mb-1">
        Review Vendor Contract
      </h3>
      <p class="text-xs text-gray-500 mb-3">Vendor Management System</p>
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-1">
          <div
            class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-semibold"
          >
            K
          </div>
          <div
            class="w-6 h-6 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xs font-semibold"
          >
            S
          </div>
        </div>
        <div class="flex items-center text-gray-500 text-xs space-x-4">
          <div class="flex items-center space-x-1">
            <i class="far fa-comment-alt"></i>
            <span>0</span>
          </div>
          <div class="flex items-center space-x-1">
            <i class="far fa-calendar-alt"></i>
            <span>12 Sept</span>
          </div>
          <div class="flex items-center space-x-1">
            <i class="far fa-clock"></i>
            <span>0%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 flex items-center text-gray-500 text-sm cursor-pointer">
      <i class="fas fa-plus text-gray-400 mr-2"></i>Add Task
    </div>
  </div>
</template>

<script setup lang="ts">
import TaskCard from '@/components/TaskCard.vue'
</script>