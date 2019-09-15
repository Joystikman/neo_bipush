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
@font-face {
    font-family: 'Bipush';
    src: url('assets/Bipush.ttf');
  }
@import url('https://fonts.googleapis.com/css?family=Inconsolata|Merriweather:700&display=swap');
:root{
  --main-color: #080600;
  --second-color: #080600b9;
  --fade-color : #a8a8a8;
  --background-color: #ffffff;
  --text-font: 'Inconsolata';
  background-color: var(--background-color);
  color: var(--main-color);
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

a{
  text-decoration: none;
  color: var(--main-color);
}

a:hover{
  animation-duration: 3s;
  animation-name: slidein;
  color: var(--second-color);
}

</style>
