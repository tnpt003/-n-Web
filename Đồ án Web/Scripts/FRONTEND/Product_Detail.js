    //< !--~~~~~~~~~~~~~~~~~~~~~CLICK MUA NGAY~~~~~~~~~~~~~~~~~~~~~-->
const buyNowBox = document.getElementById("buyNowBox");
const dialogContainer = document.getElementById("dialogContainer");
const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");

buyNowBox.addEventListener("click", function () {
    // Show the dialog box
    dialogContainer.style.display = "flex";
});

btnYes.addEventListener("click", function () {
    // Handle the "Yes" option
    alert("Tốt rồi bạn hãy xem giỏ hảng của mình.");
    dialogContainer.style.display = "none"; // Hide the dialog
});

btnNo.addEventListener("click", function () {
    // Handle the "No" option
    alert("Không sao bạn có thể lựa chọn sản phẩm khác.");
    dialogContainer.style.display = "none"; // Hide the dialog
});

//$('#btnYes').on('click', function () {
//    // Perform AJAX POST request to update cart
//    $.ajax({
//        url: '/Cart/Cart', // Update this URL with your controller action URL
//        type: 'POST', // Or 'GET' depending on your action method
//        data: {}, // You may send additional data if required
//        success: function (response) {
//            // Assuming the response contains the updated cart HTML content
//            // Replace the existing cart content with the updated content
//            $('#cartContent').html(response);
//        },
//        error: function () {
//            console.log('Error updating the cart.');
//        }
//    });
//});

    ////< !--~~~~~~~~~~~~~~~~~~~~~CHI TIẾT KHI CHỌN SẢN PHẨM~~~~~~~~~~~~~~~~~~~~~-->
    //// Function to extract the product ID from the URL

    //function getProductIdFromURL() {
    //    const urlParams = new URLSearchParams(window.location.search);
    //    return urlParams.get('product');
    //}

    //// Function to load product details based on the product ID
    //function loadProductDetails() {
    //    const productId = getProductIdFromURL();
    //    // You can replace this with actual data retrieval based on the product ID
    //    const productDetails = getProductDetails(productId);

    //    if (productDetails) {
    //        // Update the product detail page content
    //        document.getElementById('product-image').src = '@Url.Content(productDetails.image)'; // Set the image source
    //        document.getElementById('product-title').textContent = productDetails.name;
    //        document.getElementById('product-description').textContent = productDetails.description;
    //        document.getElementById('product-price').textContent = `GIÁ CẢ: ${productDetails.price}`;
    //        // Add more product-specific content here
    //    } else {
    //        console.error('Product details not found.');
    //        // Handle the case when the product details are not found
    //    }
    //}

    //// You should replace this with actual data retrieval logic based on the product ID
    //function getProductDetails(productId) {
    //    // Simulated product data based on the product ID
    //    const products = {
    //        1: { name: 'Móc khóa da bò Kenta PMK0001', description: 'Móc khóa da bò thật 100%, phong cách đơn giản và tinh tế, vật dụng không thể thiếu. Chất liệu da bò thật 100%, chốt khóa chắc chắn, kích thước dài 16cm x rộng 8cm  Tặng ngay móc khóa với đơn hàng trên 1tr khi mua hàng tại Kenta. ', price: '19,000₫', image: '~/hình/Gợi ý hôm nay/1_2927cf620c864fb997ef807defd82e7e_master.jpg' },
    //        2: { name: 'Túi đeo chạy bộ PTX0003', description: 'Túi đeo hông chạy bộ thể thao cho nam và nữ. Sản phẩm được thiết kế nịt, chất liệu không thấm nước, có nhiều ngăn chứa đồ. Thoải mái khi chạy bộ ', price: '250,000₫', image: 'hình/Gợi ý hôm nay/1_32e4055326d04de6b28f7c12f44550b9_master.jpg' },
    //        3: { name: 'Áo Thun Unisex Kenta Studio ATN0146', description: 'Áo thun Kenta Studio, chất liệu thun cotton 280gsm dày dặn, mát lạnh. From unisex thoải mái, nam hoặc nữ đều mặc được. Bo cổ bản to dày dặn, đường may cao cấp từng chi tiết. ', price: '295,000₫', image: '~/hình/Gợi ý hôm nay/1_5f0144d452dc453b8f86d3e8d4f3a556_master.jpg' },
    //        4: { name: 'Áo Thun Unisex Saigonnese ATN014', description: 'Áo thun Unisex Saigonese form rộng rãi, chất liệu cotton compact, định lượng 295gsm dày dặn và mát lạnh, vải đã được wash xử lý rút. Đường may và mực in cao cấp, giặt máy thoải mái. Bo cổ bản to dày dặn, đường may cao cấp từng chi tiết. ', price: '295,000₫', image: '~/hình/Gợi ý hôm nay/1_7494176c987d4479bdf849f236df4731_master.jpg' },
    //        5: { name: 'Combo Áo Quần Thể Thao ATN0149', description: 'Set đồ bộ thể thao mặc nhà thể thao, chất liệu vải nhẹ mát, tối ưu và thoải mái. Tiện dụng khi mặc nhà, đi ngủ hoặc chơi thể thao. Chất vải mịn mát và thấm hút cực tốt, tỉ mỉ từng chi tiết. Thử ngay phong cách mới với outfit này tại Kenta nhé! ', price: '250,000₫', image: '~/hình/Gợi ý hôm nay/1_e7ba7f9307774d1b89e626e9c9396238_master.jpg' },
    //        6: { name: 'Vớ Cổ Dài PE Co Giãn PVO0003', description: 'Vớ cổ dài Kenta được dệt từ sợi PE mềm mịn, thoáng mát, thấm hút mồ hôi tốt, không để lại mùi hôi khi mang. Sợi vải có độ dày vừa phải, , chắc chắn, co giãn và bền bỉ.Thông tin chất liệu vớ: 80% sợi PE mềm mại, 15% Spandex, 5% Elastic và Nylon tạo sự co dãn, đàn hồi. ', price: '45,000₫', image: '~/hình/Gợi ý hôm nay/163_5526354919bb4e978ceda314e4483b4a_master.jpg' },
    //        7: { name: 'Quần tây nam slimfit viền túi QTA0042', description: 'Quần Tây nam Kenta với form dáng vừa vặn, sang trọng đầy lịch lãm, điểm nhấn viền ở túi trước và túi sau. Thích hợp mặc đi làm, đi chơi, lót trong sắc nét, tạo cảm giác thoải mái khi di chuyển, làm việc. Với ưu vải co giãn nhẹ, lót trong sắc nét và tinh tế, với mức giá bán cực kì hợp lý. Hiếu được nhu cầu của khách hàng, mặt trong của sản phẩm, các bạn có thể chỉnh sửa lại cho phù hợp với mọi vóc dáng. ', price: '350,000₫', image: '~/hình/Gợi ý hôm nay/2_1a1d5b281a28429e92f730302f765a01_master.jpg' },
    //        8: { name: 'Quần Kaki Dài Slimfit Nam QKK0048', description: 'Quần kaki nam Kenta với form dáng Slim vừa vặn và trẻ trung và thời thượng. Chất kaki co giãn, vải siêu mát, thoải mái trong mọi chuyển động. Sản phẩm sẽ đem đến sự hài lòng nhất. ', price: '350,000₫', image: '~/hình/Gợi ý hôm nay/2_d0c88d0a8dd341a29b72fea28dbb1391_master.jpg' },
    //        9: { name: 'Vớ Cotton Cổ Ngắn PVO0001', description: 'Vớ trơn ngắn dệt Logo Kenta kháng khuẩn, thoáng mát, thấm hút mồ hôi tốt, không để lại mùi hôi khi mang. Sợi vải được bền dày dặn và chắc chắn co giãn và bền bỉ. ', price: '39,000₫', image: '~/hình/Gợi ý hôm nay/28_7f3fbbe92354429bacccd09bea0b3f59_master.jpg' },
    //        10: { name: 'Quần Tây Nam Slimfit Xám Chì QTA0036', description: 'Quần Tây nam Kenta với form dáng vừa vặn, sang trọng đầy lịch lãm. Thích hợp mặc đi làm, đi chơi, lót trong sắc nét, tạo cảm giác thoải mái khi di chuyển, làm việc. Với ưu vải co giãn nhẹ, lót trong sắc nét và tinh tế, với mức giá bán cực kì hợp lý. Hiếu được nhu cầu của khách hàng, mặt trong của sản phẩm, các bạn có thể chỉnh sửa lại cho phù hợp với mọi vóc dáng.', price: '320,000₫', image: '~/hình/Gợi ý hôm nay/29_636e67277ca34eecaf0f9115d556780f_master.jpg' },
    //        11: { name: 'Áo Thun Raglan Form Boxy ATN0151', description: 'Áo thun Raglan Vibee Summer - Chất liệu 100% cotton tự nhiên, vải dày dặn 280gsm, đã được wash xử lý bền màu. - Form boxy năng động, thấm hút tốt, mặc siêu thoáng và thoải mái, độ bền cao. - Công nghệ in chữ nổi hiện đại, bo cổ bản to cao cấp, đường may sắc nét từng chi tiết.', price: '295,000₫', image: '~/hình/Gợi ý hôm nay/2a_9c6f64259c5b4eb3856f7578861db397_master.jpg' },
    //        12: { name: 'Áo Thun Unisex Saigonnese ATN0147', description: 'Áo thun Unisex Saigonese form rộng rãi, chất liệu cotton compact, định lượng 295gsm dày dặn và mát lạnh, vải đã được wash xử lý rút. Đường may và mực in cao cấp, giặt máy thoải mái. Bo cổ bản to dày dặn, đường may cao cấp từng chi tiết. ', price: '295,000₫', image: '~/hình/Gợi ý hôm nay/6_e778851a63dd4563a25b1c33c4154387_master.jpg' },
    //        13: { name: 'Ví da nam cao cấp PVN0016', description: 'Một chàng trai chưa sở hữu một chiếc ví / bóp da là một thiếu xót lớn. Tất sản phẩm ví da nam của Kenta đều được hoàn thiện từ da thật 100%, da bò, da nappa, da thuộc. Càng sử dụng chất da sẽ càng bóng mượt, bạn sẽ cảm nhận được độ mềm mại và bền bỉ trong quá trình sử dụng. Thiết kế đơn giản lịch thiệp, sang trọng, không lỗi mốt. Cam kết hoàn tiền x10 nếu phát hiện da giả.', price: '395,000₫', image: '~/hình/Gợi ý hôm nay/hma00252_2a1c8c08a6e94a43a4fcbd47b2942e25_master.jpg' },
    //        14: { name: 'Móc Nơ khóa da bò Kenta PMK0001', description: 'Caravat Basic // Item không thể thiếu cho các chàng trai lịch lãm', price: '50,000₫', image: '~/hình/Gợi ý hôm nay/pnn0002_xl_eee6d499c1f249d199919522dcca1165_1024x1024.jpg' },
    //        15: { name: 'Quần Jean Skinny Nam QJD0061', description: 'Quần Jean Nam Skinny cơ bản với chất lượng cao cấp, đường may sắc nét từng chi tiết, form Skinny vừa vặn và tôn dáng, nhẹ nhàng khi mặc. Dễ dàng phối với mọi trang phục, chiếc quần Jean Kenta được hoàn thiện sắc nét từng chi tiết, sẽ tạo cho bạn cảm giác tự tin nhất khi mặc với mức giá cực kì hợp lý. ', price: '450,000₫', image: '~/hình/Gợi ý hôm nay/quan-kaki_3b2d61b5ebd24464b4995616b1231c71_master.jpg' },
    //        // Define details for other products with different IDs
    //    };
    //    return products[productId];
    //}

    //// Call the function to load product details
    //loadProductDetails();

$(document).ready(function () {
    $('.image-container1 a').on('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior

        var productId = $(this).data('productid'); // Get the product ID from the link
        // Ajax request to fetch product details based on productId
        $.ajax({
            url: '/ProductDetail/GetProductDetails', // Replace with your controller action URL
            type: 'GET',
            data: { productId: productId },
            success: function (data) {
                // Update the DOM elements with the fetched product details
                $('#product-title').text(data.ProName);
                $('#product-image').attr('src', data.ProImage);
                $('#product-description').text(data.Description);
                $('#product-price').text(data.Price);
                // Update other elements as needed
            },
            error: function () {
                // Handle errors if any during the AJAX call
                console.log('Error fetching product details.');
            }
        });
    });
});
