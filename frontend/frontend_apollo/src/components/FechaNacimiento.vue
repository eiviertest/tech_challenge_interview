<template>
  <div class="card" style="background: rgb(221, 221, 221);">
    <div class="card-body">
      <h5 class="card-title">¿Cuál es tu fecha de nacimiento?</h5>
      <p class="card-text">
        <input v-model="user.day_birthday" type="number" min="1" max="31" class="form-control" placeholder="Día" @change="sendNacimiento()">
        <input v-model="user.month_birthday" type="text" class="form-control" placeholder="Mes" @change="sendNacimiento()">
        <input v-model="user.year_birthday" type="number" max="2022" min="1900" class="form-control" placeholder="Año" @change="sendNacimiento()">
      </p>
      <div class="alert alert-danger" role="alert">
        {{ user.day_birthday + ' ' + user.month_birthday + ' ' + user.year_birthday }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FechaNacimiento',
  data() {
    return {
      user: {
        'day_birthday': '',
        'month_birthday': '',
        'year_birthday': ''
      }
    }
  },
  methods: {
    sendNacimiento() {
      this.$emit('nacimiento', this.user.day_birthday + ' ' + this.user.month_birthday + ' ' + this.user.year_birthday)
    }
  }
}
</script>
