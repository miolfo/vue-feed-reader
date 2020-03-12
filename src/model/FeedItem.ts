import Comment from './Comment'

export default class FeedItem {
  private title: string;
  private id: string;
  private comments: Comment[];

  constructor() {
    this.title = ''
    this.id = ''
    this.comments = []
  }

  public setId(id: string): void {
    this.id = id
  }

  public setTitle(title: string): void {
    this.title = title
  }

  public getId(): string {
    return this.id
  }

  public getTitle(): string {
    return this.title
  }

  public getComments(): Comment[] {
    return this.comments
  }

  public setComments(comments: Comment[]): void {
    this.comments = comments
  }
}
