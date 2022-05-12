<template>
  <div id="app">
    <header style="background: rgb(255,26,140);">
      <h2 class="p-2">Título del formulario</h2>
      <h5 class="p-2">En menos de 5 minutos</h5>
    </header>
    <div class="row p-0 m-0">
      <article class="col-md-4">
        <img src="https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/rostro-mujer-adulta.jpg?resize=500%2C500&ssl=1" alt="Foto de perfil">
      </article>
      <aside class="col-md-8">
        <article>
          <Nombre @nombre="getDataNombre" />
        </article>
        <article>
          <FechaNacimiento @nacimiento="getDataNacimiento" />
        </article>
        <article>
          <Contacto @contacto="getDataContacto" />
        </article>
      </aside>
    </div>
    <footer>
      <div class="d-flex flex-row-reverse m-2">
        <div class="card col-md-5" style="background: rgb(221, 221, 221);">
          <div class="card-body">
            <p class="card-text">
              Si tus datos son correctos por favor continuemos
            </p>
          </div>
        </div>
      </div>
      <center class="mt-2">
        <button style="background: rgb(255,26,140);" class="btn btn-primary btn-lg btn-block col-md-6" v-on:click="createPost()">Iniciar</button>
      </center>
    </footer>
    <br>
    <center>
      <InfoUser class="col-md-10" v-show="showInfoUser" v-bind:info="infoUser" />
    </center>
  </div>
</template>

<script>
import Nombre from './components/Nombre.vue'
import FechaNacimiento from './components/FechaNacimiento.vue'
import Contacto from './components/Contacto.vue'
import InfoUser from './components/InfoUser.vue'
import createPost from './graphql/createUser.gql';

export default {
  name: 'App',
  components: {
    Nombre,
    FechaNacimiento,
    Contacto,
    InfoUser
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
      },
      infoUser: {
        'name': '',
        'date_birthday': '',
        'email': '',
        'phone': ''
      },
      showInfoUser: false
    }
  },
  methods: {
    createPost () {
      this.showInfoUser = false;
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
        .then((res) => {
          this.showInfoUser = true;
          console.log('info', res.data.createUser)
          this.infoUser = {
            'name': res.data.createUser.name + ' ' + res.data.createUser.second_name + ' ' + res.data.createUser.first_name + ' ' + res.data.createUser.last_name,
            'date_birthday': res.data.createUser.date_birthday,
            'email': res.data.createUser.email,
            'phone': res.data.createUser.phone
          }
        })
        .catch(err => console.error('error',err))
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
