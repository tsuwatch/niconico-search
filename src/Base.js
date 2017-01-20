import axios from 'axios';

export default class Base {
  /**
   * create API Client class
   * @param {string} service target service
   * @param {string} userAgent your User-Agent
   * @public
   */
  constructor({ service, userAgent }) {
    this.service = service;
    this.userAgent = userAgent || 'niconico-search';
    this.client = axios.create({
      baseURL: 'http://api.search.nicovideo.jp'
    });
  }

  /**
   * request
   * @see http://search.nicovideo.jp/docs/api/search.html
   * @param {string} search search word
   * @param {Object} params other queries
   * @public
   * @return {Promise.<Object, Error>}
   */
  search(search, params = {}) {
    const queryHash = Object.assign(
      { q: search, _context: this.userAgent },
      this._defaultParams(),
      params
    );
    return this.client.get(`/api/v2/${this.service}/contents/search`, { params: queryHash });
  }

  /**
   * default parameters
   * @return {Object} default parameters
   * @private
   */
  _defaultParams() {
    return {
      targets: 'title',
      fields: 'contentId',
      _sort: '-startTime'
    };
  }
}
