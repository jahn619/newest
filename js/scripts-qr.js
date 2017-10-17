var i = 0;

var top_left_img_pos = 0;
var top_right_img_pos = 0;

var top_left_p_pos = 57;
var left_left_p_pos = 22;
var top_right_p_pos = 57;
var left_right_p_pos = 22;

var top_left_qr_pos = 4;
var left_left_qr_pos = 119;
var top_right_qr_pos = 4;
var left_right_qr_pos = 119;

$("#qr-new").click(function() {

    if (i <= 11 && i % 2 == 0) {
        i++;
        var theleftside = document.getElementById("leftSide");

        var left_name = prompt("Please Enter Device Name!!");
        var t_p = document.createElement("p");
        var t_n = document.createTextNode(left_name);
        t_p.appendChild(t_n);
        t_p.style.top = top_left_p_pos + "px";
        t_p.style.left = left_left_p_pos + "px";
        theleftside.appendChild(t_p);

        var qr_info = prompt("Enter It's QR Info!!");
        var div1 = document.createElement("div");
        theleftside.appendChild(div1);
        div1.style.top = top_left_qr_pos + "px";
        div1.style.left = left_left_qr_pos + "px";
        jQuery(div1).qrcode({
            text: qr_info
        });

        var img_form = document.createElement("img");
        img_form.src = "img/qr.png";
        img_form.style.top = top_left_img_pos + "px";
        theleftside.appendChild(img_form);

        top_left_img_pos += 170;
        top_left_p_pos += 170;
        top_left_qr_pos += 170;
    } else if (i <= 11 && i % 2 != 0) {
        i++;
        var therightside = document.getElementById("rightSide");

        var right_name = prompt("Please Enter Device Name!!");
        var t_p = document.createElement("p");
        var t_n = document.createTextNode(right_name);
        t_p.appendChild(t_n);
        t_p.style.top = top_right_p_pos + "px";
        t_p.style.left = left_right_p_pos + "px";
        therightside.appendChild(t_p);

        var qr_info2 = prompt("Enter It's QR Info!!");
        var div2 = document.createElement("div");
        therightside.appendChild(div2);
        div2.style.top = top_right_qr_pos + "px";
        div2.style.left = left_right_qr_pos + "px";
        jQuery(div2).qrcode({
            text: qr_info2
        });

        var img_form = document.createElement("img");
        img_form.src = "img/qr.png";
        img_form.style.top = top_right_img_pos + "px";
        therightside.appendChild(img_form);

        top_right_img_pos += 170;
        top_right_p_pos += 170;
        top_right_qr_pos += 170;
    }
});