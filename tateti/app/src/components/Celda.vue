<template>
      <div class="celda" @click="$emit('celdaClicked')">
          <span class="marca">{{marca}}</span>
      </div>
</template>

<script>

export default {
  name: 'Celda',
  props: {
      marca: String
  }, 
}
</script>

<style>
  .celda{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    color: white;
    background: indianred;
    cursor: pointer;
    min-height: 130px;
    font-family: 'Gochi Hand', sans-serif;
    padding:15px;
    -webkit-box-shadow: inset 0px 0px 80px #565656;
    -webkit-transition: background-color 0.9s;

  }

  .celda:hover{ 
    background-color: #565656;
    clear:left;
    


  }
  .celda:nth-child(-n + 3){
    border-top: 0px;
    
  }
  .celda:nth-last-child(-n + 3){
    border-bottom: none;
    
  }
  .marca{
      
      background-size: 150%;
      background-repeat: no-repeat;
      font-size: 80px;
      position: absolute;
  }
</style>