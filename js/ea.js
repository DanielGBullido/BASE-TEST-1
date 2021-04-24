const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


if ($( ".get-access-button" ).length) {
    $( ".get-access-button" ).removeClass("vrlps-trigger");
    $( ".get-access-button" ).attr("href", "checkout-product");
    $( ".get-access-button-text" ).text("GetStarted");
}

if ($(".bcta").length) {
    $( ".bcta" ).removeClass("vrlps-trigger");
    $(".bcta").attr("href", "checkout-product");
}


if (urlParams.get('rc') && urlParams.get('rc') !== '') {
    sessionStorage.setItem('rc', urlParams.get('rc'));
} 