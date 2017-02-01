function isMobile() {
    return $(window).innerWidth() <= 680;
}

function resizeWindows() {
    if (!isMobile()) {
        $('.full-height').each(function(index, element) {

            $(element).height($(window).innerHeight());

            $(element).find('article').each(function(index, article) {

                if ($(article).height() + (isMobile ? 0 : 90) > $(element).height())
                    $(element).height($(article).height() + (isMobile ? 0 : 90));
                $(article).css('padding-top', ($(window).innerHeight() / 2 - $(article).height() / 2) - 60);

            }); // end article each condition

        });

    } //end of if condition
} //end of function

// $(function() {
//     $(window).resize(function() {
//         resizeWindows();
//     });
//     resizeWindows();
// });


$(document).ready(function() {
    // FRENCHPRESS MODEL START
    var modal = $('.modalPress');
    $('#Fpress').click(function() {
        modal.fadeIn();
        $(modalC).hide()
        $(modalV60).hide()
    });
    $('.close-modalPress').click(function() {
            modal.fadeOut();
        })
        // FRENCHPRESS MODAL END



    // CHEMEX MODAL START
    var modalC = $('.modalChemex');
    $('#chemex').click(function() {
        modalC.fadeIn();
        $(modalV60).hide()
        $(modal).hide()
    });
    $('.close-modalChemex').click(function() {
            modalC.fadeOut();
        })
        // CHEMEX MODAL END



    // V60 Start
    var modalV60 = $('.modalV60');
    $('#v60').click(function() {
        modalV60.fadeIn('fast');
        $(modalC).hide()
        $(modal).hide()
    });
    $('.close-modalV60').click(function() {
            modalV60.fadeOut();
        })
        // V60 End



				// AEROPRESS Start
				var modalAP = $('.modalAeroPress');
		    $('#AeroPress').click(function() {
		        modalAP.fadeIn('fast');
		        $(modalC).hide()
		        $(modal).hide()
		    });
		    $('.close-modalAeroPress').click(function() {
		            modalAP.fadeOut();
		        })
				// AEROPRESS END


				// COLDBREW START
				var modalCB = $('.modalColdBrew');
				$('#ColdBrew').click(function() {
						modalCB.fadeIn('fast');
						$(modalC).hide()
						$(modal).hide()
				});
				$('.close-modalColdBrew').click(function() {
								modalCB.fadeOut();
						})

				// COLDBREW END


				// VAC START
				var modalV = $('.modalVpot');
				$('#vpot').click(function() {
						modalV.fadeIn('fast');
						$(modalC).hide()
						$(modal).hide()
				});
				$('.close-modalVpot').click(function() {
								modalV.fadeOut();
						})

				// VAC END


			})
