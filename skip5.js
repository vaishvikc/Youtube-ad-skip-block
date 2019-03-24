(function () {
  var domButtonsForAdSkip = [
    'videoAdUiSkipButton', // Old
    'ytp-ad-skip-button ytp-button', // New
    'ytp-ad-overlay-close-button', // Close
  ];

  function existingButtons(domButtonsForAdSkip) {
    return domButtonsForAdSkip.map(name => {
      return document.getElementsByClassName(name)[0];
    }).filter(v => v);
  }

  
  var timeout = setInterval(function () {
    if (window.location.pathname !== '/watch') {
      return;
    }
    
    // Trigger the `click` event on button
  
    existingButtons(domButtonsForAdSkip).forEach(button => {
      eventFire(button, 'click');
    })
  }, 2000);


  function eventFire(el, etype) {
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

})();
