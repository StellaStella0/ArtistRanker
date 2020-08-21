<template>
  <div class="artist-listing table-grid">
    <div class="artist-img" v-bind:style="{ backgroundImage: 'url(' + imageURL + ')' }"></div>
    <router-link :to="`/Artist/${artist.name}`"><h2>{{ artist.name }}</h2></router-link>
    <span class="star"><img src="star.svg" alt="star" class="star-img"> {{ artist.stars }}</span>
    <div class="button-row">
      <button v-on:click="changeRating(artist.name, 1)"><img src="plus.svg" alt="plus"></button>
      <button v-on:click="changeRating(artist.name, -1)"><img src="minus.svg" alt="minus"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'artistListing',
  props: ['artist'],
  data(){
    return{
      imageURL: this.artist.imageURL || 'noimage.png'
    }
  },
  methods: {
    changeRating(artist, number){
      let newinfo = {
        artistName: artist,
        ratingChange: number
      }
      this.$store.commit('changeRating', newinfo);
    }
  }
}
</script>

<style scoped lang="scss">
.artist-img{
  width: 70px;
  height: 70px;
  background-size: cover;
  background-position: center;
  border-radius: 100vw;
  border: 3px solid #ffffff;
  transition: border 0.3s;
}

.artist-listing{
  border-bottom: 1px solid #d3d3d3;
  padding: 3vh 0;
}

.artist-listing:hover{
  h2{
    color: #44F2C8;
  }
  .artist-img{
    border: 3px solid #44F2C8;
  }
}

.star{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.1rem;
}
.star-img{
  height: 25px;
  margin-right: 8px;
}

a{
  text-decoration: none;
  color: #303030;
}
</style>
