<template>
  <div class="home">
    <Header v-bind:name="name"/>
    <PostsList v-bind:posts="posts"/>
    <Description v-bind:description="description"/>
    <Footer v-bind:twitter="twitter"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import PostsList from '@/components/PostsList.vue'
import Description from '@/components/Description.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios';
import config from '../config'

export default {
  name: 'Home',
  components: {
    Header,
    PostsList,
    Description,
    Footer
  },
  data () {
    return {
      name: 'name',
      description: 'description',
      url: 'url',
      twitter: 'twitter',
      posts: []
    }
  },
  methods:{
    setBlogData:function(data){
      console.log(data);
      data = data[0];
      this.name = data.name;
      this.$store.commit('setName',data.name);
      this.description = data.description;
      this.$store.commit('setDescription',data.description);
      this.url = data.url;
      this.$store.commit('setUrl',data.url);
      this.twitter = data.twitter;
      this.$store.commit('setTwitter',data.twitter);
    },
    setPosts:function(data){
      console.log(data);
      this.posts = data;
      this.$store.commit('setPosts',data);
    }
  },
  mounted() {
    console.log('Mounted home');
    console.log('blog_endpoint : '+config.blog_endpoint);
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
</script>
