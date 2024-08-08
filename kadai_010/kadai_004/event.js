$(function() {
  // ページの全てが読み込まれたとき
  $(window).on('load', function() {
      console.log('loadイベントが発生しました');
  });

  // ユーザーがページをスクロールしたとき
  $(window).on('scroll', function() {
      console.log('scrollイベントが発生しました');
  });
});
// $(function () {
//    // ロードされた場合
//    $(document).on('load', function(){
//     console.log('loadイベントが発生しました');
//   });
// });
// $(function() {
//     // ボタンがクリックされた場合
//     $('button').on('click', function(){
//       console.log('ボタンがクリックされました');
//     });
//   });