<template>
<div class="usuario1">
    <h1>Jugador 2</h1>
    <form class="form" @submit.prevent="guardar">
        <label class="label"> Jugador 2 </label>
        <div class="control">
    <input class="input" type="text" placeholder="Nombre de Usuario" v-model="usuario.nombre">
    <div>
    </div>
          <div class="section">
          <button type="submit" class="button is-primary">Aceptar !</button>
          </div>
    </div></form>
    </div>
    
</template>

<script>
 import axios from 'axios'

export default {
    data () {
        return {
            usuario: {
                nombre: '',
                victorias: '0',
            }
        }
    },
    props: {
        usuario1:null
    },
    methods: {
        guardar () {
            var comp = this
            axios.post('http://localhost:4500/usuarios', comp.usuario)
                .then (function(resultado) {
                    comp.$router.push({ name: 'tateti', params: {usuario1:comp.usuario1, usuario2: resultado.data}})
                    console.log('te fuiste al juego')
                }).catch(function(error) {
                    console.error(error)
                });
            console.log('el artista es : ', this.usuario)
        }
    }
    

}
</script>

<style>

</style>
