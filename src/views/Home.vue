<template>
  <div v-if="loaded" class="home">
    <Header v-bind:name="name"/>
    <PostsList v-bind:posts="posts"/>
    <Description v-bind:description="description"/>
    <Footer v-bind:twitter="twitter"/>
  </div>
  <div id="loading" v-else>
    Loading...
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import PostsList from '@/components/PostsList.vue'
import Description from '@/components/Description.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
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
      loaded: false,
      name: 'name',
      description: 'description',
      url: 'url',
      twitter: 'twitter',
      posts: []
    }
  },
  methods: {
    setBlogData: function (data) {
      console.log(data)
      data = data[0]
      this.name = data.name
      this.$store.commit('setName', data.name)
      this.description = data.description
      this.$store.commit('setDescription', data.description)
      this.url = data.url
      this.$store.commit('setUrl', data.url)
      this.twitter = data.twitter
      this.$store.commit('setTwitter', data.twitter)
      this.$store.commit('retrieved')
      this.loaded = true
    },
    setPosts: function (data) {
      console.log(data)
      let published = data.filter(post => post.published === 'yes')
      console.log(published)
      this.posts = published
      this.$store.commit('setPosts', published)
      this.$store.commit('retrieved')
      this.loaded = true
    }
  },
  mounted () {
    if (this.$store.getters.isRetrieved) {
      this.loaded = true
      this.name = this.$store.getters.name
      this.description = this.$store.getters.description
      this.url = this.$store.getters.url
      this.twitter = this.$store.getters.twitter
      this.posts = this.$store.getters.posts
    } else {
    // retrieve blog data
      axios
        .get(config.blog_endpoint)
        .then(response => this.setBlogData(response.data))
        .catch(error => console.log(error))
      // retrieve posts
      axios
        .get(config.posts_endpoint)
        .then(response => this.setPosts(response.data))
        .catch(error => console.log(error))
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
