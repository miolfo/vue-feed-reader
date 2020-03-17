<template>
  <div>
    <ul>
      <CommentView v-for="comment in comments.slice(0, 3)" :key="comment.id" :comment="comment"/>
    </ul>
    <router-link :to="{path: `/item/${itemId}`}">
      Show all
    </router-link>
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
  @Prop() private itemId!: string;
}
</script>
