import FeedItem from '@/model/FeedItem'

export default interface FeedDataSource {
  getFeedItems(start: number, end: number): Promise<FeedItem[]>;
  getFeedItem(id: string): Promise<FeedItem>;
}
