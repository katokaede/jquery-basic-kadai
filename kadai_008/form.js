$(function() {
    // id属性がcheckの要素がクリックされたら
    $('.btn').on('click', function () {
        //値を変更する場合
        $('.text-box').val('クリックされました！');
    });
});