import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "home": "Home",
          "about": "About",
          "contact": "Contact",
          // Add more translations here
        }
      },
      fi: {
        translation: {
          "home": "Koti",
          "about": "Tietoa",
          "contact": "Yhteystiedot",
          // Add more translations here
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;