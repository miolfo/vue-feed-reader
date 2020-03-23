<template>
  <b-list-group-item>
      <span>
        {{comment.content}}
      </span>
      <br>
      <span class="text-small">
        {{comment.comments.length}} replies
      </span>
  </b-list-group-item>
</template>

<script lang="ts">
import Comment from '../model/Comment'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { BListGroupItem } from 'bootstrap-vue'

@Component({
  components: {
    BListGroupItem
  }
})
export default class CommentView extends Vue {
  @Prop() private comment!: Comment;
}
</script>

<style global>
  .text-small {
    font-size: 12px;
  }
</style>
