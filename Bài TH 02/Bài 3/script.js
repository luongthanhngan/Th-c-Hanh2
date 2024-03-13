function bai3(){
    const hoten = document.getElementById("bai3-ten").value;
    const email = document.getElementById("bai3-email").value;
    const title = document.getElementById("bai3-title").value;
    const textarea = document.getElementById("bai3-input-description").value;
    
    const confirmBox = confirm(
        "\n Họ và tên" + hoten+
        "\n Email:" +email  +
        "\n Nội dung góp ý "+ textarea
    );
    }