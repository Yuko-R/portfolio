$(function(){
$('.tab-nav a').on('click', function(){
	console.log($(this).text());
	if ($(this).hasClass('active')){
		// ここで処理を終了する
		return false;
	}

	// class='active'と指定されていない時に行いたい処理を書く
	// まず、class='active'とついてるリストタグをなくす
	$('.tab-nav a').removeClass('active');
	// 押されたaタグにclass='active'とつける
	$(this).addClass('active');

	// #から始まるURLの一部を取得
	// JavaScriptの書き方で使える
	console.log(this.hash);
	// 内容が書いてあるdivから全てclass='active'を削除する
	$('.tab-content > div').removeClass('active');

	// this.hashで取得した文字列と同じid名のdivタグにclass='active'をつける
	// 要素.filter(セレクタ名) 親要素内にある指定されたセレクタ名の要素を取得する
	$('.tab-content > div').filter(this.hash).addClass('active');

    // ページ内リンクの効果を打ち消す
	return false;

});

});