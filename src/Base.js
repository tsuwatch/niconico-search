import axios from 'axios';

export default class Base {
  /**
   * Create API Client class
   * @param {Object} params
   * @param {string} params.service - target service
   * @param {string} params.userAgent - your User-Agent
   */
  constructor(params) {
    this.service = params.service;
    this.userAgent = params.userAgent || 'niconico-search';
    this.client = axios.create({
      baseURL: 'http://api.search.nicovideo.jp'
    });
  }

  /**
   * Request
   * @see http://search.nicovideo.jp/docs/api/search.html
   * @param {string} search - search word
   * @param {Object} params - other queries
   * @return {Promise.<Object, Error>}
   */
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
