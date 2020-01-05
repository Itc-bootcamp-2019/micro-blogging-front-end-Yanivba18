import React from 'react';

function ModalWindow() {

    return (
        <>
        {/* {modal.open} */}
        </>
    )
}

// let modal = (function () {
//     let method = {},
//         $overlay,
//         $modal,
//         $content;

//     // Appending the modal HTML
//     $overlay = $('<div id="overlay"></div>');
//     $modal = $('<div id="modal"></div>');
//     $content = $('<div id="content"></div>');

//     $modal.hide();
//     $overlay.hide();
//     $modal.append($content);

//     $(document).ready(function () {
//         $('body').append($overlay, $modal);
//     });
//     // Center the modal in the viewport
//     method.center = function () {
//         var top, left;

//         top = "50%";
//         left = "50%";

//         $modal.css({
//             top: top,
//             left: left,
//             transform: "translateX(-50%) translateY(-50%)"
//         });
//     };

//     // Open the modal
//     method.open = function (settings) {
//         $content.empty().append(settings.content);

//         $modal.css({
//             width: settings.width || 'auto',
//             height: settings.height || 'auto'
//         })

//         method.center();

//         $(window).bind('resize.modal', method.center);

//         $modal.show();
//         $overlay.show();
//     };

//     // Close the modal
//     method.close = function () {
//         $modal.hide();
//         $overlay.hide();
//         $content.empty();
//         $(window).unbind('resize.modal');
//     };

//     return method;
// }());

export default ModalWindow;