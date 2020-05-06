
  AFRAME.registerComponent('navigate-on-click', {
    schema: {
      url: {default: ''}
    },
    
    init: function () {
      var data = this.data;
      var el = this.el;

      el.addEventListener('click', function () {
        window.location.href = data.url;
      });
    }
  }); 

  AFRAME.registerComponent('change-color-on-hover', {
    schema: {
      color: {default: '#001261'}
    },

    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>
      var defaultColor = el.getAttribute('material').color;

      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', data.color);
      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', defaultColor);
      });
    }
  });       
  
