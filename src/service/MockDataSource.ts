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

  getFeedItem(id: string): Promise<FeedItem> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.mockFeedItems.find((item) => item.getId() === id))
      }, 1500)
    })
  }

  constructor() {
    this.mockFeedItems = []
    for (let i = 0; i < 25; i++) {
      const mockFeedItem = new FeedItem()
      mockFeedItem.setTitle('Mock title that has some text ' + i)
      mockFeedItem.setId(i.toString())
      mockFeedItem.setComments(this.generateCommentsWithSubcomments())
      mockFeedItem.setDate(this.getRandomDate(1440))
      this.mockFeedItems.push(mockFeedItem)
    }
  }

  private getRandomDate(maxMinutesAgo: number): Date {
    const minutesAgo = Math.floor(Math.random() * maxMinutesAgo)
    return new Date(new Date().getTime() - (minutesAgo * 60000))
  }

  private generateCommentsWithSubcomments(): Comment[] {
    const comments: Comment[] = []
    let runningId = 0
    for (let i = 0; i < 25; i++) {
      const mainComment = new Comment()
      runningId++
      mainComment.setId(runningId.toString())
      mainComment.setContent('Mock comment with some text ' + i)
      mainComment.setDate(this.getRandomDate(1440))
      const subComments: Comment[] = []
      for (let j = 0; j < Math.floor(Math.random() * 10) + 1; j++) {
        const subComment = new Comment()
        runningId++
        subComment.setId(runningId.toString())
        subComment.setContent('Mock reply with some text ' + j)
        subComment.setDate(this.getRandomDate(1440))
        subComments.push(subComment)
      }
      mainComment.setComments(subComments)
      comments.push(mainComment)
    }
    return comments
  }
}
