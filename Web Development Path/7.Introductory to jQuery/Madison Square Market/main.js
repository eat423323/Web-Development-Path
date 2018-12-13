$(document).ready(()=>{

  $('#cart').on('click', ()=>{
    $("#cartMenu").show();
  });
  $('#cart').on('mouseleave', ()=>{
    $("#cartMenu").hide();
  });


  $('#help').on('click', ()=>{
    $("#helpMenu").show();
  });
   $('#help').on('mouseleave', ()=>{
    $("#helpMenu").hide();
  });


  $('#account').on('click', ()=>{
    $("#accountMenu").show();
  });
   $('#account').on('mouseleave', ()=>{
    $("#accountMenu").hide();
  });


});
