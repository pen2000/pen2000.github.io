$(function () {
    const offsetY = -100;

    // #で始まるリンクをクリックした場合
    $('a[href^="#"]').click(function () {
        // スクロールの速度
        let speed = 400;
        // スクロールタイプ
        let type = 'swing';
        // href属性の取得
        let href = $(this).attr("href");
        // 移動先の取得（hrefが#indexならトップ$(html)に、）
        let target = $(href == "#index" ? 'html' : href);
        // 移動先のポジション取得
        let position = target.offset().top + offsetY;
        // animateでスムーススクロール
        $('body,html').animate({ scrollTop: position }, speed, type);
        return false;
    });
});