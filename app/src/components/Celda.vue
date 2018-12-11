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
  }
  .celda:nth-child(-n + 3){
    border-top: 0px;
  }
  .celda:nth-last-child(-n + 3){
    border-bottom: none;
  }
  .marca{
      /* background-image: url("https://png.pngtree.com/element_origin_min_pic/16/07/09/165780b7070a8a3.jpg"); */
      background-size: 150%;
      background-repeat: no-repeat;
      font-size: 80px;
      position: absolute;
  }
</style>