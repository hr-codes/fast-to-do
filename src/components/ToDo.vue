<template>
  <div id="todo-main" class="container">
    <h1 class=" text-white text-uppercase">
      Fast To-Do
    </h1>

    <h6 class="mb-4 pb-3 text-secondary">
      Powered by HRCodes
    </h6>

    <form @submit.prevent="addTodo" class="mb-3" autocomplete="off">
      <label for="todo">
        <input
          id="todo"
          type="text"
          class="form-control border-0 rounded"
          v-model="todo.name"
          placeholder="Nome da tarefa"
          required
        >
      </label>

      <label
        for="priority"
        class="ms-2"
      >
        <select
          name=""
          id="priority"
          class="form-select rounded border-0"
          v-model="todo.priority"
          required
        >
          <option value="">Prioridade</option>
          <option value="1">Baixa</option>
          <option value="2">Média</option>
          <option value="3">Alta</option>
          <option value="4">Urgente</option>
        </select>
      </label>

      <button
        id="--submit"
        class="ms-2 text-white rounded"
      >
        <img src="@/assets/icons/add.png" alt="Adicionar Tarefa">
      </button>
    </form>

    <div class="content overflow-auto">
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
          @click="todo.status === 0 ? todo.status = 1 : todo.status = 0"
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
            @click="todoList.splice(index, 1)"
          >
            <img src="@/assets/icons/trash.png" alt="Deletar Tarefa">
          </button>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script>
import SecureLS from 'secure-ls';

const ls = new SecureLS({ encodingType: 'aes', isCompression: false });

export default {
  name: 'ToDo',
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
      todoList: [],
    };
  },
  watch: {
    todoList: {
      handler(data) {
        ls.set('todo_list', data);
      },
      deep: true,
    },
  },
  methods: {
    addTodo() {
      this.todoList.push(this.todo);

      this.todo = {
        id: this.todoList.length + 1,
        name: '',
        priority: '',
        status: 0,
      };
    },
  },
  created() {
    if (ls.get('todo_list')) {
      this.todoList = ls.get('todo_list');
    }
  },
};
</script>

<style lang="scss">
  $content-size: 500px;

  body {
    background-color: rgb(42, 52, 77) !important;
  }

  #todo-main {
    .task {
      width: $content-size + 230px;
      box-shadow: 0px 11px 46px 0px rgba(0,0,0,0.1);
      height: 55px !important;
    }

    .alert {
      cursor: pointer;
    }

    .--delete {
      height: 55px !important;
      align-items: center;
      width: 50px;
      background-color: rgb(214, 28, 28);
    }

    .priority {
      width: 15px !important;
      height: 15px !important;
    }

    .hr-rounded-pill-start {
      border-start-start-radius: 4px !important;
      border-end-start-radius: 4px !important;
    }

    .hr-rounded-pill-end {
      border-start-end-radius: 4px !important;
      border-end-end-radius: 4px !important;
    }

    label {
      input {
        width: $content-size;
      }

      input, select {
        font-size: 1.2rem;
        line-height: 2.1rem;
      }
    }

    .content {
      height: calc(100vh - 315px);

      @media (max-width: 1366px) {
        height: calc(100vh - 240px);
      }
    }

    .task-completed {
      text-decoration: line-through;
    }

    .bg-completed {
      background-color: rgb(159, 191, 116);;
    }

    .bg-orange {
      background-color: orangered;
    }

    .bg-purple {
      background-color: purple;
    }

    #--submit {
      border: 0;
      background-color: rgb(53, 161, 233);
      border-bottom: 4px solid rgb(36, 105, 151);
      border-radius: 4px;
      padding: 7px 16px;
      transform: translateY(-1px);
      font-size: 1.2rem;
    }

    .nested-enter-from {
      transition: all 300ms ease-in-out;
      width: 0px !important;
      opacity: 0;
    }

    .nested-enter-to {
      transition: all 300ms ease-in-out;
      width: 50px !important;
      opacity: 1;
    }

    .nested-leave-from {
      transition: all 300ms ease-in-out;
      width: 50px !important;
      opacity: 1;
    }

    .nested-leave-to {
      transition: all 300ms ease-in-out;
      width: 0px !important;
      opacity: 0;

      img {
        opacity: 0;
        transition: all 100ms ease-in-out;
      }
    }
  }
</style>
