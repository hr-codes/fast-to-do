<template>
  <div class="content pb-5 mb-5">
    <div
      v-for="(todo, index) in todoList"
      :key="index"
      class="d-flex align-items-center rounded mt-3 task mx-auto p-0"
      v-bind:class="Number(todo.status) === 1 ? 'bg-completed text-white' : 'bg-white'"
      @mouseenter="settings.showDelete[index] = true"
      @mouseleave="settings.showDelete[index] = false"
    >
      <div
        class="col alert mb-0 row align-items-center"
        v-bind:class="settings.status[todo.status]"
        @click="$emit('changeStatus', index)"
      >
        <div class="d-flex align-items-center">
          <div
            class="priority me-3 rounded-circle mb-0"
            v-bind:class="`
              bg-${settings.colors[todo.priority]}
            `"
          />

          <h6 class="col p-0 m-0 text-start">
            {{ todo.name }}
          </h6>
        </div>
      </div>

      <Transition name="nested">
        <button
          v-if="settings.showDelete[index]"
          class="--delete rounded-0 rounded-end border-0"
          @click="$emit('deleteTodo', index)"
        >
          <img src="@/assets/icons/trash.png" alt="Deletar Tarefa">
        </button>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: {
        id: 1,
        name: '',
        priority: '',
        status: 0,
      },
      settings: {
        colors: {
          1: 'info',
          2: 'warning',
          3: 'orange',
          4: 'purple',
        },
        status: {
          0: 'task-in-progress',
          1: 'task-completed',
        },
        showDelete: {},
      },
    };
  },
  props: [
    'todoList',
  ],
};
</script>
