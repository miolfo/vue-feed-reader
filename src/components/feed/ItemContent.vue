<template>
  <b-card v-bind:title="item.getTitle()">
    {{item.getContent().getTextContent()}}
  </b-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import FeedItem from '../../model/FeedItem'
import { BCard } from 'bootstrap-vue'

@Component(
  {
    components: {
      BCard
    }
  })
export default class ItemContent extends Vue {
  @Prop() private item!: FeedItem;
}
</script>
