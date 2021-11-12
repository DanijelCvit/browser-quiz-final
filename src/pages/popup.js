import { createPopup } from '../components/popup.html.js';

export const initializePopup = () => {
  const popupTemplate = createPopup();
  document.body.innerHTML += popupTemplate;
};
