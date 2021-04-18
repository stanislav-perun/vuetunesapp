<template>
  <div id="app">
    <div id="nav">
      <router-link tag="button" to="/"> <a href=""> Home</a> </router-link> |
      <router-link tag="button" to="/about">
        <a href=""> About</a>
      </router-link>
      <router-link tag="button" to="/ghibli">
        <a href=""> Ghibli </a>
      </router-link>
      |
      <router-link tag="button" to="/tunes">
        <a href=""> Tunes</a>
      </router-link>
    </div>
    <router-view />
  </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
