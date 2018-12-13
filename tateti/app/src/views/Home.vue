<template>
  <div class="home">
    <h3>Hola, esto es tateti espero que te diviertas !</h3>
    <br>
     <router-link class="btn btn-danger" :to="{name: 'usuarios'}"><h1>¡ Gui<span class="letra">ta</span>r<span class="letra">teti !</span></h1></router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'}
</script>

<style>
.btn {
  color:rgb(63, 61, 61);
  
  
}

.btn:hover {
  color: black;
  background-color: black;
}
.letra {
  color:rgb(63, 61, 61);
}

</style>
