(function($){
  $.rotate = function(o){
    var defaults = {
      classesName : ['slide1','slide2','slide3','slide4','slide5'],
      leftButton : '.prev',
      rightButton : '.next',
      event : 'click',
      objectBox : '.wrap .slide li'

    }
    for(var key in o){
      defaults[key] = o[key];
    }
    $(defaults.leftButton).on(defaults.event,function(){
      var first = defaults.classesName.shift();
      defaults.classesName.push(first);
      for(var i = 0; i < defaults.classesName.length; i++){
        $(defaults.objectBox).eq(i).removeClass().addClass(defaults.classesName[i]);
      }
    })
    $(defaults.rightButton).on(defaults.event,function(){
      var last = defaults.classesName.pop();
      defaults.classesName.unshift(last);
      for(var i = 0; i < defaults.classesName.length; i++){
        $(defaults.objectBox).eq(i).removeClass().addClass(defaults.classesName[i]);
      }
    })
  }
})(window.jQuery)