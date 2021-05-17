/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

// console.log('Script started successfully');
WA.onEnterZone('myZone', () => {
  WA.disablePlayerControl();
  WA.openPopup('popupRectangle', 'This is an imporant message!', [
    {
      label: 'Got it!',
      className: 'primary',
      callback: (popup) => {
        WA.restorePlayerControl();
        popup.close();
      },
    },
  ]);
});
// WA.openCoWebSite('https://workadventu.re');
