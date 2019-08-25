import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'name',
    description: 'description',
    url: '/',
    twitter: '/',
    postsLink:'/',
    posts: null
  },
  mutations: {
    setName (state, name){
      state.name = name;
    },
    setDescription (state, description){
      state.description = description;
    },
    setUrl (state, url){
      state.url = url;
    },
    setTwitter (state, twitter){
      state.twitter = twitter;
    },
    setPostsLink (state, postsLink){
      state.postsLink = postsLink;
    },
    setPosts (state, posts){
      state.posts = posts;
    }
  },
  actions: {

  },
  getters: {
    getPostById: (state) => (id) => {
      return state.posts.find(post => post.id === id)
    }
  }
})
