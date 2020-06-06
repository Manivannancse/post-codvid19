import React from 'react';
import './App.css';
import DashboardContainer from './container/dashboardContainer';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import common from './constant/label-constant.json';

const resources = {
  en: {
    translation: common
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const { t } = useTranslation();

  return (
    <DashboardContainer t={t} />
  );
}

export default App;
