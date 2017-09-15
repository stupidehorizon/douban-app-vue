<template>
  <div class="movie">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'movie',
  data () {
    return {
      msg: '电影'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 	.homepage{
 		font-size: 1rem;
 	}
</style>

