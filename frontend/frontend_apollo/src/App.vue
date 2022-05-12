<template>
  <div id="app">
    <header style="background: rgb(255,26,140);">
      <h2>Título del formulario</h2>
      <h5>En menos de 5 minutos</h5>
    </header>
    <section>
      <Nombre @nombre="getDataNombre" />
    </section>
    <section>
      <FechaNacimiento @nacimiento="getDataNacimiento" />
    </section>
    <section>
      <Contacto @contacto="getDataContacto" />
    </section>
    <article>
      <p>Si tus datos son correctos por favor continuemos</p>
      <button style="background: rgb(255,26,140);" class="btn btn-primary" v-on:click="createPost()">Iniciar</button>
    </article>
    {{ user }}
  </div>
</template>

<script>
import Nombre from './components/Nombre.vue'
import FechaNacimiento from './components/FechaNacimiento.vue'
import Contacto from './components/Contacto.vue'
import createPost from './graphql/createUser.gql';

export default {
  name: 'App',
  components: {
    Nombre,
    FechaNacimiento,
    Contacto
  },
  data() {
    return {
      user: {
        'name': '',
        'second_name': '',
        'first_name': '',
        'last_name': '',
        'date_birthday': '',
        'email': '',
        'phone': ''
      }
    }
  },
  methods: {
    createPost () {
      this.$apollo.mutate({
        mutation: createPost,
        variables: {
          input: {
            name: this.user.name,
            second_name: this.user.second_name,
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            date_birthday: this.user.date_birthday,
            email: this.user.email,
            phone: this.user.phone
          }
        }
      })
    },
    getDataContacto(value) {
      this.user.email = value.email;
      this.user.phone = value.phone;
    },
    getDataNombre(value) {
      this.user.name = value.name;
      this.user.second_name = value.second_name;
      this.user.first_name = value.first_name;
      this.user.last_name = value.last_name;
    },
    getDataNacimiento(value) {
      this.user.date_birthday = value;
    }
  }
}
</script>
