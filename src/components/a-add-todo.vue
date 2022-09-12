<template>
    <div>
        <h3>
            Add ToDo
        </h3>
        <div>
            <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add Todo...">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
export default {
    name: 'a-add-todo',
    data() {
      return {
        title: ''
      }
    },
    methods: {
      ...mapActions(['addTodo']),
      onSubmit(e) {
        e.preventDefault();
        this.addTodo(this.title)
      }
    },
}
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #006624;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #006624;
  color: #fff;
  border: 1px #006624 solid;
  cursor: pointer;
}
</style>