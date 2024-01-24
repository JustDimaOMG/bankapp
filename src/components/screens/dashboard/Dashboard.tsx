
import LayoutDashboard from 'components/layouts/layoutDashboard/LayoutDashboard'
import s from './Dashboard.module.scss'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const Dashboard = () => {

  const navigate = useNavigate()

  // useEffect(() => navigate('overview'))


  return (
    <LayoutDashboard>

    </LayoutDashboard>
  )
}

export default Dashboard