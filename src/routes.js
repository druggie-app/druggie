import ChooseSubstance from './components/ChooseSubstance.vue'
import ChooseAmount from './components/ChooseAmount.vue'
import AboutSection from './components/AboutSection.vue'
import HowTo from './components/HowTo.vue'
import TermsCond from './components/TermsCond.vue'
import ViewHistory from './components/ViewHistory.vue'
import ViewLog from './components/ViewLog.vue'
import HomePage from './components/HomePage.vue'


export default [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/choose-substance/:intake-method',
    name: 'ChooseSubstance',
    component: ChooseSubstance,
    props: true
  },
  {
    path: '/choose-amount/:amount',
    name: 'ChooseAmount',
    component: ChooseAmount, 
    props: true
  },
  {
    path: '/about', 
    name: 'AboutSection',
    component: AboutSection
  },
  { 
    path: '/install',
    name: 'HowTo',
    component: HowTo
  },
  {
    path: '/terms',
    name: 'TermsCond',
    component: TermsCond
  },
  {
    path: '/history',   
    name: 'ViewHistory',
    component: ViewHistory
  },
  {
    path: '/log/',
    name: 'ViewLog',
    component: ViewLog,
  }
]

