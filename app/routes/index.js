import Route from '@ember/routing/route';
import ENV from 'movietrends/config/environment';

export default class IndexRoute extends Route {
  get hasData() {
    return this.model && this.model?.length > 0;
  }
  async model() {
    let movies = [];
    try {
      const response = await fetch(`${ENV.THEMOVIEDB_BASE_API_URL}/trending/movie/day?api_key=${ENV.THEMOVIEDB_API_KEY}`);
      const data = await response.json();
      movies = data.results;
    } catch(error) {
      console.error(error);
    }
    return movies;
  }
}
