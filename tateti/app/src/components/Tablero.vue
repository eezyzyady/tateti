<template>
    <div class="tablero">
        <div class="fondo">
        <h1 class="fondo2">TA TE TI </h1>
        <TableroArriba />
        <TableroDeJuego />
        <TableroAbajo />
    </div></div>
</template>

<script>
import TableroArriba from './TableroArriba.vue';
import TableroDeJuego from './TableroDeJuego.vue';
import TableroAbajo from './TableroAbajo.vue';

export default {
    name: 'Tablero',

    components: {
        TableroArriba,
        TableroDeJuego,
        TableroAbajo,

    },
    props: {
    usuario1: {
      type: Object,
      default: null
    },
    usuario2: {
      type: Object,
      default: null
      
    }
  }
    }

</script>

<style>
    .tablero {
        
        width: 400px;
        height: 600px;
        position: absolute;
        right: calc(50% - 200px);
        min-width: 400px;
        max-width: 400px;
    }

.fondo2 {
    opacity: 0.8;
}
    .fondo2{
        color:floralwhite;
       
        
    }
</style>