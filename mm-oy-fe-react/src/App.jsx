import React from 'react';
import './i18n'; // Import the i18n configuration
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Review from "./components/Review";
import SecondPage from "./components/SecondPage";

function App() {
  const [theme, setTheme] = React.useState("light");

  return (
    <>
      <div data-bs-theme={theme === "light" ? "light" : "dark"}>
        <Header setTheme={setTheme} theme={theme} />
        <MainPage />
        <SecondPage />
        <Review />
        <Footer />
      </div>
    </>
  );
}

export default App;