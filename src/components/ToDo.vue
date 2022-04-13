<template>
  <div id="todo-main">
    <div class="container">
      <div class="col-12 align-items-center mb-4">
        <h1 class="text-white text-uppercase mb-1">
          Fast To-Do
        </h1>

        <h6 class="pb-3 text-secondary">
          Powered by HRCodes
        </h6>
      </div>

      <CreateTodo @getList="getList" />

      <ListTodo
        :todoList="todoList"
        @deleteTodo="deleteTodo"
        @changeStatus="changeStatus"
        @getList="getList"
      />
    </div>

    <Legends />
  </div>
</template>

<script>
import Legends from '@/components/LegendsTodo.vue';
import CreateTodo from '@/components/CreateTodo.vue';
import ListTodo from '@/components/ListTodo.vue';

export default {
  data() {
    return {
      todoList: [],
    };
  },
  components: {
    Legends,
    CreateTodo,
    ListTodo,
  },
  methods: {
    getList() {
      this.todoList = this.$store.getters.getTodoList;
    },
    deleteTodo(index) {
      this.todoList.splice(index, 1);

      this.$store.dispatch('setTodoList', this.todoList);

      this.getList();
    },
    changeStatus(index) {
      const data = this.todoList[index];

      if (data.status === 0) {
        data.status = 1;
      } else {
        data.status = 0;
      }

      this.$store.dispatch('setTodoList', this.todoList);

      this.getList();
    },
  },
  created() {
    this.getList();
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
      width: 9px !important;
      height: 9px !important;
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
      border: 0 !important;
      background: rgb(76, 68, 216);
      background: linear-gradient(0deg, rgb(105, 97, 252) 0%, rgba(0,212,255,1) 100%);

      border-bottom: 4px solid rgb(59, 54, 151)!important;
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
