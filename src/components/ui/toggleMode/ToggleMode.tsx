import { useState } from 'react'
import { MdLightMode, MdNightlightRound } from 'react-icons/md'

import s from './Togglemode.module.scss'
import { useActions, useAppSelector } from 'hooks/useActions'
import { useSelector } from 'react-redux'

const ToggleMode = () => {
  const actions = useActions()

  const darkMode = useAppSelector(state => state.theme.themeState)


  return (
    <button onClick={() => actions.toggleMode()}>
    {darkMode ? <MdNightlightRound className={s.iconMoon} /> : <MdLightMode className={s.iconSun} />}
    </button>  
  )
}

export default ToggleMode