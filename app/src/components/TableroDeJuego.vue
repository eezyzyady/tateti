<template>
    <div class="tablero-de-juego">
      <Celda 
        v-for="(celda, index) in this.rondasTotales" 
        :key="index" 
        v-bind:marca="rondasTotales[index]"
        v-on:celdaClicked="validateField(index)"
      />
    </div>
</template>

<script>
import Celda from './Celda.vue'
import {eventBus} from '../main.js'


const condicionesParaGanar = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8], 
  [0, 4, 8], [2, 4, 6]
]

export default {
  name: 'TableroDeJuego',
  data: function() {
    return {
      rondasTotales: [
        '', '', '',
        '', '', '',
        '', '', '' 
      ],
      xTurno: true,
      juegoMarca: 'x',
      turno: 0, 
      rondaActiva: true
    }
  },
  components: {
    Celda
  },
  methods:{
    validateField: function(index){
      if(this.rondasTotales[index] != '' || !this.rondaActiva){
        return
      }  
      this.addMarca(index);
    },
    addMarca: function(index){
      this.juegoMarca = this.xTurno ? 'X' : 'O';
      this.$set(this.rondasTotales, index, this.juegoMarca);
      
//aca tengo q poner los usuarios para avisar q gano
      if(this.checkVictoria()){
        this.rondaActiva = false;
        eventBus.$emit('resultadoVictoria', {
          ganaMarca: this.juegoMarca,
        });
      } 
      else if (this.checkEmpate()){
        this.rondaActiva = false;
        eventBus.$emit('resultadoEmpate');
      }
      else {
        this.turnoF = !this.turnoF;
        this.xTurno = !this.xTurno;
        this.turno++;
        eventBus.$emit('siguienteTurno', {
          nuevaMarca: this.xTurno ? 'X' : 'O',
          //conecto turnoF con xTurno
          //en el futuro colocar Usuario1 y Usuario2
          turnoF: this.xTurno ? '1' : '2',
        })
      }
    },
    checkVictoria: function(){
      var rondaGanada = false;
      for (let i = 0; i <= 7; i++) {
        const condicionParaGanar = condicionesParaGanar[i];
        let a = this.rondasTotales[condicionParaGanar[0]];
        let b = this.rondasTotales[condicionParaGanar[1]];
        let c = this.rondasTotales[condicionParaGanar[2]];
        if (a === '' || b === '' || c === '') {
          continue;
        }
        if (a === b && b === c) {
          rondaGanada = true;
          break
        }
      }
      return rondaGanada;
    },
    checkEmpate: function(){
      if (this.turno === 8) {
        return true;
      }
    },
  },
  created() {
    eventBus.$on('reiniciarJuego', () =>{
      this.rondasTotales = [
        '', '', '',
        '', '', '',
        '', '', '' 
      ];
      this.xTurno = true;
      this.juegoMarca = 'X';
      this.turno =  0;
      this.rondaActiva = true;
    });
  }
}
</script>

<style>
  .tablero-de-juego{
    display: grid;
    grid-template-columns: auto auto auto;
  }
</style>
