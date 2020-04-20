import Comment from './Comment'
import Content from './Content'

export default class FeedItem {
  private title: string;
  private content: Content;
  private id: string;
  private comments: Comment[];
  private date: Date;

  constructor() {
    this.title = ''
    this.id = ''
    this.comments = []
    this.content = Content.Empty()
    this.date = new Date(0)
  }

  public setId(id: string): void {
    this.id = id
  }

  public setTitle(title: string): void {
    this.title = title
  }

  public setDate(date: Date): void {
    this.date = date
  }

  public getId(): string {
    return this.id
  }

  public getTitle(): string {
    return this.title
  }

  public getDate(): Date {
    return this.date
  }

  public getComments(): Comment[] {
    return this.comments
  }

  public getContent(): Content {
    return this.content
  }

  public setContent(content: Content) {
    this.content = content
  }

  public setComments(comments: Comment[]): void {
    this.comments = comments
  }
}
