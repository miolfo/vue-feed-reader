<template>
  <div id="feed-reader">
    <Spinner v-if="loading"/>
    <FeedList v-else :items="feedItems" :indexOffset="page * count"/>
    <div class="pagination-buttons">
      <b-button-group>
        <b-button v-on:click="prevPage" v-bind:disabled="prevDisabled">Previous page</b-button>
        <b-button v-on:click="nextPage">Next page</b-button>
      </b-button-group>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FeedList from './FeedList.vue'
import FeedItem from '../model/FeedItem'
import FeedItemService from '../service/FeedItemService'
import Spinner from './common/Spinner.vue'

@Component({
  components: {
    FeedList,
    Spinner
  }
})
export default class FeedReader extends Vue {
  private feedItems: FeedItem[] = []

  private readonly count = 10
  private page = 0
  private prevDisabled = true
  private loading = true
  private readonly feedItemService = new FeedItemService()

  created() {
    this.feedItemService.getFeedItems(0, this.count).then((res) => {
      this.feedItems = res
      this.loading = false
    })
  }

  nextPage() {
    this.page++
    if (this.page > 0) {
      this.prevDisabled = false
    }
    this.loading = true
    const start = this.page * this.count
    const end = start + this.count
    this.feedItemService.getFeedItems(start, end).then((res) => {
      this.feedItems = res
      this.loading = false
    })
  }

  prevPage() {
    this.page--
    if (this.page < 1) {
      this.prevDisabled = true
    }
    this.loading = true
    const start = this.page * this.count
    const end = start + this.count
    this.feedItemService.getFeedItems(start, end).then((res) => {
      this.feedItems = res
      this.loading = false
    })
  }
}
</script>

<style scoped>
  .pagination-buttons {
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 30%;
    margin: auto;
  }
</style>
