<template>
  <li>
      <span>
        {{comment.content}}
      </span>
      <br>
      <span>
        {{comment.comments.length}} replies
      </span>
  </li>
</template>

<script lang="ts">
import Comment from '../model/Comment'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CommentView extends Vue {
  @Prop() private comment!: Comment;
}
</script>
