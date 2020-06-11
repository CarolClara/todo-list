<template>
  <section>
    <div class="task-container columns is-multiline">
      <b-field class="card column is-half is-offset-one-quarter">
        <b-input
                placeholder="Nova tarefa"
                maxlength="120"
                expanded
                v-model="newTask.description"
        />
        <p class="control">
          <b-button
                  class="button is-primary"
                  @click="createTask()"
          >
            Cadastrar
          </b-button>
        </p>
      </b-field>
    </div>

    <div
            class="task-container columns is-multiline"
            v-for="(task, index) in tasks"
            :key="index"
    >
      <div class="card column is-half is-offset-one-quarter">
        <b-input
                class="is-pulled-left"
                :value="task.description"
        />

        <span class="is-pulled-right">
          <b-button
                  class="is-small"
                  title="Remover"
                  type="is-danger"
                  icon-right="trash-can-outline"
                  @click="removeTask(task)"
          />
        </span>

        <span class="is-pulled-right">
          <b-button
                  class="is-small"
                  title="Salvar alterações"
                  type="is-success"
                  icon-right="check"
                  @click="saveChanges(task)"
          />
        </span>

        <span class="is-pulled-right">
          <b-checkbox
                  title="Completar"
                  v-model="task.was_completed"
                  :value="task.was_completed"
          />
        </span>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapState} from "vuex";

export default {
  name: 'ToDoList',
  data () {
    return {
      newTask: { description: '' }
    }
  },
  created() {
    this.$store.dispatch('getTasks')
  },
  computed: {
    ...mapState ({tasks: 'tasks', msg: 'message'})
  },
  methods: {
    async saveChanges (task) {
      await this.$store.dispatch('saveChanges', task)
      await this.$store.dispatch('getTasks')
      console.log(this.tasks)
      this.callMsg()
    },
    async createTask () {
      await this.$store.dispatch('createTask', this.newTask)
      await this.$store.dispatch('getTasks')
      this.callMsg()
    },
    async removeTask (task) {
      await this.$store.dispatch('removeTask', task)
      await this.$store.dispatch('getTasks')
      this.callMsg()
    },
    callMsg() {
      this.$buefy.toast.open({
        duration: 3000,
        message: this.msg,
        position: 'is-bottom',
        type: 'is-success'
      })
    }
  }
}
</script>

<style scoped>
</style>
