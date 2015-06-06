$(function(){
  $.ajax({
    url: '/tags'
  })
  .done(function(data){
    $(".teamSidebarContainer_sub").prepend($("div.panel.panel-default",data))
  }
  )
});
