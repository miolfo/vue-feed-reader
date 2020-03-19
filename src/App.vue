<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-nav-text>
        Vue Feed Reader v0.1
      </b-nav-text>
    </b-navbar>
    <div id="main-app-container" class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FeedList from './components/FeedList.vue'
import FeedItem from './model/FeedItem'
import FeedItemService from './service/FeedItemService'
import { BNavbar } from 'bootstrap-vue'

@Component({
  components: {
    FeedList,
    BNavbar
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
  @import './assets/css/main.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
