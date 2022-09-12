<template> 
    <div class="container">
        <a-add-todo/>
        <a-filter-todos/>
        <a-todos/>
    </div> 
</template>

<script>
import ATodos from './components/a-todos.vue'
import AAddTodo from './components/a-add-todo.vue'
import AFilterTodos from './components/a-filter-todos.vue'

export default {
  name: 'App',
  components: {
    ATodos,
    AAddTodo,
    AFilterTodos
  }
}
</script>

<style scoped>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background: #e8f7e8f0;
  line-height: 1.6;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
