<template>
  <div id="tateti">
    <Tablero />
  </div>
</template>

<script>
import Tablero from './Tablero.vue';

export default {
  name: 'tateti',
  components: {
    Tablero
  }
}


</script>

<style>
body{
  background: rgba(230, 228, 228, 0.678);
}
#tateti {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    background-image: url("http://www.hdfondos.eu/preview/get_photo/189220/1920/1080");
background-color: blue;
  
}
</style>
