<template>
  <span>
    <b-list-group-item v-for="(comment, index) in comments" :key="index">
      {{comment.getContent()}}
      <RecursiveCommentList :comments="comment.getComments()"/>
    </b-list-group-item>
  </span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Comment from '../../model/Comment'
import { BListGroupItem } from 'bootstrap-vue'

@Component({
  components: {
    BListGroupItem
  }
})
export default class RecursiveCommentList extends Vue {
  @Prop() private comments!: Comment[];
}
</script>
