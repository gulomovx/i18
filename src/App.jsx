import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import Languageselector from './components/language-selector'

const App = () => {
  const { t } = useTranslation()
  const {line1, line2}=t('description')
  return (
    <div>
      <Languageselector/>
      <h1 className="">{t('welcome')}</h1>
      <Trans
        i18nKey={line2}
        values={{
          channel:'web'
        }}
      // components={{}}
      />
    </div>
  )
}

export default App