<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
:root{
  --main-color: #030200;
  --background-color: #eeeeee;
  background-color: var(--background-color);
}

body{
  margin: 0px;
  padding: 0pc;
  margin-top: 0px;
  color: var(--text-color);
  background-color: var(--background-color);
  font-family: var(--text-font);
  font-size: 18px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
