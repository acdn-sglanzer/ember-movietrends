import Route from '@ember/routing/route';
import ENV from 'movietrends/config/environment';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch(`${ENV.THEMOVIEDB_BASE_API_URL}/trending/movie/day?api_key=${ENV.THEMOVIEDB_API_KEY}`);
    const data = await response.json();
    console.dir(data.results);
    return data.results;
  }
}
