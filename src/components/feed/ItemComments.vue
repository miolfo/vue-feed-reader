<template>
  <div>
    <b-list-group>
      <RecursiveCommentList :comments="item.getComments()"/>
    </b-list-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import RecursiveCommentList from './RecursiveCommentList.vue'
import FeedItem from '../../model/FeedItem'
import { BListGroup } from 'bootstrap-vue'

@Component(
  {
    components: {
      RecursiveCommentList,
      BListGroup
    }
  }
)
export default class ItemComments extends Vue {
  @Prop() private item!: FeedItem;
}
</script>
