export default class FeedItem {
  private title: string;

  constructor() {
    this.title = ''
  }

  public setTitle(title: string): void {
    this.title = title
  }

  public getTitle(): string {
    return this.title
  }
}
