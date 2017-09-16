<template>
  <div class="detail">
    <h1>{{res.title}}</h1>
    <div class="movie-info">
    	<div class="right">
			<img :src="res.images.large">
		</div>
    	<div class="left">
		    <div class="rating">
				<div class="starbox" v-if="res && res.rating.average">
					<span class="star" :class="[res.rating.average>=1? 'yellow ': 'gray']"></span>
					<span class="star" :class="[res.rating.average>=3 ? 'yellow ': 'gray']"></span>
					<span class="star" :class="[res.rating.average>=5 ? 'yellow ': 'gray']"></span>
					<span class="star" :class="[res.rating.average>=7 ? 'yellow ': 'gray']"></span>
					<span class="star" :class="[res.rating.average>=9? 'yellow ': 'gray']"></span>
					<span>{{res.rating.average}}</span>
					<span class="font-gray">{{res.ratings_count}}人评价</span>
				</div>
				<div v-else class="norating">暂无评分</div>
			</div>
			<p>{{res.summary}}</p>
		</div>
	</div>
  </div>

</template>
<script>
export default {
  name: 'homepage',
  data () {
    return {
      movieId: this.$route.params.id,
      res: {}
    }
  },
  created () {
    this.get()
  },
  methods: {
    get () {
      this.$http.get('https://bird.ioliu.cn/v1/?url=https://api.douban.com/v2/movie/subject/' + this.movieId).then((res) => { // 箭头函数确保this指向vue实例
        this.res = res.data
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 	.detail{
 		font-size: 1rem;
 		padding:10px;
 		.left{
 			margin-right:150px;
 			padding-right:10px;
 			p{
 				color: #494949;
   				margin-top: 15px;
    			font-size: .9rem;
    			line-height: 1.6;
 			}
 		}
 		.right{
 			float:right;
 			img{
 				width:150px;
 			}
 		}
 		h1{
 			font-size: 1.2rem;
 			font-weight:normal;
 			margin:5px 0;
 		}
 		.rating{
			font-size:1rem;
			.starbox{
				.font-gray{
					font-size:.8rem;
					padding-left:10px;
				}
				span{
					display:inline-block;
					color:#494949;
					font-size:1rem;
				}
				.star{
					display: inline-block;
					margin-right: 1px;
				    background-color: transparent;
				    background-repeat: no-repeat;
				    height: 10px;
					width: 10px;
					background-size: cover;
				}
				.yellow{
					background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==");
				}
				.gray{
					background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=");
				}
			}
			.norating{
				height:13.6px;		
			}
		}
}
</style>

