<template>
  <div style="width: 2em; margin: 0 auto;">
    <b-spinner type="grow"></b-spinner>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { BSpinner } from 'bootstrap-vue'

@Component({
  components: {
    BSpinner
  }
})
export default class Spinner extends Vue {

}
</script>
