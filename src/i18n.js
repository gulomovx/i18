import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng:'en',
        lng: 'uz',
        resources: {
            en: {
                translation: {
                  welcome:'welcome to vision ai'
              },
          },
            uz: {
                translation: {
                  welcome:' vision ai ga xush kelibsiz!'
              },
          },
            ru: {
                translation: {
                  welcome:'добро пожаловать на платформу ai'
              },
          },
      }
    });