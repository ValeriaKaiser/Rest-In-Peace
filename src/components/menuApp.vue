<template>
   <header class="menu">
      <div class="menu__logo">
         <div class="menu__image"></div>
      </div>
      <ul class="menu__buttons">
         <router-link class="menu__link" tag="li" :to="'/main'">
            <div class="menu__link--title">Home</div>
            <div class="menu__link--underline"></div>
         </router-link>
         <router-link class="menu__link" tag="li" :to="'/story'">
            <div class="menu__link--title">Story</div>
            <div class="menu__link--underline"></div>
         </router-link>
         <router-link class="menu__link" tag="li" :to="'/char'">
            <div class="menu__link--title">Characters</div>
            <div class="menu__link--underline"></div>
         </router-link>
         <router-link class="menu__link" tag="li" :to="'/sound'">
            <div class="menu__link--title">Sound</div>
            <div class="menu__link--underline"></div>
         </router-link>
      </ul>
      <div class="menu__char">
         <img src="../images/AstroStay.png" class="menu__charimage" alt="Character image">
      </div>
   </header>
</template>