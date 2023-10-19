import fetcher from "@/utils/fetcher";
import { AxiosError } from "axios";
import endpoints from "./endpoints";
import { Movie, MovieReponse } from "@/types/Movie";
import { Gender, GenderResponse } from "@/types/Gender"


type MovieService = {
  getTrendingMovies: () => Promise<Movie[]>;
  getMovieById: (movieId: number) => Promise<Movie>;
  getMovieGender: () => Promise<Gender[]>;
  getMoviesByGenderId: (genderId: number, page: number) => Promise<Movie[]>;
}

export const moviesService: MovieService = {
  getTrendingMovies: async (): Promise<Movie[]> => {
    try {
      const response = await fetcher.get<MovieReponse>(`${endpoints.trending}`);
      const { data } = response;
      return data.results;
    } catch (error) {
      throw (error as AxiosError).message;
    }
  },
  getMovieById: async (movieId: number): Promise<Movie> => {
    try {
      const response = await fetcher.get<Movie>(`${endpoints.movie}/${movieId}`);
      const { data } = response;
      return data;
    } catch (error) {
      throw (error as AxiosError).message;
    }
  },
  getMovieGender: async (): Promise<Gender[]> => {
    try {
      const response = await fetcher.get<GenderResponse>(`${endpoints.gender}`);
      const { data } = response;
      return data.genres;
    } catch (error) {
      throw (error as AxiosError).message;
    }
  },

  getMoviesByGenderId: async (genderId: number, page: number): Promise<Movie[]> => {
    try {
      const response = await fetcher.get<MovieReponse>(`${endpoints.discover}?language=en_US&page=${page}&with_genres=${genderId}`);
      const { data } = response;
      return data.results;
    } catch (error) {
      throw (error as AxiosError).message;
    }
  }

}