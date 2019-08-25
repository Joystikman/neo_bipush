<template>
  <div id="Header">
    <div id="title">
      <a href="/">
        <h1>{{name}}</h1>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    name: String
  }
}
</script>

<style scoped>
  #Header{
    width: 100%;
    padding: 22px 0px;
  }

  #title {
    color: var(--main-color);
  }
  #title>h1{
    font-size: 38px;
  }
</style>
