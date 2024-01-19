
import Home from '../components/screens/home/Home.tsx'
import SignUp from '../components/screens/signUp/SignUp.tsx'
import LogIn from '../components/screens/login/LogIn.tsx'





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

]