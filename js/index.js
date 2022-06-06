//
// 画像読み込み
//
$('input[type=file]').change(function() {
  var file = $(this).prop('files')[0];

  // 画像以外は処理を停止
  if (! file.type.match('image.*')) {
    // クリア
    $(this).val('');
    return;
  }

  // 画像表示
  var reader = new FileReader();
  reader.onload = function() {
    var img_src = $('#ThumbnailImage').attr('src', reader.result);
    $('span').html(img_src);
  }
  reader.readAsDataURL(file);
});


//
// スライダー
//
$('#ScaleBar').on('input', function() {

  $('.Thumbnail').css({transform:'scale('+ $(this).val() +')'});
});


//
// チェックボックス
//
$('.Youtube_btn').on('input', function() {

  // 表示非表示するセレクタ
  var ImageSelector;

  // チェックボックスから画像のIDを決める
  switch ($(this).attr("id")) {
    case "Youtube_btn_1":
      ImageSelector = $('#Youtube_Image_1');
      break;
    case "Youtube_btn_2":
      ImageSelector = $('#Youtube_Image_2');
      break;
    case "Youtube_btn_3":
      ImageSelector = $('#Youtube_Image_3');
      break;
    case "Youtube_btn_4":
      ImageSelector = $('#Youtube_Image_4');
      break;
  }

  if ($(this).prop("checked")){
    console.log($(this)+"");

    ImageSelector.css({'visibility':'visible'});
  }
  else{
    ImageSelector.css({'visibility':'hidden'});
  }
});