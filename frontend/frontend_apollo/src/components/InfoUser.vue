<template>
    <div class="card" style="background: rgb(255,26,180);">
        <div class="card-body">
            <div class="card-text">
                <p>Fecha de nacimiento: {{ info.date_birthday }}</p>
                <p>Correo electrónico: {{ info.email }}</p>
                <p>Teléfono celular: {{ info.phone }}</p>
                <p>Nombre: {{ info.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'InfoUser',
    props: {
        info: Object,
        default: function () {
            return { info: {'date_birthday':'','email':'', 'phone':'', 'name':''} }
        }
    }
}
</script>
