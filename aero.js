function validated() {
        const Username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const validusername = "dinesh";
        const validpassword = "1234";

        if
            (Username == validusername && password == validpassword) {
            alert("login successfully")
            return true;
        } else {
            alert("invalid username or password");
            return false;
        }
    }
