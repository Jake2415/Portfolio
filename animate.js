//Scroll Reveal//
(function scrollReveal() {
    window.sr = ScrollReveal();
    
    sr.reveal('.project-img', {
      delay      : 0,
      duration   : 350,
      distance   : '15px',
      easing     : 'ease-in',
      origin     : 'left',
      reset      : false,
      scale      : 1,
      viewFactor : 1,
    }, 150);
    
    sr.reveal('.project-text', {
      delay      : 0,
      duration   : 350,
      scale      : 1,
      distance   : '15px',
      origin     : 'left',
      reset      : false,
      easing     : 'ease-in',
      viewFactor : 1,
    }, 75);
  })();



  (function scrollReveal() {
    window.sr = ScrollReveal();
    
    sr.reveal('.title', {
      duration   : 600,
      distance   : '20px',
      easing     : 'ease-out',
      origin     : 'bottom',
      reset      : false,
      scale      : 1,
      viewFactor : 0,
      afterReveal  : revealChildren,
    }, 150);
    
      var revealChildren = sr.reveal('.', {
      duration   : 1000,
      scale      : 1,
      distance   : '20px',
      origin     : 'bottom',
      reset      : false,
      easing     : 'ease-out',
      viewFactor : 1,
    }, 75);
  })();


  (function scrollReveal() {
    window.sr = ScrollReveal();
    
    sr.reveal('.jumbotron', {
      duration   : 600,
      distance   : '20px',
      easing     : 'ease-out',
      origin     : 'bottom',
      reset      : false,
      scale      : 1,
      viewFactor : 0,
      afterReveal  : revealChildren,
    }, 150);
    
      var revealChildren = sr.reveal('.', {
      duration   : 1000,
      scale      : 1,
      distance   : '20px',
      origin     : 'bottom',
      reset      : false,
      easing     : 'ease-out',
      viewFactor : 1,
    }, 75);
  })();

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })