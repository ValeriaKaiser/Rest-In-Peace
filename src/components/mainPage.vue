<template>
   <div class="overview">
      <div class="overview__mask"></div>
      <div class="overview__content">
         <div class="overview__video">
            <div class="overview__videobox overview--box">Video</div>
         </div>
         <div class="overview__about">
            <div class="overview__data overview--box">About</div>
            <div class="overview__slider overview--box">Slider</div>
         </div>
         <div class="overview__info">
            <div class="info__socials">
               <a class="info__link">
                  <font-awesome-icon class="info__icon" :icon="['fab', 'vk']"></font-awesome-icon>
               </a>
               <a class="info__link">
                  <font-awesome-icon class="info__icon" :icon="['fab', 'twitter-square']"></font-awesome-icon>
               </a>
               <a class="info__link">
                  <font-awesome-icon class="info__icon" :icon="['fab', 'instagram']"></font-awesome-icon>
               </a>
               <a class="info__link">
                  <font-awesome-icon class="info__icon" :icon="['fab', 'facebook-square']"></font-awesome-icon>
               </a>
            </div>
            <div class="info__team">
               <div class="team__member">
                  <div class="team__contacts">
                     <div class="team__number">+7 985 336 80 01</div>
                     <div class="team__mail">neko1606@gmail.com</div>
                  </div>
                  <div class="team__name">Shevschenko Valeria</div>
                  <div class="team__pos">Frontend Lead</div>
               </div>

               <div class="team__member">
                  <div class="team__contacts">
                     <div class="team__number">+7 912 585 52 55</div>
                     <div class="team__mail">nkonshin@me.com</div>
                  </div>
                  <div class="team__name">Konshin Nikita</div>
                  <div class="team__pos">Frontend</div>
               </div>

               <div class="team__member">
                  <div class="team__contacts">
                     <div class="team__number">+7 985 688 10 30</div>
                     <div class="team__mail">zorza2011@mail.ru</div>
                  </div>
                  <div class="team__name">Aganova Alena</div>
                  <div class="team__pos">JavaGod</div>
               </div>
            </div>
            <div class="info__copyright">© 2020 Moscow, BMSTU, IU6-52B</div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {

      }
   }
}
</script>