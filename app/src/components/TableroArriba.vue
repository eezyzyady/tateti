<template>
    <div class="tablero-arriba">
      <div v-show="this.juegoActivo" class="round-on">
        <p class="turn-indicator">{{ nextMarca }} Turno</p>
        <p class="turn-counter">Jugador {{ turnoF }}</p>
      </div>
      <div v-on:click="reiniciarJuego" v-show="!this.juegoActivo" class="game-end">
        <h3 class="restart-button">Jugar Revancha</h3>
      </div>
    </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  name: 'TableroArriba',
  data: function(){
    return {
      nextMarca: 'X',
      turnoF: '1',
      juegoActivo: true
    }
  },
  created() {
    eventBus.$on('siguienteTurno', (information) =>{
      this.nextMarca = information.nuevaMarca;
      this.turnoF = information.turnoF;
    });
    eventBus.$on('resultadoVictoria', () =>{
      this.juegoActivo = false;
    });
    eventBus.$on('resultadoEmpate', () =>{
      this.juegoActivo = false;
    });
    eventBus.$on('reiniciarJuego', () =>{
      this.nextMarca = 'X';
      this.turnoF = '1';
      this.juegoActivo = true;
    });
  },
  methods:{
    reiniciarJuego: function () {
      eventBus.$emit('reiniciarJuego');
    }
  }
}

</script>

<style>
  .tablero-arriba{
    height: 60px;
    background: rgb(41, 40, 36);
    
  }
  .tablero-arriba p {
    color: white;
    font-weight: bold;
    margin: 0px;
    font-size: 22px;
    line-height: 60px;
    width: 45%;
    height: 100%;
    display: inline-block;
  }
  .turn-indicator{
    text-align: left;
  }
  .turn-counter{
    text-align: right;
  }
  .game-end {
    cursor: pointer;
    height: 100%;
    width: 100%;
    color: white;
    font-weight: bold;
    margin: 0px;
    font-size: 22px;
    line-height: 60px;
  }
</style>