<template>
  <div class="home">
    <h1>Artist Ranker</h1>
    <warningBlock :message="warningMessage" :show="warning" @closeBlock="closeBlock"></warningBlock>
    <div class="add-artist">
      <input type="text" placeholder="Artist's name" v-model="newArtist">
      <button v-on:click="validateInput">Add</button>
    </div>
    <div class="list-properties-table table-grid">
      <div class="col1"></div>
      <div class="col2"><span class="property-name">Name</span></div>
      <div class="col3"><span class="property-name">Stars</span></div>
      <div class="col4"></div>
    </div>
    <artistListing
        v-for="(artist, index) in $store.getters.artists"
        :key="index"
        :artist="artist"
    ></artistListing>
  </div>
</template>

<script>
import artistListing from '@/components/artistListing.vue';
import warningBlock from '@/components/warningBlock.vue';

export default {
  name: 'Home',
  data(){
    return{
      newArtist: null,
      warning: false,
      warningMessage: null
    }
  },
  components: {
    artistListing,
    warningBlock
  },
  methods: {
    addArtist(){
      this.$store.commit('addArtist', this.newArtist);
    },
    doesArtistExist(){
      return this.$store.getters.artists.find(artist => artist.name == this.newArtist)
    },
    validateInput(){
      if(this.newArtist != null && /\S/.test(this.newArtist)){
        if(this.doesArtistExist()){
          this.warning = true;
          this.warningMessage = 'This artist is already on the list.';
        }else{
          this.addArtist();
        }
      }
      else{
        this.warning = true;
        this.warningMessage = 'This field cannot be empty.';
      }
    },
    closeBlock(){
      this.warning = false;
    }
  }
}
</script>

<style lang="scss">
  input{
    padding: 15px 25px;
    font-size: 1rem;
    border: 1px solid #D8D8D8;
    border-radius: 14px;
  }

  input::placeholder{
    color: #AAAAAA;
  }

  button{
    padding: 15px 20px;
    color: #fff;
    background-color: #44F2C8;
    border-radius: 14px;
    border: none;
    font-size: 1rem;
    transition: background-color 0.3s;
    cursor: pointer;
    a{
      text-decoration: none;
      color: #fff;
    }
  }

  button:hover{
    background-color: #39dab4;
  }

  h1{
    font-size: 2rem;
  }

  .add-artist{
    button{
      margin-left: 1vw;
    }
  }

  .table-grid{
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 3fr 2fr 2fr;
    width: 70%;
  }


  .list-properties-table{
    margin-top: 10vh;
    border-bottom: 1px solid #d3d3d3;
    padding-bottom: 3vh;
  }

  .show{
    display: block;
  }
  .hide{
    display: none;
  }
</style>