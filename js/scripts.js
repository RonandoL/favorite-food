$(document).ready(function() {
  $("form.favefood").submit(function(event) {
    var foodInput = [];
    var count = 0;
      $.each($("input[name='food']"), function() {
    	  if ($(this).is(':checked')) {
    	    foodInput[count] = $(this).val();
          count++;
    	  }
    	});
  });
});













// $(document).ready(function() {
//   $("form.class").submit(function(event) {
//   console.log();
//     var foodInput = [];
//     var count = 0;
//       $.each($("input[name='food']"), function() {
//   console.log();
//     	  if ($(this).is(':checked')) {
//     	    foodInput[count] = $(this).val();
//   console.log();
//           count++;
//     	  }
//     	});
//
//     event.preventDefault();
//   });
// });


// Attempts at getting event change on checkbox checked...unsuccessful
// $(document).ready(function() {
//   $(".checked").change(function() {
//       if($(this).is(':checked')){
//           $(".dog").show();
//       }
//   });
// });

// $(document).ready(function() {
//   $('input[type='checkbox']').change()
//       if($(this).is(':checked')){
//           $(".dog").show();
//       }
//   });
// });

// $(document).ready(function() {
//   $('input[type='checkbox']').change()
//       if($(this).is(':checked')){
//           $(".dog").show();
//       }
//   });
// });
