
$(window).on('load', function() {
  $('.preloader').addClass('complete')
})
$('.bcomando').click(function() {
    $('.bcomando').each(function() {
        $(this).removeClass('bcomando-active');
    });
    $(this).addClass('bcomando-active');

    var id = $(this).attr('id');//Pega o id do button
    $('#categorias .card').filter(function() {//Filtra as categorias
        $(this).toggle(
            $(this)
                .attr('class')
                .indexOf(id) > -1
        );
    });
});
$('#search-input').on('keyup', function() {
    var value = $(this)
        .val()
        .toLowerCase();
    $('#categorias .card').filter(function() {
        $(this).toggle(
            $(this)
                .text()
                .toLowerCase()
                .indexOf(value) > -1
                
        );

    });
    if ($('#categorias .card:visible').length === 0) {
        $('#notfound').show();
    } else {
        $('#notfound').hide();
    }
});
$('#categorias .card .card-header').click(function() {
      let classname = $(this).attr('class').split(' ')[0];
  

  $(this).toggleClass('background-header')
    $(`#categorias .card .${classname} .icon`).toggleClass('icon-arrow')
  
})
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});