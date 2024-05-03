document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("user-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const userData = {
            name: name,
            email: email,
            message: message
        };

        console.log("User data saved:", userData);

        // Reset fields after Submit...
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    });
});