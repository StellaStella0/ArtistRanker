import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      artists: [
        {
          name: 'Blackpink',
          stars: 2,
          imageURL: null
        },
        {
          name: 'Twice',
          stars: 2,
          imageURL: null
        }
      ]
    },
    mutations: {
      addArtist(state, newArtist) {
        state.artists.push({
          name: newArtist,
          stars: 1
        });
      },
      changeRating(state, info){
        state.artists.find(artist => artist.name === info.artistName).stars += info.ratingChange;
        // Sort the artist aray to rank them from the most to least stars
        state.artists.sort(function(a, b) { 
          return b.stars - a.stars;
        });
      },
      updateArtistData(state, updatedData){
        const updatedArtist = state.artists.find(artist => artist.name === updatedData.oldName);
        Vue.set(updatedArtist, 'name', updatedData.artistName)
        Vue.set(updatedArtist, 'imageURL', updatedData.imageURL)
      }
    },
    getters: {
      artists: state => state.artists,
      getArtistByName: (state) => (name) => {
        return state.artists.find(artist => artist.name === name)
      }
    }
})