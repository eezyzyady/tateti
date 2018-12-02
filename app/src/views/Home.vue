<template>
  <div class="home">
    <h3>Hola, esto es tateti espero que te diviertas !</h3>
    <br>
    <button class="btn btn-danger"> <router-link :to="{name: 'usuarios'}">COMENZAR!</router-link></button>
    <button class="btn btn-danger"> <router-link :to="{name: 'tablero'}">Tablero!</router-link></button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'}
</script>
