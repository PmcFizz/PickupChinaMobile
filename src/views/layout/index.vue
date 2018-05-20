<template>
  <div class="app-wrapper">
    <app-main></app-main>
    <bottombar></bottombar>
  </div>
</template>

<script>
import { AppMain,Bottombar } from '@/views/layout/components'
  export default {
    name: 'layout',
    components: {
      AppMain,
      Bottombar
    }
  }
</script>

<style lang="less" scoped>
  .app-wrapper {
    height:100%;
  }
</style>
