
import MainPage from "./MainPage";
import Review from "./Review";
import SecondPage from "./SecondPage";



import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="container my-5">
      <h1>{t('home')}</h1>
      <MainPage />
    <SecondPage />
    <Review />
    </div>
  );
};

export default Home;