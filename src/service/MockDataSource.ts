import FeedDataSource from './FeedDataSource'
import FeedItem from '../model/FeedItem'
import Comment from '../model/Comment'

export default class MockDataSource implements FeedDataSource {
  private mockFeedItems: FeedItem[]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getFeedItems(start: number, end: number): Promise<FeedItem[]> {
    return new Promise((resolve) => {
      // Timeout for mock data source to simulate network delay
      setTimeout(() => resolve(this.mockFeedItems), 1000)
    })
  }

  constructor() {
    this.mockFeedItems = []
    for (let i = 0; i < 25; i++) {
      const mockFeedItem = new FeedItem()
      mockFeedItem.setTitle('Mock title that has some text ' + i)
      mockFeedItem.setId(i.toString())
      mockFeedItem.setComments(this.generateCommentsWithSubcomments())
      this.mockFeedItems.push(mockFeedItem)
    }
  }

  private generateCommentsWithSubcomments(): Comment[] {
    const comments: Comment[] = []
    for (let i = 0; i < 25; i++) {
      const mainComment = new Comment()
      mainComment.setId(i.toString())
      mainComment.setContent('Mock comment with some text ' + i)
      const subComments: Comment[] = []
      for (let j = 0; j < Math.floor(Math.random() * 10); j++) {
        const subComment = new Comment()
        subComment.setId(i.toString() + j.toString())
        subComment.setContent('Mock reply with some text ' + j)
        subComments.push(subComment)
      }
      mainComment.setComments(subComments)
      comments.push(mainComment)
    }
    return comments
  }
}
