<template>
  <div>
    <ul>
      <CommentView v-for="comment in comments.slice(0, 3)" :key="comment.id" :comment="comment"/>
    </ul>
    <a href="#">
      Show all
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Comment from '../model/Comment'
import CommentView from './CommentView.vue'

@Component({
  components: {
    CommentView
  }
})
export default class CommentPeek extends Vue {
  @Prop() private comments!: Comment[];
}
</script>
