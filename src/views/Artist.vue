<template>
  <div class="edit-artist">
      <warningBlock :message="warningMessage" :show="warning" @closeBlock="closeBlock"></warningBlock>
      <h1>Editing Artist: {{ selectedArtist }}</h1>
      <input type="text" v-model="inputName" placeholder="Artist's Name">
      <input type="text" v-model="inputURL" placeholder="Photo's URL">
      <div class="button-row">
        <button v-on:click="validateFields">Save</button>
        <button><router-link to="/">Back</router-link></button>
      </div>
  </div>
</template>

<script>
import warningBlock from '@/components/warningBlock.vue';

export default {
  name: 'Home',
  components: {
      warningBlock
  },
  data(){
      return{
          selectedArtist: this.$route.params.artistName,
          inputURL: null,
          inputName: this.$route.params.artistName,
          warningMessage: null,
          warning: false
      }
  },
  beforeMount(){
      this.inputURL = this.$store.getters.getArtistByName(this.selectedArtist).imageURL;
  },
  methods: {
      changeArtistData(){
          const updatedData = {
              oldName: this.selectedArtist,
              artistName: this.inputName,
              imageURL: this.inputURL
          }

          this.$store.commit('updateArtistData', updatedData);
      },
      doesArtistExist(){
        const foundArtists = this.$store.getters.artists.find(artist => artist.name == this.inputName);
        /*If the artist's name is getting changed, check if it's already on the list. It might be there if the new name user wants
        to save is the current one artist has, we allow that so it's not a bother */
        return foundArtists != null && foundArtists.name != this.selectedArtist
      },
      validateFields(){
        if(this.inputName != null && /\S/.test(this.inputName)){
            if(this.doesArtistExist()){
                this.warning = true;
                this.warningMessage = 'This artist is already on the list.';
            }else{
                this.changeArtistData();
                this.$router.push({name: "Home"});
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
.edit-artist{
    width: 100%;
    height: 88vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input{
        margin-bottom: 2vh;
    }
    input:last-of-type{
        margin-bottom: 10vh;
    }
}

</style>