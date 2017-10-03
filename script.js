var colNum = 0;
var rowNum = 0;
var colors = ['bc-orange', 'bc-violet', 'bc-green', 'bc-cyan', 'bc-yellow', 'bc-blue', 'bc-red'];

$('#rows, #columns').on('change', function(){
	if (parseInt($(this).val()) > 20){
		$(this).val(20);
	} 
	if (parseInt($(this).val()) < 2) {
		$(this).val(2);
	}
})



$('body').on('click', 'td', function(e){
	alert('Hello, I am a cube! My color is ' + $(this).attr('class').substring(3, this.length) + '.')
})

$('body').on('mouseenter', 'td', function(e){
	$(this).append('<div class="popup">' + $(this).attr('class').substring(3, this.length) + '</div>');
})

$('body').on('mouseleave', 'td', function(e){
	$(this).html('');
})


$('.btn-input').on('click', function(){
	$('table').html('');
	colNum = parseInt($("#columns").val());
	rowNum = parseInt($("#rows").val());
	for(i = 0; i < rowNum; i++){
		var tableDatas = '';
		for(j = 0; j < colNum; j++){
			var randomColor = Math.floor(Math.random() * colors.length);
			tableDatas += '<td class="' + colors[randomColor]+ '"></td>';
		}
	$('table').append('<tr></tr>').append(tableDatas);} 
	$('.btn-delete').removeClass('disabled');
})

$('.btn-delete').on('click', function(){
	$('table').html('');
	$('.btn-delete').addClass('disabled');
	$('#rows, #columns').val(null);
})


$(document).ready(function(){
})
