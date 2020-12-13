import Component from '@glimmer/component';

export default class MovieList extends Component {
  get hasData() {
    return this.args?.movies?.length > 0;
  }
}
