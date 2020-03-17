<template>
  <div id="feed-reader">
    <FeedList :items="feedItems"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FeedList from './FeedList.vue'
import FeedItem from '../model/FeedItem'
import FeedItemService from '../service/FeedItemService'

@Component({
  components: {
    FeedList
  }
})
export default class FeedReader extends Vue {
  private feedItems: FeedItem[] = []

  created() {
    const feedItemService = new FeedItemService()
    feedItemService.getFeedItems(-1, -1).then((res) => {
      this.feedItems = res
    })
  }
}
</script>
