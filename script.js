$(function(){
  $.ajax({
    url: '/projects/6026'
  })
  .done(function(data){
    var mainContents = $("div.markdownContent",data);
    mainContents.addClass('qttm-menu');
    $(".teamSidebarContainer_sub").prepend(mainContents)
  })
});
