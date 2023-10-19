import { Movie } from "@/types/Movie";
import getProductionConfig from "@/environment/production";
import { Gender } from "@/types/Gender";
import { mapGenderIdsToGenderName } from "./mapGenderIdsToGenderName";


export const transformToMovie = (movie: Movie, genders: Gender[]) => {
  const { api } = getProductionConfig();
  return {
    ...movie,
    genders: mapGenderIdsToGenderName(movie.genre_ids, genders),
    poster_path: `${api.imageUrl}${movie.poster_path}`,
    backdrop_path: `${api.imageUrl}${movie.backdrop_path}`,
  }
}


export const mapToMovies = (data: Movie[], genders: Gender[]) => data.map((m) => transformToMovie(m, genders));
export const formatToMovie = (movie: Movie, genders: Gender[]) => transformToMovie(movie, genders)