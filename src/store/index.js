import { createStore } from 'vuex';
import SecureLS from 'secure-ls';

const ls = new SecureLS({ encodingType: 'aes', isCompression: true });

export default createStore({
  state: {
    todoList: [],
  },
  getters: {
    getTodoList(state) {
      if (!ls.get('todo_list')) {
        return [];
      }

      state.todoList = ls.get('todo_list');

      return state.todoList;
    },
  },
  mutations: {
    setTodoList(state, payload) {
      ls.set('todo_list', payload);

      if (!ls.get('todo_list')) {
        return;
      }

      state.todoList = ls.get('todo_list');
    },
  },
  actions: {
    setTodoList(context, payload) {
      context.commit('setTodoList', payload);
    },
    addTodo(context, payload) {
      const data = JSON.parse(JSON.stringify(context.getters.getTodoList));

      data.push(payload);

      context.commit('setTodoList', data);
    },
  },
  modules: {
  },
});
