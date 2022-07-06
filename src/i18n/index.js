import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enLang from './en';
import frLang from './fr';
import ualang from './ua';

const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage']
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: DETECTION_OPTIONS,
    resources: {
      en: { translation: enLang },
      fr: { translation: frLang },
      ua: { translation: ualang }
    },
    fallbackLng: 'en'
  });
export default i18n;
