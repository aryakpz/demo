$(document).ready(function () {
    $('.alert-partners_confirm').on('click', function () {
      var id = $(this).attr("data-partner_id");
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
        window.location.href="/admin/settings/partners/deletepartners/"+id
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
  
  