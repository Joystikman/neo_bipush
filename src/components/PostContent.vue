<template>
  <div id="PostContent">
    <img v-bind:src="post.thumbnail" alt="image can't load">
    <h2>{{post.title}}</h2>
    <div>{{post.content}}</div>
  </div>
</template>

<script>
export default {
  name: 'PostContent',
  props: {
    post: Object
  }
}
</script>

<style scoped>
  #Description{
    width: 100%;
    padding: 22px 0px;
    background-color: var(--main-color);
    text-align: center;
  }

  #text {
    color: var(--main-color);
    background-color: var(--background-color);
    margin: 2% 20%;
    padding: 2%;
    max-width: 100px;
  }
</style>
