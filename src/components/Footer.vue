<template>
  <div id="Footer">
    <div id="twitter">
      <a v-bind:href="twitter">
        <h3>follow me</h3>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    twitter: String
  }
}
</script>

<style scoped>
  #Footer{
    width: 100%;
    padding: 22px 0px;
    background-color: var(--main-color);
    text-align: center;
  }

  #twitter {
    color: var(--main-color);
    background-color: var(--background-color);
    padding: 2px;
    border-radius: 25%;
    max-width: 100px;
  }
  #twitter>h3{
    font-size: 38px;
  }
</style>
