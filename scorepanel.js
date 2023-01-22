/* global AFRAME */
AFRAME.registerComponent('scorepanel', {
  init: function () {
    
    this.uiEl = document.querySelector('#ui');
    this.gameoverEl = document.querySelector('#gameover');
    this.scoreEl = document.querySelector('#points');
  
    
    var buttonElreset = document.querySelector('.reset');

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    buttonElreset.addEventListener('grab-start', this.onMenuButtonClick);

  },

  onMenuButtonClick: function (evt) {
    window.location.reload();
  },
  
});