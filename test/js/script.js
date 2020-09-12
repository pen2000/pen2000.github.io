// タイプ風アニメーション
$(function () {
  $('.top-str').t({
    speed: 80,
    speed_vary: false,
    delay: 0.5,
    blink: false
  });
});

// タイプ風アニメーションに合わせて要素の追加・削除
$(function () {
  document.getElementById("works").style.visibility = "hidden";
  document.getElementById("profile").style.visibility = "hidden";
  document.getElementById("contact").style.visibility = "hidden";
  var showDiv = function(){
    document.getElementById("works").style.visibility = "visible";
    document.getElementById("profile").style.visibility = "visible";
    document.getElementById("contact").style.visibility = "visible";
    scrollAppear();
  } 
  setTimeout(showDiv, 2000);
});

// スムーススクロール
$(function () {
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^=#]').click(function () {
    // ヘッダーの高さ
    var adjust = 60;
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top - adjust;
    // スムーススクロール
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

// スクロールで出現アニメーション
function scrollAppear() {
  var scrollAnimationClass = 'sa';
  var scrollAnimationShowClass = 'show';
  var triggerMarginDefault = 300;
  
  var scrollAnimationElm = document.querySelectorAll('.' + scrollAnimationClass);
  var scrollAnimationFunc = function() {
    var dataMargin = scrollAnimationClass + '_margin';
    var dataTrigger = scrollAnimationClass + '_trigger';
    var dataDelay = scrollAnimationClass + '_delay';
    for(var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = triggerMarginDefault;
      var elm = scrollAnimationElm[i];
      var showPos = 0;
      if(elm.dataset[dataMargin] != null) {
        triggerMargin = parseInt(elm.dataset[dataMargin]);
      }
      if(elm.dataset[dataTrigger]) {
        showPos = document.querySelector(elm.dataset[dataTrigger]).getBoundingClientRect().top + triggerMargin;
      } else {
        showPos = elm.getBoundingClientRect().top + triggerMargin;
      }
      if (window.innerHeight > showPos) {
        var delay = (elm.dataset[dataDelay])? elm.dataset[dataDelay] : 0;
        setTimeout(function(index) {
          scrollAnimationElm[index].classList.add('show');
        }.bind(null, i), delay);
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
}
