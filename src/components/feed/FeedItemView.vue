<template>
  <div>
    <div class="feed-item-view" v-if="itemLoaded">
      <ItemContent :item="item"/>
      <ItemComments :item="item"/>
    </div>
    <div class="feed-item-error" v-else-if="errorLoadingItem">
      Error loading item
    </div>
    <div class="feed-item-loading" v-else>
      <Spinner/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FeedItem from '../../model/FeedItem'
import FeedItemService from '@/service/FeedItemService'
import Spinner from '../common/Spinner.vue'
import ItemContent from './ItemContent.vue'
import ItemComments from './ItemComments.vue'

@Component({
  components: {
    Spinner,
    ItemContent,
    ItemComments
  }
})
export default class FeedItemView extends Vue {
  private item!: FeedItem;
  private itemLoaded = false
  private errorLoadingItem = false

  created() {
    const feedItemService = new FeedItemService()
    if (this.$route.params.id) {
      feedItemService.getFeedItem(this.$route.params.id)
        .then((res) => {
          this.item = res
          if (!this.item) {
            this.errorLoadingItem = true
          } else {
            this.itemLoaded = true
          }
        })
    } else {
      this.itemLoaded = true
      this.errorLoadingItem = true
    }
  }
}
</script>
