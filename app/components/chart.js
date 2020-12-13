import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

const maxTitleLength = 15;
export default class ChartComponent extends Component {
  @tracked filteringEnabled = false;
  @tracked filterAscending = true;
  @tracked filterMinimumScore = 0;

  get movieData() {
    let movies = this.args.movies ?? [];
    if(this.filteringEnabled) {
      movies = movies.filter(movie => movie.vote_average >= this.filterMinimumScore);
    }
    movies.sort((a, b) => this.filterAscending ? a.vote_average - b.vote_average : b.vote_average - a.vote_average);
    return movies;
  }

  get chartData() {
    return {
      labels: this.movieData.map((movie) => this.formatMovieTitle(movie.original_title, maxTitleLength)),
      datasets: [
        {
          label: 'Score',
          data: this.movieData.map((movie) => movie.vote_average),
        }
      ],
    };
  }

  get chartOptions() {
    return {
      responsive: true
    };
  }

  formatMovieTitle(title, maxLength) {
    if(title && title?.length > maxLength) {
      return `${title.substring(0, maxLength)}...`;
    }
    return title ?? '';
  }
}
