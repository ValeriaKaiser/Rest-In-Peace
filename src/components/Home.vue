<template>
   <div class="main">
      <menuApp></menuApp>
      <router-view></router-view>
   </div>
</template>

<script>
export default {
   data() {
      return {
      }
   },
   components: {
      'mainPage': () => import('./mainPage.vue'),
      'menuApp': () => import('./menuApp.vue')
   }
}
</script>
