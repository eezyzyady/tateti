<template>
    <div class="tablero">
        <div class="fondo">
        <h1>TA TE TI</h1>

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
    data () {
        return {
            
        }
    },

    components: {
        TableroArriba,
        TableroDeJuego,
        TableroAbajo
    },
    }


</script>

<style>
    .tablero {
        /* margin: 100px auto; */
        width: 400px;
        height: 600px;
        position: absolute;
        right: calc(50% - 200px);
        /* top: 200px; */
        min-width: 400px;
        max-width: 400px;
    }
    .fondo{
    
        background-color: aqua;
        background-size: cover;
    }
</style>