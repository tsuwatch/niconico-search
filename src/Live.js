import Base from './Base';

export default class Live extends Base {
  /**
   * create Live API Client class
   * @param {string} userAgent your User-Agent
   * @public
   */
  constructor(userAgent) {
    super({
      userAgent,
      service: 'live'
    });
  }

  /**
   * default parameters
   * @override
   * @private
   * @return {Object} default parameters
   */
  _defaultParams() {
    return {
      targets: 'title,description,tags',
      fields: [
        'contentId',
        'title',
        'description',
        'tags',
        'categoryTags',
        'viewCounter',
        'commentCounter',
        'startTime',
        'thumbnailUrl',
        'communityIcon',
        'scoreTimeshiftReserved',
        'liveStatus'
      ].join(','),
      _sort: '-startTime'
    };
  }
}
