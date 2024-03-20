import React from 'react'
import { useTranslation } from 'react-i18next'
import Languageselector from './components/language-selector'

const App = () => {
  const {t}=useTranslation()
  return (
    <div>
      <Languageselector/>
      <h1 className="">{t('welcome')}</h1>
    </div>
  )
}

export default App