<template>
  <section>
    <div class="task-container columns is-multiline">
      <b-field class="card column is-half is-offset-one-quarter">
        <b-input placeholder="Nova tarefa" maxlength="120" expanded></b-input>
        <p class="control">
          <b-button class="button is-primary">Cadastrar</b-button>
        </p>
      </b-field>
    </div>

    <div class="task-container columns is-multiline" v-for="(task, index) in tasks" :key="index">
      <div class="card column is-half is-offset-one-quarter">
        <span class="is-pulled-left">{{ task.description }}</span>
        <span class="is-pulled-right">
          <b-button class="is-small" type="is-danger" icon-right="trash-can-outline" />
        </span>
        <span class="is-pulled-right">
          <b-checkbox title="Completar" type="is-success" :value="task.was_completed" />
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'ToDoList',
  created() {
    this.$store.dispatch('getTasks')
  },
  computed: {
    ...mapGetters({ tasks: 'tasks' })
  }
}
</script>

<style scoped>
</style>
