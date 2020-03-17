<template>
  <div class="feed-list-item" v-on:click="toggleCommentPeek">
    {{item.title}}
    <CommentPeek v-if="peekComments" :comments="item.comments"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FeedItem from '../model/FeedItem'
import CommentPeek from './CommentPeek.vue'

@Component({
  components: {
    CommentPeek
  }
})
export default class FeedItemListView extends Vue {
  @Prop() private item!: FeedItem;

  private peekComments = false

  toggleCommentPeek() {
    this.peekComments = !this.peekComments
  }
}
</script>
