<template>
  <div class="mt-4 border rounded-lg p-4 bg-gray-50">
    <div class="flex items-center mb-2">
      <span
        class="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-1 rounded-md mr-2"
        >To-do</span
      >
      <span
        class="text-xs font-medium text-red-600 bg-red-100 px-2 py-1 rounded-md mr-2"
        >High</span
      >
      <span
        class="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-md"
        >Website</span
      >
    </div>
    <h3 class="text-sm font-medium text-gray-800 mb-1">
      Design Website Homepage
    </h3>
    <p class="text-xs text-gray-500 mb-3">E-commerce Redesign</p>
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-1">
        <div
          class="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-semibold"
        >
          J
        </div>
        <div
          class="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-semibold"
        >
          S
        </div>
        <div
          class="w-6 h-6 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-xs font-medium"
        >
          +2
        </div>
      </div>
      <div class="flex items-center text-gray-500 text-xs space-x-4">
        <div class="flex items-center space-x-1">
          <i class="far fa-comment-alt"></i>
          <span>5</span>
        </div>
        <div class="flex items-center space-x-1">
          <i class="far fa-calendar-alt"></i>
          <span>Tomorrow</span>
        </div>
        <div class="flex items-center space-x-1">
          <i class="far fa-clock"></i>
          <span>20%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
