import FeedDataSource from './FeedDataSource'
import MockDataSource from './MockDataSource'
import FeedItem from '@/model/FeedItem'

export default class FeedItemService {
  private feedDataSource: FeedDataSource

  constructor() {
    this.feedDataSource = new MockDataSource()
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public getFeedItems(start: number, end: number): Promise<FeedItem[]> {
    return this.feedDataSource.getFeedItems(-1, -1)
  }
}
