<template>
  <b-list-group-item>
      <span>
        {{comment.content}}
      </span>
      <br/>
      <span class="text-small">
        {{momentsAgo()}}
      </span>
      <br/>
      <span class="text-small">
        {{countSubComments()}} replies
      </span>
  </b-list-group-item>
</template>

<script lang="ts">
import Comment from '../model/Comment'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { BListGroupItem } from 'bootstrap-vue'
import ReaderUtil from '../util/ReaderUtil'
import moment from 'moment'

@Component({
  components: {
    BListGroupItem
  }
})
export default class CommentView extends Vue {
  @Prop() private comment!: Comment;

  countSubComments(): number {
    return ReaderUtil.countCommentsNested(this.comment.getComments())
  }

  momentsAgo(): string {
    return moment(this.comment.getDate()).fromNow()
  }
}
</script>

<style global>
  .text-small {
    font-size: 12px;
  }
</style>
