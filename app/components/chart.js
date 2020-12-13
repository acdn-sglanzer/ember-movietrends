import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ChartComponent extends Component {
  @tracked isFiltering = false;
  @tracked filterValue = 0;

  get movieData() {
    if(this.isFiltering) {
      return this.args.movies.filter(movie => movie.vote_average >= this.filterValue);
    }
    return this.args.movies;
  }

  get chartData() {
    return {
      labels: this.movieData.map((movie) => movie.original_title),
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

  @action toggleFilter() {
    this.isFiltering = !this.isFiltering;
  }
}
