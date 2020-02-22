<template>
  <div class="feed-list-item">
    {{item.title}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FeedItem from '../model/FeedItem'

@Component
export default class FeedItemView extends Vue {
  @Prop() private item!: FeedItem;
}
</script>
