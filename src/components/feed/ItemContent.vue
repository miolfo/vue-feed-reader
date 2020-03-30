<template>
  <div>
    Here is to be content
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import FeedItem from '../../model/FeedItem'

@Component
export default class ItemContent extends Vue {
  @Prop() private item!: FeedItem;
}
</script>
