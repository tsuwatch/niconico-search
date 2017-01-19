import Base from './Base';

export default class Live extends Base {
  /**
   * Create Live API Client class
   * @param {string} userAgent - your User-Agent
   */
  constructor(userAgent) {
    super({
      service: 'live',
      userAgent: userAgent
    });
  }

  _default_params() {
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
