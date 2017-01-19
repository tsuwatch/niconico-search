# niconico-search

niconico-search is a API client for niconico コンテンツ検索API http://search.nicovideo.jp/docs/api/search.html

## Installation

`npm install --save niconici-search`

## Usage

```javascript
import {Base, Live} from 'niconico-search';

const baseClient = new Base({ service: 'live' });
const liveClient = new Live();

baseClient.search('初音ミク').then(function(response) {
  console.log(response);
});

liveClient.search('顔出し', { targets: 'tagsExact' }).then(function(response) {
  console.log(response);
});
```
