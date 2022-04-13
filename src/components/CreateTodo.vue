<template>
    <form @submit.prevent="addTodo" class="mb-3" autocomplete="off">
      <label for="todo">
        <input
          id="todo"
          type="text"
          class="form-control border-0 rounded"
          v-model="data.name"
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
          v-model="data.priority"
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
</template>

<script>
export default {
  data() {
    return {
      data: {
        name: '',
        priority: '',
        status: 0,
      },
    };
  },
  methods: {
    addTodo() {
      this.$store.dispatch('addTodo', this.data);

      this.data = {
        name: '',
        priority: '',
      };

      this.$emit('getList');
    },
  },
};
</script>
