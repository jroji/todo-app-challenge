﻿const root = document.querySelector(':root').style;

export const getSystemTheme = () => {
  const theme = (localStorage.getItem('theme')) ? localStorage.getItem('theme') : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  updateThemeMode(theme);
  return theme;
}

export const updateThemeMode = (theme) => {
  let backgroundColor, mainTextColor;

  switch(theme) {
    case 'light': 
      backgroundColor = '#fefefe';
      mainTextColor = '#333333';
      break;
    
    case 'dark':
      backgroundColor = '#333333';
      mainTextColor = '#fefefe';
      break;
  }
  
  root.setProperty('--background-color', backgroundColor);
  root.setProperty('--main-text-color', mainTextColor);

  localStorage.setItem('theme', theme);
}