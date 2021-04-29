$(document).ready(function () {
  var modalShow = localStorage.getItem('modalShow');
  if (!modalShow) {
    $("#modalSubscription").modal('show');
    localStorage.setItem('modalShow', true);
  }

  $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
    localStorage.setItem('activeTab', $(e.target).attr('href'));
  });
  var activeTab = localStorage.getItem('activeTab');
  if (activeTab) {
    $('#nav-tab a[href="' + activeTab + '"]').tab('show');
  }
});
