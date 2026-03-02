function showMessage() {
    alert("This website is hosted entirely on Amazon S3 with Static Website Hosting enabled!");
}

/* Simple Visitor Counter using Local Storage */
let count = localStorage.getItem("visitCount");

if (!count) {
    count = 1;
} else {
    count = parseInt(count) + 1;
}

localStorage.setItem("visitCount", count);

document.getElementById("counter").innerText =
    "You have visited this page " + count + " times.";
