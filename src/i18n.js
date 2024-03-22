import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'
i18next
    .use(LanguageDetector)
    .use(initReactI18next).use(Backend)
    .init({
        debug: true,
        fallbackLng: 'en',
        returnObjects:true,
    //     lng: 'uz',
    //     resources: {
    //         en: {
    //             translation: {
    //                 welcome: 'welcome to vision ai',
    //                 description: {
    //                     line1:'web services',
    //                     line2:'web services awailable',
    //                 }
    //           },
    //       },
    //         uz: {
    //             translation: {
    //               welcome:' vision ai ga xush kelibsiz!'
    //           },
    //       },
    //         ru: {
    //             translation: {
    //               welcome:'добро пожаловать на платформу ai'
    //           },
    //       },
    //   }
    });