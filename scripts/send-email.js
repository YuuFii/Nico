function emailSend() {
    let userName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let messageBody = "Name\t:" + userName + "<br/>Email\t:" + email + "<br/>Message\t:" + message;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}