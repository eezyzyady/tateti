<template>
  <div id="app">
    <div id="nav">     
      <router-link to="/">Home</router-link> |
      <router-link to="/ranking">Ranking</router-link> |
         <router-link class="btn btn-danger" :to="{name: 'usuarios'}">Comenzar !</router-link>
    </div>
    <router-view/>
     <div class="footer">
     <h1>Derechos de autor @eezyzyady<a class="instagram" href="https://www.instagram.com/eezyzyady" target="_blank">
    <img src="./assets/instagram.png" border="0">
    </a> </h1>
   </div>
   </div>
  
 
</template>

<script>


export default {
       
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  background-image: url("https://i.imgur.com/vMID1xY.jpg");
  background-size: 100%;
  height: 100%;
  

}

.footer{
  opacity: 0.12;
}
.footer {
  height: 10vh;
  bottom:100%;
  margin-top: 90vh;
  background-color:azure;
}

#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.instagram {
  height: 1px;
  line-height: 1px;

}
</style>
