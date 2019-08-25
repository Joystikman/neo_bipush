<template>
  <div class="home">
    <Header name="Bipush"/>
    <PostsList v-bind:posts="posts"/>
    <Description description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellendus doloremque fugit ea ipsa exercitationem, excepturi vero sint, alias, distinctio recusandae? Ea nemo non eaque tenetur, culpa quis repellat quia."/>
    <Footer twitter="https://twitter.com/joystikman"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import PostsList from '@/components/PostsList.vue'
import Description from '@/components/Description.vue'
import Footer from '@/components/Footer.vue'

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
      posts: [
        { title: 'Article 1' },
        { title: 'Article 2' }
      ]
    }
  },
  mounted() {
    console.log('Mounted home');
    this.$store.commit('setName','Bipush');
  }
}
</script>
