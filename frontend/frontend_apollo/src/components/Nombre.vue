<template>
  <div class="card" style="background: rgb(221, 221, 221);">
    <div class="card-body">
      <h5 class="card-title">¿Cuál es tu nombre?</h5>
      <p class="card-text">
        <input v-model="user.name" type="text" class="form-control" placeholder="Nombre" @change="sendNombre()">
        <input v-model="user.second_name" type="text" class="form-control" placeholder="Segundo nombre" @change="sendNombre()">
        <input v-model="user.first_name" type="text" class="form-control" placeholder="Apellido paterno" @change="sendNombre()">
        <input v-model="user.last_name" type="text" class="form-control" placeholder="Apellido materno" @change="sendNombre()">
      </p>
      <div class="alert alert-danger" role="alert">
        {{ user.name + ' ' + user.second_name + ' ' + user.first_name + ' ' + user.last_name }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Nombre',
  data() {
    return {
      user: {
        'name': '',
        'second_name': '',
        'first_name': '',
        'last_name': ''
      }
    }
  },
  methods: {
    sendNombre() {
      this.$emit('nombre', this.user)
    }
  }
}
</script>
