<template>
  <b-list-group-item class="feed-list-item" v-on:click="toggleCommentPeek">
    {{item.title}}
    <CommentPeek v-if="peekComments" :comments="item.comments" :itemId="item.id"/>
  </b-list-group-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FeedItem from '../model/FeedItem'
import CommentPeek from './CommentPeek.vue'
import { BListGroupItem } from 'bootstrap-vue'
@Component({
  components: {
    CommentPeek,
    BListGroupItem
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
