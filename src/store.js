import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'name',
    description: 'description',
    url: '/',
    twitter: '/',
    postsLink: '/',
    posts: null,
    retrieved: false
  },
  mutations: {
    setName (state, name) {
      state.name = name
    },
    setDescription (state, description) {
      state.description = description
    },
    setUrl (state, url) {
      state.url = url
    },
    setTwitter (state, twitter) {
      state.twitter = twitter
    },
    setPostsLink (state, postsLink) {
      state.postsLink = postsLink
    },
    setPosts (state, posts) {
      state.posts = posts
    },
    retrieved (state) {
      state.retrieved = true
    }
  },
  actions: {

  },
  getters: {
    getPostById: (state) => (id) => {
      return state.posts.find(post => post.id === id)
    },
    posts: state => {
      return state.posts
    },
    isRetrieved: state => {
      return state.retrieved
    },
    name: state => {
      return state.name
    },
    description: state => {
      return state.description
    },
    url: state => {
      return state.url
    },
    twitter: state => {
      return state.twitter
    }
  }
})
