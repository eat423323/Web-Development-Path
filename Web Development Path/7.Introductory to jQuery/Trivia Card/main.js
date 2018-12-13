$(document).ready(() =>{
  $('.hint-box').on('click', ()=>{
    $('.hint').slideToggle(600);
  });
  $('.wrong-answer-one').on('click', ()=>{
    $('.wrong-text-one').fadeOut(800);
    $('.smiley').hide('fast');
    $('.frown').show('slow');
  });
  $('.wrong-answer-two').on('click', ()=>{
    $('.wrong-text-two').fadeOut(800);
    $('.smiley').hide('fast');
    $('.frown').show('slow');
  });
  $('.wrong-answer-three').on('click', ()=>{
    $('.wrong-text-three').fadeOut(800);
    $('.smiley').hide('fast');
    $('.frown').show('slow');
  });

  $('.correct-answer').on('click', ()=>{
    $('.frown').hide('fast');
    $('.smiley').show('fast');
  })
});
