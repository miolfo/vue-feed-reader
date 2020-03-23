import Comment from '@/model/Comment'

export default class ReaderUtil {
  static countCommentsNested(comments: Comment[]): number {
    let count = 0
    const countOfComments: Function = (cmt: Comment) => {
      if (cmt.getComments().length === 0) {
        return 1
      } else {
        let countInner = 0
        cmt.getComments().forEach((comment) => {
          countInner += countOfComments(comment)
        })
        return countInner
      }
    }

    comments.forEach((comment) => {
      count += countOfComments(comment)
    })
    return count + comments.length
  }
}
