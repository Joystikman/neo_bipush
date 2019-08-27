<template>
  <div id="Footer">
    <div id="twitter">
      <a v-bind:href="twitter">
        ◯ Follow me
      </a>
    </div>
    <div id="tagline">powered by swag</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    twitter: String
  }
}
</script>

<style>
  #Footer{
    width: 100%;
    padding: 22px 0px;
    background-color: var(--main-color);
    text-align: center;
    color: var(--background-color);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  #Footer a {
    color: var(--background-color);
  }

  #twitter{
    width: 15%;
  }

  #tagline{
    margin-left: 15%;
  }
</style>
