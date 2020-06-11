<template>
  <section>
    {{tasks}}
    <b-field>
      <b-input placeholder="Nova tarefa" maxlength="100"></b-input>
      <p class="control">
        <b-button class="button is-primary">Cadastrar</b-button>
      </p>
    </b-field>

  <div
          class="card"
          v-for="(task, index) in tasks"
          :key="index"
  >
    <b-collapse
            class="card"
            animation="slide"
            aria-id="contentIdForA11y3"
    >
      <div
              slot="trigger"
              slot-scope="props"
              class="card-header"
              role="button"
              aria-controls="contentIdForA11y3"
      >
        <p class="card-header-title"
           title="Clique para expandir"
        >
          Versões
        </p>
        <a class="card-header-icon">
          <b-icon
                  :icon="props.open ? 'menu-down' : 'menu-up'">
          </b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <a>#buefy</a>.
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item">Completar</a>
        <a class="card-footer-item">Deletar</a>
      </footer>
    </b-collapse>
  </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data:  () => ({
    tasks:  null
  }),
  created() {
    this.getTasks()
  },
  methods: {
    getTasks () {
      const result = axios.get('http://localhost:8001/todolist/tasks/')
              .then(response => {
                const result = Promise.resolve(response.data)
                return result.then(value => value)
              })
              .catch(error => Promise.reject(error))
      console.log(result)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
