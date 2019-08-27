<template>
  <div id="Description">
    <div id="text">
      {{description}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
    description: String
  }
}
</script>

<style scoped>
  #Description{
    width: 100%;
    padding: 22px 0px;
    background-color: var(--main-color);
  }

  #text {
    color: var(--main-color);
    background-color: var(--background-color);
    margin: 0 auto;
    max-width: 500px;
    padding: 2%;
  }
</style>
