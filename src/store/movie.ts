import { Gender } from '@/types/Gender';
import { LikedMovie, Movie } from '@/types/Movie';
import { moviesService } from '@/services/movies';
import { formatToMovie, mapToMovies } from '@/utils/mapToMovies';
import { defineStore } from 'pinia'
import constants from '@/constants/constants';

interface State {
  isLoading: boolean;
  trendingMovies: Movie[];
  movieDetails: Movie | null;
  moviesByGender: Movie[];
  gender: Gender[];
  likedMovies: LikedMovie[];
}

export const useMovieStore = defineStore("movieStore", {
  state: (): State => ({
    isLoading: false,
    trendingMovies: [],
    movieDetails: null,
    gender: [],
    moviesByGender: [],
    likedMovies: []
  }),

  getters: {
    getIsLoading(state) {
      return state.isLoading
    },
    getTrendingMovies(state) {
      return state.trendingMovies
    },
    getMovieDetailsById(state) {
      return state.movieDetails
    },
    getGenderOfMovies(state) {
      return state.gender
    },
    getMoviesByGender(state) {
      return (genderId: number) => {
        return state.moviesByGender.filter(movie => movie.genre_ids.includes(genderId.toString()))
      }
    },
    getLikedMovies(state) {
      return state.likedMovies
    }
  },
  actions: {
    async fetchTrendingMovies() {
      try {
        this.isLoading = true
        const data = await moviesService.getTrendingMovies();
        this.trendingMovies = mapToMovies(data, this.gender);
      }
      catch (error) {
        alert(error)
      }
    },
    async fetchGenderOfMovies() {
      try {
        this.isLoading = true

        const data = await moviesService.getMovieGender();
        this.gender = data
      }
      catch (error) {
        alert(error)
      }
    },
    async fetchMovieById(movieId: number) {
      try {
        this.isLoading = true
        this.fetchGenderOfMovies();
        const data = await moviesService.getMovieById(movieId);
        this.movieDetails = formatToMovie(data, this.gender);
        this.isLoading = false
      }
      catch (error) {
        alert(error)
        this.isLoading = false
      }
    },

    async resetMoviesByGender(genderId: number, page: number) {
      this.moviesByGender = [];
      try {
        this.isLoading = true
        const data = await moviesService.getMoviesByGenderId(genderId, page);
        const movies = mapToMovies(data, this.gender);
        this.moviesByGender = movies
        this.isLoading = false
      } catch (error) {
        alert(error)
        this.isLoading = false
      }
    },
    async fetchMoviesByGender(genderId: number, page: number) {
      try {
        this.isLoading = true
        const data = await moviesService.getMoviesByGenderId(genderId, page);
        const movies = mapToMovies(data, this.gender);
        if (page === 1) {
          this.moviesByGender = movies
        } else if (constants.MAX_ITEMS >= this.moviesByGender.length) {
          this.moviesByGender = [...this.moviesByGender, ...movies]
          if (this.moviesByGender.length > 0) {
            this.isLoading = false
          }
        }
      } catch (error) {
        alert(error)
        this.isLoading = false
      }
    },
    onLike(movie: Movie) {
      const index = this.likedMovies.findIndex(m => m.id === movie.id)
      if (index === -1) {
        this.likedMovies.push({ ...movie, liked: true })
      }
    },
    onDislike(movie: Movie) {
      this.likedMovies = this.likedMovies.filter(m => m.id !== movie.id)
    }
  }
})