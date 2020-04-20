import { FeedContentType } from './FeedContentType'

export default class Content {
  private textContent: string;
  private type: FeedContentType;

  constructor(type: FeedContentType) {
    this.textContent = ''
    this.type = type
  }

  setTextContent(textContent: string): void {
    this.textContent = textContent
  }

  getTextContent(): string {
    return this.textContent
  }

  static Empty(): Content {
    const content = new Content(FeedContentType.EMPTY)
    return content
  }
}
