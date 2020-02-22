export default class FeedItem {
  private title: string;
  private id: string;

  constructor() {
    this.title = ''
    this.id = ''
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
}
