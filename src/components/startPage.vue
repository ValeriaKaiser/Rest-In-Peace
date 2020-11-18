<template>
   <div class="start">
      <div v-show="showMask == true" class="start__mask" @click="maskClicked()">
         <div id="maskId" class="mask__title">Press start to play</div>
      </div>
      <div id="startId" class="start__main">
         <marquee direction="right">
            <div class="start__sprite"></div>
         </marquee>
         <div class="start__logo">
            <div class="start__image"></div>
         </div>
         <ul class="start__menu">
            <li class="start__item">
               <router-link tag="a" :to="'/signIn'">Sign in</router-link>
            </li>
            <li class="start__item">
               <router-link tag="a" :to="'/signUp'">Sign up</router-link>
            </li>
            <li class="start__item">
               <router-link tag="a" :to="'/main'">Continue as guest</router-link>
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         showMask: true 
      }
   },
   methods: {
      maskClicked() {
         let mask = document.getElementById("maskId");
         let startId = document.getElementById("startId");
         mask.classList.add('mask--clicked');
         setTimeout(() => {
            this.showMask = false;
            startId.classList.add('start__main--initiated')
         }, 2000)
      }
   }
}
</script>