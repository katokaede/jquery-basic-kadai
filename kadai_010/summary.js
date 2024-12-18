
$(function() {
  //色が変わる（色は任意）
 $('#change-color').on('click',function() {
  $('p').css('color','red');
});

//文字が切り替わる（内容は任意）
$('#change-text').on('click', function(){
  $('p').text('おはよう!');
});

//フェードアウトで文字が消える
$('#fade-out').on('click', function() {
  $('p').fadeOut();
});

//フェードインで文字が現れる
$('#fade-in').on('click', function() {
  $('p').fadeIn();
});
});



