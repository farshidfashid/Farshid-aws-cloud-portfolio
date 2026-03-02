const apiUrl = "https://54vtgh2b27.execute-api.us-east-1.amazonaws.com/prod/visitor";

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("API error");
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("visitor-count").innerText = data.visits;
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("visitor-count").innerText = "—";
        document.getElementById("status-message").innerText = "Unable to connect to AWS.";
    });
