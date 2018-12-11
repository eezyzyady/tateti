<template>
    <div class="tablero-abajo">
    <div class="tablero-abajo-empate"> <h3 v-show="this.juegoEmpatado" class="mensaje-final">Ronda termino en empate!</h3></div>
    <div class="tablero-abajo-gana"> <h3 v-show="this.xGano" class="mensaje-final">X gana esta ronda</h3>
      <h3 v-show="this.oGano" class="mensaje-final">O gana esta ronda</h3></div>
    </div>
</template>

<script>
import {eventBus} from '../main.js'
import usuario1 from '../views/usuarios/usuario1'
//con esto poner alla arriba donde esta x gana esta ronda {{usuario.nombre}}

export default {
  name: 'TableroAbajo',
  data: function(){
    return{
      juegoEmpatado: false,
      xGano: false,
      oGano: false
    }
  },
  created() {
    eventBus.$on('resultadoEmpate', () => {
      this.juegoEmpatado = true;
    });
    eventBus.$on('resultadoVictoria', (information) => {
      if (information.ganaMarca === 'X') {
        this.xGano = true;
      } else {
        this.oGano = true;
      }
    });
    eventBus.$on('reiniciarJuego', () => {
     this.juegoEmpatado = false;
     this.xGano = false;
     this.oGano = false;
    });
  }
}
</script>

<style>
  .tablero-abajo{
    height: 60px;
    background: rgb(41, 40, 36);
  }
  .mensaje-final{
    margin: 0px;
    line-height: 60px;
  }

  .tablero-abajo-empate{
      color:beige;
  }

  .tablero-abajo-gana{
      color:aquamarine;
  }
</style>