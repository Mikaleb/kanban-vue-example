<template>
  <div class="max-w-64 bg-white rounded-lg shadow p-4 m-4">
    <div class="flex items-center justify-between border-b pb-3">
      <h2 class="text-lg font-semibold text-gray-800 flex items-center">
        <i class="fas fa-sun text-yellow-400 mr-2"></i>{{ props.status }}
        <span class="text-gray-400 ml-1">18</span>
      </h2>
      <i class="fas fa-ellipsis-h text-gray-400"></i>
    </div>
    <VueDraggable
      class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded overflow-auto min-h-32 min-w-32"
      v-model="statusTasks"
      animation="150"
      ghostClass="ghost"
      group="tasks"
      @add="onAdd"
      @update="onUpdate"
      @remove="onRemove"
      :ref="status"
    >
      <template v-for="task in statusTasks">
        <TaskCard :task="task" />
      </template>
    </VueDraggable>

    <AddTaskCard :status="status"></AddTaskCard>
  </div>
</template>

<script setup lang="ts">
//@ts-ignore
import { VueDraggable, DraggableEvent } from "vue-draggable-plus";
import AddTaskCard from "@/components/AddTaskCard.vue";
import TaskCard from "@/components/TaskCard.vue";
import { useTasksStore } from "@/stores/tasks";
import { Status } from "@/types/Task";
import { computed } from "vue";
const props = defineProps<{
  status: Status;
}>();

const tasksStore = useTasksStore();

const statusTasks = computed({
  get() {
    return tasksStore.tasks.filter((t) => t.status === props.status);
  },
  set(val) {
    tasksStore.updateTasks(props.status, val);
  },
});

function onUpdate() {
  console.log("update");
}
function onAdd(event: DraggableEvent) {
  tasksStore.add(event.data, props.status, event.newIndex);
}
function onRemove() {
  console.log("remove");
}
</script>
