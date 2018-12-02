<template>
<div class="usuario1">
    <input type="text">Jugador 1
    <div>
 <div class="section">
            <router-link class="button is-success" :to="{ name: 'usuarios.usuario2' }">
                ACEPTAR!
            </router-link>
            <router-view> </router-view>
            
        </div>
    </div>
    </div>
    
</template>

<script>
export default {
    

}
</script>

<style>

</style>
