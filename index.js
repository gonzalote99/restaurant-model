import { loadHeader } from './src/header.js';
import { loadHomePage } from './src/home.js';
import { loadMenuPage } from './src/menu.js';
import { loadContactPage } from './src/contact.js';
import  './style.css'
const emptyContentDiv = () => {
  const contentDiv = document.querySelector('#content');
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
};

const loadPage = (tabName) =>
  ({
    home: loadHomePage,
    menu: loadMenuPage,
    contact: loadContactPage,
  }[tabName]?.());

const removeSelectedTabClass = () => {
  const headerTabLinks = document.querySelectorAll('.tab-links li a');
  for (const link of headerTabLinks) link.classList.remove('selected-tab');
};

const switchTab = () => {
  const headerTabLinks = document.querySelectorAll('.tab-links li a');
  for (const link of headerTabLinks) {
    link.addEventListener('click', () => {
      emptyContentDiv();
      loadPage(link.textContent);
      removeSelectedTabClass();
      link.classList.add('selected-tab');
    });
  }
};

loadHeader();
loadHomePage();
switchTab();