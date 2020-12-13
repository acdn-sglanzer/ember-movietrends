import Component from '@glimmer/component';

export default class ChartComponent extends Component {
  get chartData() {
    return {
      labels: this.args.movies.map((movie) => movie.original_title),
      datasets: [
        {
          label: 'Score',
          fillColor: 'rgba(220,220,220,0.5)',
          strokeColor: 'rgba(220,220,220,0.8)',
          highlightFill: 'rgba(220,220,220,0.75)',
          highlightStroke: 'rgba(220,220,220,1)',
          data: this.args.movies.map((movie) => movie.vote_average),
        },
        {
          label: 'Vote Count',
          fillColor: 'rgba(220,220,220,0.5)',
          strokeColor: 'rgba(220,220,220,0.8)',
          highlightFill: 'rgba(220,220,220,0.75)',
          highlightStroke: 'rgba(220,220,220,1)',
          data: this.args.movies.map((movie) => movie.vote_count),
        }
      ],
    };
  }
}
