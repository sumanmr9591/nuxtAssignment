<template>
  <div class="container">
    <div>
      <Header />
      <Landing />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Landing from '~/components/Landing.vue';
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Header,
    Landing,
    Footer
  }
}
</script>

<style>


.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
