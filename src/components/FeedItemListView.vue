<template>
  <div>
  <b-list-group-item class="feed-list-item" v-on:click="toggleCommentPeek" v-bind:class="{active: peekComments}">
    <div class="item-index">
      {{index + 1}}
    </div>
    <div>
      {{item.title}}
      <br/>
      <span class="text-small">
        <b-icon icon="clock"></b-icon>
        {{momentsAgo()}}
      </span>
      <br/>
      <span class="text-small">
        <b-icon icon="chat"></b-icon>
        {{countComments()}} replies
      </span>
    </div>
  </b-list-group-item>
  <CommentPeek v-if="peekComments" :comments="item.comments" :itemId="item.id"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FeedItem from '../model/FeedItem'
import CommentPeek from './CommentPeek.vue'
import { BListGroupItem, BIcon } from 'bootstrap-vue'
import ReaderUtil from '../util/ReaderUtil'
import moment from 'moment'

@Component({
  components: {
    CommentPeek,
    BListGroupItem,
    BIcon
  }
})
export default class FeedItemListView extends Vue {
  @Prop() private item!: FeedItem;
  @Prop() private index!: number;

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
    height: 7rem;
  }

  .item-index {
    float: left;
    width: 2rem;
    height: 100%;
    line-height: 5rem;
  }

</style>
