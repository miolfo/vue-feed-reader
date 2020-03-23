<template>
  <div class="hello">
    <b-list-group>
      <FeedItemListView v-for="(item, index) in items" :key="item.id" :item="item" :index="index"/>
    </b-list-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FeedItem from '../model/FeedItem'
import FeedItemListView from './FeedItemListView.vue'
import { BListGroup, BButtonGroup, BButton } from 'bootstrap-vue'

@Component({
  components: {
    FeedItemListView,
    BListGroup,
    BButtonGroup,
    BButton
  }
})
export default class FeedList extends Vue {
  @Prop() private items!: FeedItem[];
}
</script>
