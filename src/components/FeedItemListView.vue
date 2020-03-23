<template>
  <div>
  <b-list-group-item class="feed-list-item" v-on:click="toggleCommentPeek" v-bind:class="{active: peekComments}">
    {{item.title}}
    <br/>
    <span class="text-small">
      {{momentsAgo()}}
    </span>
    <br/>
    <span class="text-small">
      {{countComments()}} replies
    </span>
  </b-list-group-item>
  <CommentPeek v-if="peekComments" :comments="item.comments" :itemId="item.id"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FeedItem from '../model/FeedItem'
import CommentPeek from './CommentPeek.vue'
import { BListGroupItem } from 'bootstrap-vue'
import ReaderUtil from '../util/ReaderUtil'
import moment from 'moment'

@Component({
  components: {
    CommentPeek,
    BListGroupItem
  }
})
export default class FeedItemListView extends Vue {
  @Prop() private item!: FeedItem;

  private peekComments = false

  mounted() {
    this.$root.$on('toggled-peek-comments-on', () => {
      this.peekComments = false
    })
  }

  toggleCommentPeek() {
    if (!this.peekComments) {
      this.$root.$emit('toggled-peek-comments-on')
    }
    this.peekComments = !this.peekComments
  }

  countComments(): number {
    return ReaderUtil.countCommentsNested(this.item.getComments())
  }

  momentsAgo(): string {
    return moment(this.item.getDate()).fromNow()
  }
}
</script>

<style scoped>
  .feed-list-item {
    cursor: pointer;
  }

</style>
