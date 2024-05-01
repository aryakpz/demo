



  $(document).ready(function () { 
    $('.alert-pkgcollection_confirm').on('click', function () {
      var id = $(this).attr("data-pakg_slug");
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
          $("#pkgcollect").val(id)
        $("#collectionpkgdelete").submit()
          
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
    $('.alert-budcollection_confirm').on('click', function () {
      var id = $(this).attr("data-budgetcollection_slug");
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
          $("#budcollect").val(id)
        $("#collectionbuddelete").submit()
          
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
    $('.alert-durationcollection_confirm').on('click', function () {
      var id = $(this).attr("data-durationcollection_slug");
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
          $("#durationcollect").val(id)
        $("#collectiondurationdelete").submit()
          
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
