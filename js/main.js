/**
 * Created by Актилек on 08.03.2017.
 */
$('.select-language select').change(function () {
    $(this).parent().find('span').text($(this).find('option:selected').text());
});
$('.btn-select').click(function () {
    $('#select-wrap').toggleClass('open');
});
