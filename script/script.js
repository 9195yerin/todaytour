//main
$(function () {
  $(".slide:gt(0)").hide();

  setInterval(function () {
    $(".slide:first")
      .fadeOut(500)
      .next()
      .fadeIn(500)
      .end()
      .appendTo(".slide-wrap");
  }, 3000);
});
