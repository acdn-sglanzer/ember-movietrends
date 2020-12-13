import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ENV from 'movietrends/config/environment';

export default class RentalsComponent extends Component {
  @tracked isExpanded = false;

  get imageSource() {
    return `${ENV.THEMOVIEDB_BASE_IMAGE_URL}/${this.args.size ?? 'original'}${this.args.movie.poster_path}?api_key=${ENV.THEMOVIEDB_API_KEY}`;
  }

  @action toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
