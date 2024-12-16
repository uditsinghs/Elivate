//regular expression

const email = "example@gmail.com";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

if (emailRegex.test(email)) {
    console.log("Valid email address");
} else {
    console.log("Invalid email address");
}