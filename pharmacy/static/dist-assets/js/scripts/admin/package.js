$(document).ready(function () {
    $('.alert-highlights_confirm').on('click', function () {
      var id = $(this).attr("data-highlights_slug");
      swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#0CC27E',
          cancelButtonColor: '#FF586B',
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          confirmButtonClass: 'btn btn-success mr-5',
          cancelButtonClass: 'btn btn-danger',
          buttonsStyling: false
      }).then(function () {
        window.location.href="/admin/package/viewpackagehighlights/deletepackagehighlights/"+id
          swal(
              'Deleted!',
          )
      }, function (dismiss) {
          // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
          if (dismiss === 'cancel') {
              swal(
                  'Cancelled',
              )
          }
      })
    });
  })


  $(document).ready(function () {
    $('.alert-package_confirm').on('click', function () {
      var id = $(this).attr("data-package_slug");
      swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#0CC27E',
          cancelButtonColor: '#FF586B',
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          confirmButtonClass: 'btn btn-success mr-5',
          cancelButtonClass: 'btn btn-danger',
          buttonsStyling: false
      }).then(function () {
        window.location.href="/admin/package/packages/deletepackages/"+id
          swal(
              'Deleted!',
          )
      }, function (dismiss) {
          // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
          if (dismiss === 'cancel') {
              swal(
                  'Cancelled',
              )
          }
      })
    });
  })