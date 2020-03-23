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
import { BListGroup } from 'bootstrap-vue'

@Component({
  components: {
    FeedItemListView,
    BListGroup
  }
})
export default class FeedList extends Vue {
  @Prop() private items!: FeedItem[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
