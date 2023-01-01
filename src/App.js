import React, { useState, useEffect } from 'react';
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


function App() {
  const [Theme, setTheme] = useState("light");

  useEffect(() => {
    if (Theme === "dark") {
      document.documentElement.classList.add('dark')
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }, [Theme])

  const ThemeSwitcher = () => {
    setTheme(
      Theme === "dark" ? "light" : "dark"
    );
  }


  return (
    <div className="dark:bg-slate-700 h-screen md:h-screen lg:h-screen brightness-120 ">
      <Nav Theme={Theme} setTheme={setTheme} ThemeSwitcher={ThemeSwitcher} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
