// $(function(){
//   $("h1").on("mouseover", function(){
//     $(this).css({"background-color": "#F1940B"});
//   })
// });


$(function() {
  $(".navbar-brand").on("mouseover", function() {
    $(this).css({"background-color": "#F1940B", "font-weight": "bold"});
  })
});


// // $(function(){

// //   //①マウスオーバー、マウスアウト
// //   $(".contents").on("mouseover", ".article", function(){
// //     $(this).css({"background-color": "#F1940B", "font-weight": "bold"});
// //   }).on("mouseout", ".article", function(){
// //     $(this).css({"background-color": "#FFFFFF", "font-weight": "normal"});
// //   })

// //   //②文字カウント
// //   $(".article_form").on('keyup', function(){
// //     $(".char_num").text($(this).val().length + '文字');
// //   });
