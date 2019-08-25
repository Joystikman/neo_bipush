<template>
  <div id="PostsList">
    Articles :
    <ul id="posts">
      <li v-bind:key="post" v-for="(post) in posts">
        <router-link :to="{ name: 'post', params: { id: post.id }}">
          {{post.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostsList',
  props: {
    posts: Object
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
