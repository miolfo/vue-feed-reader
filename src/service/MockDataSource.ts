import FeedDataSource from './FeedDataSource'
import FeedItem from '../model/FeedItem'

export default class MockDataSource implements FeedDataSource {
  private mockFeedItems: FeedItem[]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getFeedItems(start: number, end: number): Promise<FeedItem[]> {
    return new Promise((resolve) => {
      resolve(this.mockFeedItems)
    })
  }

  constructor() {
    this.mockFeedItems = []
    for (let i = 0; i < 25; i++) {
      const mockFeedItem = new FeedItem()
      mockFeedItem.setTitle('Mock title that has some text ' + i)
      this.mockFeedItems.push(mockFeedItem)
    }
  }
}
