import Base from './Base';

export default class Live extends Base {
  constructor(userAgent) {
    super('live', userAgent);
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
