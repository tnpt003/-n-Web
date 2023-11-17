$(document).ready(function () {
    $('.menu-item a').on('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior

        var catId = $(this).data('catid');
        // Ajax request to fetch product details based on productId
        $.ajax({
            url: '/CateGorySelect/CateGorySelect', // Adjust this URL to match your route
            type: 'GET',
            data: { catId: catId },
            success: function (result) {
                $('#productList').html(result);
            },
            error: function () {
                // Handle errors if any during the AJAX call
                console.log('Error fetching product details.');
            }
        });
    });
});