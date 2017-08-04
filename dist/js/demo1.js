// 渠道配置全选反选
$('.tree-folder').on('click',function(){
  var _this = $(this).find('.m-checkbox :checkbox');
  var $gather = $(this).next('.tree-folder-con').find('.m-checkbox :checkbox');
  if(_this.prop('checked') == true){
       $gather.prop('checked',true);
   }else{
       $gather.prop('checked',false);
   }
});
$('.tree-folder-con .m-checkbox :checkbox').on('click',function () {
  var _treefolder = $(this).parents('.tree-folder-con').prev('.tree-folder').find('.m-checkbox :checkbox');
  var allnum = $(this).size();//提示size错误
  var a = 0;
  $(this).each(function () {
     if($(this).prop('checked') == true){
         a++;
     }
  });
  if(allnum == a){
    _treefolder.prop('checked',true);
  }else{
    _treefolder.prop('checked',false);
  }
});
