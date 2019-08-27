<template>
  <div v-if="loaded" class="post">
    <Header v-bind:name="name"/>
    <PostContent v-bind:post="post"/>
    <Footer v-bind:twitter ="twitter"/>
  </div>
  <div id="loading" v-else>
    Loading...
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import PostContent from '@/components/PostContent.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
import config from '../config'
import { constants } from 'crypto';

export default {
  name: 'Post',
  components: {
    Header,
    PostContent,
    Footer
  },
  data () {
    return {
      loaded: false,
      name:'',
      url: 'url',
      twitter: 'twitter',
      id: '',
      post: {
        title: 'Titre',
        content: 'contenu',
        thumbnail: 'no image'
      }
    }
  },
  methods:{
    setBlogData:function(data){
      data = data[0];
      this.name = data.name;
      this.$store.commit('setName',data.name);
      this.$store.commit('setDescription',data.description);
      this.url = data.url;
      this.$store.commit('setUrl',data.url);
      this.twitter = data.twitter;
      this.$store.commit('setTwitter',data.twitter);
      this.$store.commit('retrieved');
      this.loaded = true;
    },
    setPosts:function(data){
      console.log('setPost');
      let published = data.filter(post => post.published === "yes");
      this.posts = published;
      this.$store.commit('setPosts',published);
      this.$store.commit('retrieved');
      console.log('id :'+this.id);
      published.forEach(p=>console.log(p.id));
      this.post = published.find(p => p.id == this.id);
      console.log(this.post);
      this.loaded = true;
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    if(this.$store.getters.isRetrieved){
      this.loaded = true;
      this.name = this.$store.getters.name
      this.url = this.$store.getters.url;
      this.twitter = this.$store.getters.twitter;
      this.post = this.$store.getters.getPostById(this.id);
    }else
    {
      //retrieve blog data
      axios
      .get(config.blog_endpoint)
      .then(response => this.setBlogData(response.data))
      .catch(error => console.log(error));
      //retrieve posts
      axios
      .get(config.posts_endpoint)
      .then(response => this.setPosts(response.data))
      .catch(error => console.log(error));
      }
  }
}
</script>

<style>
  #loading{
    margin : 25% auto;
    max-width: 100px;
  }
</style>
