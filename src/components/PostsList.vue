<template>
  <div id="PostsList">
    <ul id="posts">
      <li v-bind:key="post" v-for="(post) in posts">
        <span>◑</span>
        <router-link :to="{ name: 'post', params: { id: post.id }}">{{post.title}}</router-link>
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
  #PostsList{
    width: 100%;
    padding: 12px 0px;
    min-height: 550px;
  }

  #posts {
    margin: 0 auto;
    max-width: 500px;
    color: var(--main-color);
    background-color: var(--background-color);
    padding: 2%;
  }

  #posts li{
    list-style-type: none;
    margin: 48px 0px 24px 24px;
  }

  #posts li span{
    margin-bottom: 24px;
  }

  #posts a{
    margin-left: 12px;
  }
</style>
