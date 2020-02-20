<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <FeedList :items='feedItems'/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FeedList from './components/FeedList.vue'
import FeedItem from './model/FeedItem'
import FeedItemService from './service/FeedItemService'

@Component({
  components: {
    FeedList
  }
})
export default class App extends Vue {
  private feedItems: FeedItem[] = []

  created() {
    const feedItemService = new FeedItemService()
    feedItemService.getFeedItems(-1, -1).then((res) => {
      this.feedItems = res
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
