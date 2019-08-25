<template>
  <div class="post">
    <Header name="Bipush"/>
    <PostContent v-bind:post="post"/>
    <Footer twitter="https://twitter.com/joystikman"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import PostContent from '@/components/PostContent.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Post',
  components: {
    Header,
    PostContent,
    Footer
  },
  data () {
    return {
      post: {
        title: 'Titre',
        content: 'contenu',
        thumbnail: 'no image'
      }
    }
  }
}
</script>
