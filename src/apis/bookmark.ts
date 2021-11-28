import httpService from '../utils/request'

interface BookmarksData {
  code: string,
  msg: string,
  list: Array<Bookmark>
}

export interface Bookmark {
  fields: {label: string, url: string},
  model: string,
  pk: number
}

export function getBookmark () {
  return httpService.get<BookmarksData>('http://39.107.87.150:8000/note/list_note')
}
