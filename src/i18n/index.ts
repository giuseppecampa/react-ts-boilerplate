import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import IT from './locales/it.locale.json'

const resources = {
  it: { translation: IT },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'it',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })

export const change_language = (language: string): void => {
  i18n.changeLanguage(language)
  setTimeout(() => window.location.reload())
}

export default i18n
