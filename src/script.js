document.body.classList.add('js-loading');

window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove('js-loading');
}

var click_count = 0;

$("body").on('click touch',function() {
  ++click_count;
  $(".text-" + (click_count - 1) ).addClass('hidden');
  $(".text-" + (click_count - 1) ).removeClass('animation-delay');
  $(".text-" + click_count).removeClass('hidden');
  if(click_count == 5) {
    click_count = 0;
    $(".text-0").removeClass('hidden');
  }
});
