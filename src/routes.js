
import Home from '@/components/Home.vue'
import mainPage from '@/components/mainPage.vue'
import startPage from '@/components/startPage.vue'
import storyPage from '@/components/storyPage.vue'

const routes = [
   {
      path: '/blank',
      name: 'Home',
      component: Home,
      children: [
         {
            path: '/main',
            name: 'Main',
            component: mainPage
         },
         {
            path: '/story',
            name: 'Story',
            component: storyPage
         }
      ],
   },
   {      
      path: '/',
      name: 'Start',
      component: startPage
   },

]

export default routes;