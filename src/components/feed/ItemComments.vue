<template>
  <div>
    Here is to be comments
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import FeedItem from '../../model/FeedItem'

@Component
export default class ItemComments extends Vue {
  @Prop() private item!: FeedItem;
}
</script>
