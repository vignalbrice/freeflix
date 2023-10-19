import homeVue from "@/pages/Home.vue";
import moviesLiked from "@/pages/MoviesLiked.vue";
import movieGenders from "@/pages/MoviesByGenders.vue";


export enum Routes {
  Home = "/",
  MoviesLiked = "/movies-liked",
  MoviesByGenders = "/movies-by-gender"
}


const routes = [
  { path: Routes.Home, component: homeVue },
  { path: Routes.MoviesLiked, component: moviesLiked },
  { path: Routes.MoviesByGenders, component: movieGenders }
]


export default routes;