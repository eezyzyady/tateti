<template>
<div class="usuario1">
    <h1>Jugador 1</h1>
    <form class="form" @submit.prevent="guardar">
        <label class="label"> Jugador 1 </label>
        <div class="control">
        <input class="input" type="text" placeholder="Nombre de Usuario" id="jugador1" v-model="usuario.nombre">
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
    name: 'usuario1',
    data () {
        return {
            usuario: {
                nombre: '',
                victorias: 0,
                derrotas: 0,
                empates:0,
            }
        }
    },

    methods: {
        guardar () {
            var comp = this
            axios.post('http://localhost:4500/usuarios', comp.usuario)
                .then (function(resultado) {
                comp.$router.push({ name: 'usuarios.usuario2', params:{usuario1:resultado.data}})
                console.log('te fuiste al usuario 2')
             }).catch(function(error) {
                console.error(error)
                });
            
        },
        
        
    },
    
    

}
</script>

<style>

</style>
