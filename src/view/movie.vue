<template>
  <div class="movie">
    <my-section title="影院热映" dataApi="https://api.douban.com/v2/movie/in_theaters"></my-section>
    <my-section title="top250" dataApi="https://api.douban.com/v2/movie/top250"></my-section>
    <my-section title="即将上映" dataApi="https://api.douban.com/v2/movie/coming_soon"></my-section>
  </div>
</template>

<script>
import mySection from '../components/section'
export default {
  name: 'movie',
  data () {
    return {
      msg: '电影'
    }
  },
  components: { mySection }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 	.movie{
 		border-top: 1px solid #f3f3f3;
 	}
</style>

