
import Home from '../components/screens/home/Home.tsx'
import SignUp from '../components/screens/signUp/SignUp.tsx'
import LogIn from '../components/screens/login/LogIn.tsx'
import Dashboard from 'components/screens/overview/Overview.tsx'
import Overview from 'components/screens/overview/Overview.tsx'
import Transactions from 'components/screens/transactions/Transactions.tsx'
import Cards from 'components/screens/cards/Cards.tsx'
import Invoices from 'components/screens/invoices/Invoices.tsx'
import Goals from 'components/screens/goals/Goals.tsx'
import Settings from 'components/screens/settings/Settings.tsx'





export const routes = [
  {
    path: '/',
    component: Home,
    isAuth: false,
    personalNavigation: false,
    commonNavigation:true
  },
  {
    path: '/signup',
    component: SignUp,
    isAuth: false,
    personalNavigation: false,
    commonNavigation:true
  },
  {
    path: '/login',
    component: LogIn,
    isAuth: false,
    personalNavigation: false,
    commonNavigation:true
  },
  {
    path: '/dashboard/overview',
    component:Overview,
    isAuth: true,
    personalNavigation: true,
    commonNavigation:false
  },
  {
    path: '/dashboard/transactions',
    component:Transactions,
    isAuth: true,
    personalNavigation: true,
    commonNavigation:false
  },
  {
    path: '/dashboard/cards',
    component:Cards,
    isAuth: true,
    personalNavigation: true,
    commonNavigation:false
  },
  {
    path: '/dashboard/invoices',
    component:Invoices,
    isAuth: true,
    personalNavigation: true,
    commonNavigation:false
  },
  {
    path: '/dashboard/goals',
    component:Goals,
    isAuth: true,
    personalNavigation: true,
    commonNavigation:false
  },
  {
    path: '/dashboard/settings',
    component:Settings,
    isAuth: true,
    personalNavigation: true,
    commonNavigation:false
  },
  

]