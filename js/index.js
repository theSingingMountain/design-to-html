var boxes = $('.review-boxes');
function hide()
{
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(width > 0 && width < 767)
    {
        boxes.hide();
        boxes[0].style.display ='flex';
        $('#nextButton').data('index', 0);
        $('#nextButton').removeAttr('disabled');
    }
    else
    {
        boxes.each(function() {
            var $this = $(this);
            $(this).css('display', 'flex');
            $('#nextButton').prop('disabled', 'disabled');
        })
    }
}
$('#nextButton').on('click', function() {
    var index = $('#nextButton').data('index');
    if(index >= 0 && index < boxes.length - 1)
    {
        boxes[index].style.display = 'none';
        boxes[index + 1].style.display = 'flex';
        $('#nextButton').data('index', index + 1);
    }
    else 
    {
        boxes[index].style.display = 'none';
        boxes[0].style.display = 'flex';
        $('#nextButton').data('index', 0);
    }
})

$(window).on('load resize', function() {
    hide();
})