<template>
  <div class="card" style="background: rgb(221, 221, 221);">
    <div class="card-body">
      <h5 class="card-title">Datos de contacto</h5>
      <p class="card-text">
        <input v-model="user.email" type="email" class="form-control" placeholder="Correo electrónico" @change="sendContacto()">
        <input v-model="user.phone" type="number" class="form-control" placeholder="Télefono celular" @change="sendContacto()">
      </p>
      <div class="alert alert-danger" role="alert">
        <p>Correo electrónico: {{ user.email }}</p>
        <p>Télefono celular: {{ user.phone }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Contacto',
  data() {
    return {
      user: {
        'email': '',
        'phone': ''
      }
    }
  },
  methods: {
    sendContacto(){
      this.$emit('contacto', this.user)
    }
  }
}
</script>
