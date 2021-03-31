$(".ui.dropdown").dropdown();
$(".ui.modal").modal({ blurring: true }).modal("show");
$(".menu .item").tab();
$(".ui.checkbox").checkbox();
$(".enable.button").on("click", function () {
  $(this).nextAll(".checkbox").checkbox("enable");
});
$(".courses_performance").owlCarousel({
  items: 10,
  loop: false,
  margin: 30,
  nav: true,
  dots: false,
  navText: [
    "<i class='uil uil-angle-left'></i>",
    "<i class='uil uil-angle-right'></i>",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    1000: { items: 1 },
    1200: { items: 1 },
    1400: { items: 1 },
  },
});
$(".edututs_news").owlCarousel({
  items: 10,
  loop: false,
  margin: 30,
  nav: true,
  dots: false,
  navText: [
    "<i class='uil uil-angle-left'></i>",
    "<i class='uil uil-angle-right'></i>",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    1000: { items: 1 },
    1200: { items: 1 },
    1400: { items: 1 },
  },
});
if (
  jQuery(
    'iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"],iframe[src*="https://player.vimeo.com/"]'
  ).length > 0
) {
  jQuery(
    'iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]'
  ).wrap("<div class='iframe-parent-class'></div>");
  jQuery(
    'iframe[src*="https://www.youtube.com/embed/"],iframe[src*="https://player.vimeo.com/"]'
  ).each(function (index) {
    var windows = jQuery(window);
    var iframeWrap = jQuery(this).parent();
    var iframe = jQuery(this);
    var iframeHeight = iframe.outerHeight();
    var iframeElement = iframe.get(0);
    windows.on("scroll", function () {
      var windowScrollTop = windows.scrollTop();
      var iframeBottom = iframeHeight + iframeWrap.offset().top;
      if (windowScrollTop > iframeBottom) {
        iframeWrap.height(iframeHeight);
        iframe.addClass("stuck");
        jQuery(".scrolldown").css({ display: "none" });
      } else {
        iframeWrap.height("auto");
        iframe.removeClass("stuck");
      }
    });
  });
}
var headers = $("#accordion .accordion-header");
var contentAreas = $("#accordion .ui-accordion-content ")
  .hide()
  .first()
  .show()
  .end();
var expandLink = $(".accordion-expand-all");
headers.click(function () {
  contentAreas.slideUp();
  $(this).next().slideDown();
  expandLink.text("Expand all").data("isAllOpen", false);
  return false;
});
expandLink.click(function () {
  var isAllOpen = !$(this).data("isAllOpen");
  console.log({ isAllOpen: isAllOpen, contentAreas: contentAreas });
  contentAreas[isAllOpen ? "slideDown" : "slideUp"]();
  expandLink
    .text(isAllOpen ? "Collapse All" : "Expand all")
    .data("isAllOpen", isAllOpen);
});
$('input[name="paymentmethod"]').on("click", function () {
  var $value = $(this).attr("value");
  $(".return-departure-dts").slideUp();
  $('[data-method="' + $value + '"]').slideDown();
});
// window.oncontextmenu = function () {
//   return false;
// };
$(document).keydown(function (event) {
  if (event.keyCode == 123) {
    return false;
  } else if (
    (event.ctrlKey && event.shiftKey && event.keyCode == 73) ||
    (event.ctrlKey && event.shiftKey && event.keyCode == 74)
  ) {
    return false;
  }
});
