export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: string[];
  genders: string[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type LikedMovie = Movie & { liked: boolean };


export type MovieReponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}