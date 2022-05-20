import { sharedUserFavourites } from "../services/favourite-service"; 

export const FavouritesStore = {
  state: {
    Favourites: [],
    loading: false,
    error: null,
    favourite: null,
  },

  getters: {
    Favourites(state) {
      return state.Favourites;
    },
    loadingFavourite(state) {
      return state.loading;
    },
    errorFavourite(state) {
      return state.error;
    },
    Favourite(state) {
      return state.favourite;
    },
  },

  actions: {
    async loadFavourites(context) {
      context.commit("startLoadingFavourites");

      try {
        let Favourites = [];

        Favourites = await sharedUserFavourites.getUserFavourites();

        context.commit("setFavourites", Favourites);
      } catch (error) {
        context.commit("setLoadingFavouritesError", error);
      }
    },
  },

  mutations: {
    
    startLoadingFavourites(state) {
      state.loading = true;
      state.error = null;
      state.Favourites = [];
    },
    setFavourites(state, Favourites) {
      state.loading = false;
      state.Favourites = Favourites;
    },
    setLoadingFavouritesError(state, error) {
      state.loading = false;
      state.error = error;
    },
    startLoadingfavourite(state) {
      state.favourite = null;
      state.error = null;
      state.loading = true;
    },
    setfavourite(state, favourite) {
      state.favourite = favourite;
      state.loading = false;
    } 
  },
};





