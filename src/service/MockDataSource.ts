import FeedDataSource from './FeedDataSource'
import FeedItem from '../model/FeedItem'
import Comment from '../model/Comment'
import LoremIpsumUtil from '@/util/LoremIpsumUtil'
import Content from '@/model/Content'
import { FeedContentType } from '@/model/FeedContentType'

export default class MockDataSource implements FeedDataSource {
  private mockFeedItems: FeedItem[]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getFeedItems(start: number, end: number): Promise<FeedItem[]> {
    return new Promise((resolve) => {
      // Timeout for mock data source to simulate network delay
      setTimeout(() => {
        const items = this.mockFeedItems.slice(start, end)
        resolve(items)
      }, 1000)
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
    const loremIpsumUtil = new LoremIpsumUtil()
    for (let i = 0; i < 100; i++) {
      const mockFeedItem = new FeedItem()
      mockFeedItem.setTitle(loremIpsumUtil.getRandomSentence(Math.floor(Math.random() * 20) + 7))
      mockFeedItem.setId(i.toString())
      mockFeedItem.setComments(this.generateCommentsWithSubcomments())
      mockFeedItem.setDate(this.getRandomDate(1440))
      mockFeedItem.setContent(this.getRandomContent())
      this.mockFeedItems.push(mockFeedItem)
    }
  }

  private getRandomContent(): Content {
    const loremIpsumUtil = new LoremIpsumUtil()
    const content = new Content(FeedContentType.TEXT)
    content.setTextContent(loremIpsumUtil.getRandomSentence(Math.floor(Math.random() * 100) + 50))
    return content
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
