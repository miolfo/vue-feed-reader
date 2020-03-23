<template>
  <div class="indented-list">
    <b-list-group>
      <CommentView v-for="comment in comments.slice(0, 3)" :key="comment.id" :comment="comment"/>
    </b-list-group>
    <router-link :to="{path: `/item/${itemId}`}" class=link-small>
      Show all {{countComments()}}
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Comment from '../model/Comment'
import CommentView from './CommentView.vue'
import { BListGroup } from 'bootstrap-vue'
import ReaderUtil from '../util/ReaderUtil'

@Component({
  components: {
    CommentView,
    BListGroup
  }
})
export default class CommentPeek extends Vue {
  @Prop() private comments!: Comment[];
  @Prop() private itemId!: string;

  countComments(): number {
    return ReaderUtil.countCommentsNested(this.comments)
  }
}
</script>

<style scoped>
  .indented-list {
    margin-left: 2em;
    margin-bottom: 1em;
  }
  .link-small {
    font-size: 12px;
    margin-left: 1.25rem;
  }
</style>
