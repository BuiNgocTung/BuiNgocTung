$(document).ready(function() {
    var i = 2; // Khởi tạo số thứ tự
    $("#btnDK").click(function() {
        $("#myModal").modal();
    })
    $("#txtMaSV").blur(function() {
        var mauKT = /^[1-9]{1}[0-9]{8}$/;
        var chuoi = $("#txtMaSV").val();
        if (chuoi == "") {
            alert("Không để trống");
        }
        if (mauKT.test(chuoi) == true) {
            alert("bạn nhập đúng");
        } else {
            alert("bạn nhập sai");
        }
    })


    $("#txtHT").blur(function() {
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        let chuoi = $("#txtHT").val();
        if (chuoi == "") {
            alert("Không để trống");

        }
        if (mauKT.test(chuoi) == true) {
            alert("bạn đã nhập họ tên hợp lệ");
        } else {
            alert("bạn đã nhập sai");
        }
    });


    $("#txtEmail").blur(function() {
        let mauKT = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
        let chuoi = $("#txtEmail").val();
        if (chuoi == "") {
            alert("Không để trống");
        }
        if (mauKT.test(chuoi) == true) {
            alert("bạn đã nhập email hợp lệ");
        } else {
            alert("bạn đã nhập sai");
        }
    });


    $("#btnSubDK").click(function() {
        var chk = $('#chkboi:checked').val();
        var sl = $('#slCity :selected').text();
        var radGT = $("#radNam:checked").val();
        var maSV = $('#txtMaSV').val();
        var htSV = $('#txtHT').val();
        var emailSV = $('#txtEmail').val();
        alert(chk + "" + sl + "" + radGT);
        var gt = $("input[name='gioiTinh']:checked").map(function() {
            return this.value;
        }).get().join(', ');
        var nk = $("input[name='nangKhieu']:checked").map(function() {
            return this.value;
        }).get().join(', ');

        var dong = '<tr><td>' + (i++) + '<td>' + maSV + '</td>' + '<td>' + htSV + '<td>' + gt + '<td>' + nk + '<td>' + emailSV +
            '<td>' + sl + '</td></tr>';
        $("#danhSach").append(dong);
        $('#myModal').modal("hide");
    })

});