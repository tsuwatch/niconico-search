import axios from 'axios';

export default class Base {
  constructor(service, userAgent = 'niconico-search') {
    this.service = service;
    this.userAgent = userAgent;
    this.client = axios.create({
      baseURL: 'http://api.search.nicovideo.jp',
      headers: { 'User-Agent': this.userAgent }
    });
  }

  search(search, params = {}) {
    const queryHash = Object.assign(
      { q: search, _context: this.userAgent },
      this._default_params(),
      params
    );
    return this.client.get(`/api/v2/${this.service}/contents/search`, { params: queryHash });
  }

  _default_params() {
    return {
      targets: 'title',
      fields: 'contentId',
      _sort: '-startTime'
    };
  }
}
