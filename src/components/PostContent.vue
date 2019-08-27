<template>
  <div id="PostContent">
    <div id="thumbnail" :style="{ backgroundImage: 'url(' + post.thumbnail + ')' }"></div>
    <h2 id="title">{{post.title}}</h2>
    <div id="content">
      ◔ <div id="text" v-html="post.content"></div>◐
      <router-link :to="{ name: 'home'}">
      ← home 
      </router-link>
    </div>
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
  #PostContent{
    width: 100%;
    min-height: 700px;
  }

  #thumbnail{
    width: 100%;
    height: 50px;
    background-position: center;
    background-size: cover;
  }

  #title{
    font-size: 32px;
    text-align: center;
    margin: 42px 0px;
    font-family: 'Merriweather', serif;
  }

  #content{
    margin: 1% 30%;
    line-height: 200%;
  }

  #text{
    margin: 24px;
  }

  @media screen and (max-width:800px){
    #content{
    margin: 1% 5%;
    line-height: 200%;
  }
  }

</style>
