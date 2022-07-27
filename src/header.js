export const loadHeader = () => {
  const headerContainer = document.querySelector('header');

  const leftElementsContainer = document.createElement('div');

  const logo = document.createElement('img');
  const tabLinks = document.createElement('ul');

  const homeLinkListItem = document.createElement('li');
  const menuLinkListItem = document.createElement('li');
  const contactLinkListItem = document.createElement('li');

  const homeLink = document.createElement('a');
  const menuLink = document.createElement('a');
  const contactLink = document.createElement('a');

  const rightElementsContainer = document.createElement('div');
  const orderNowButton = document.createElement('button');
  const searchIcon = document.createElement('img');
  const cartIcon = document.createElement('img');

  leftElementsContainer.classList.add('header-left-elements');
  rightElementsContainer.classList.add('header-right-elements');
  logo.classList.add('header-logo');
  tabLinks.classList.add('tab-links');
  homeLink.classList.add('selected-tab');
  searchIcon.classList.add('header-icon')
  cartIcon.classList.add('header-icon')
  orderNowButton.classList.add('order-now-button');
  searchIcon.setAttribute('src', 'https://raw.githubusercontent.com/emuel-vassallo/restaurant-page/e79f92e69cc04fd5f0772d3b3b7765eb40adc643/src/components/search.svg');
  cartIcon.setAttribute('src', 'https://raw.githubusercontent.com/emuel-vassallo/restaurant-page/e79f92e69cc04fd5f0772d3b3b7765eb40adc643/src/components/shopping-cart.svg ');

  logo.setAttribute('src', 'https://raw.githubusercontent.com/emuel-vassallo/restaurant-page/e79f92e69cc04fd5f0772d3b3b7765eb40adc643/src/components/logo.png');

  homeLink.textContent = 'home';
  menuLink.textContent = 'menu';
  contactLink.textContent = 'contact';
  orderNowButton.textContent = 'order now';

  homeLinkListItem.append(homeLink);
  menuLinkListItem.append(menuLink);
  contactLinkListItem.append(contactLink);
  tabLinks.append(homeLinkListItem, menuLinkListItem, contactLinkListItem);
  leftElementsContainer.append(logo, tabLinks);
  rightElementsContainer.append(searchIcon, cartIcon, orderNowButton);

  headerContainer.append(leftElementsContainer, rightElementsContainer);
};












