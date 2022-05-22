function baiTap5() {
    //B1: Dom tới thẻ input lấy dữ liệu
    var n = +document.getElementById("nguyenTo").value
    // Khai báo mảng số nguyên tố
    var primeNumber = []

    // Xét điều kiện
    if (n < 0 || n === 1) {
        alert("nhập sai, nhập lại")
        return 0
    }
    // B2: Khởi tạo vòng lặp chạy từ i đến số n đầu vào
    for (var i = 2; i <= n; i++) {
        // Khởi tạo biến: mặc định là 1
        var m = 1;

        // Khởi tạo vòng lặp chạy từ j đến căn bậc 2 của i
        for(j = 2; j<= Math.sqrt(i); j++){

            // Nếu i chia hết cho j thì biến có giá trị là 0
            if(i % j == 0){
                m = 0
            }
        }
        // nếu m có giá trị 1 thì thêm số i vào mảng số nguyên tố
        if (m == 1){
            primeNumber.push(i)
        }
        //=============================================================

        // if (kTSoNguyenTo(i) === 1) {
        //     primeNumber.push(i)
        // }
       //==============================================================
    }
    //B3: xuất kết quả ra màn hình
    document.getElementById("hienThi").style.display = "block"
    document.getElementById("txtResult").innerHTML = `Số nguyên tố: ${primeNumber}`

}
//========================================================================
// function kTSoNguyenTo(x) {

//     if (x <= 1) {
//         return  0;
//     }
  
//     for (var j = 2; j < x; j++) {
//         if (x % j !== 0) {
//             if(x == 9){
//                 console.log("ok");
//             }
//          return 1
//         } else {
//             return 0
//         }

//     }
// }