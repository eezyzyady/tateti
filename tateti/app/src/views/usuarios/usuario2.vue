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
          <!-- //  <router-link class="button is-success" :to="{ name: 'usuarios.usuario2' }">
           //     ACEPTAR! --><button type="submit" class="button is-primary">Aceptar !</button>
            
            
            
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
    methods: {
        guardar () {
            var comp = this
            axios.post('http://localhost:4500/usuarios', comp.usuario)
                .then (function(resultado) {
                    comp.$router.push({ name: 'tateti'})
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
