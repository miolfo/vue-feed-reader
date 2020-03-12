<template>
  <div>
    ListOfCommentsHere
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Comment from '../model/Comment'

@Component
export default class CommentPeek extends Vue {
  @Prop() private comments!: Comment[];
}
</script>
