<template>
  <div id="Header">
    <div id="title">
      <router-link :to="{ name: 'home'}">
        <h1>{{name}}</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
import config from '../config'
export default {
  name: 'Header',
  props: {
    name: String
  },
  metaInfo: {
    title: name,
    htmlAttrs: {
      lang: config.language,
      amp: true
    },
    meta: [
      { charset: 'utf-8' }
    ]
  }
}
</script>

<style scoped>

  #Header{
    width: 100%;
    padding: 42px 0px;
  }

  #title {
    color: var(--main-color);
    text-align: center;
    font: 30px "Bipush";
  }
  #title>h1{
    font-size: 38px;
  }
</style>
