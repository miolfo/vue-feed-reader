export default class Comment {
  private content: string;
  private id: string;
  private comments: Comment[];
  private date: Date

  constructor() {
    this.content = ''
    this.id = ''
    this.comments = []
    this.date = new Date(0)
  }

  public setId(id: string): void {
    this.id = id
  }

  public setContent(title: string): void {
    this.content = title
  }

  public setDate(date: Date): void {
    this.date = date
  }

  public getId(): string {
    return this.id
  }

  public getContent(): string {
    return this.content
  }

  public getDate(): Date {
    return this.date
  }

  public setComments(comments: Comment[]): void {
    this.comments = comments
  }

  public getComments(): Comment[] {
    return this.comments
  }
}
