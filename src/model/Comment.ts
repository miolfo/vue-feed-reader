export default class Comment {
  private content: string;
  private id: string;
  private comments: Comment[];

  constructor() {
    this.content = ''
    this.id = ''
    this.comments = []
  }

  public setId(id: string): void {
    this.id = id
  }

  public setContent(title: string): void {
    this.content = title
  }

  public getId(): string {
    return this.id
  }

  public getContent(): string {
    return this.content
  }

  public setComments(comments: Comment[]): void {
    this.comments = comments
  }

  public getComments(): Comment[] {
    return this.comments
  }
}
