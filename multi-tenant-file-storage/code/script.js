const apiUrl = "https://ovfn6qt0kg.execute-api.us-east-1.amazonaws.com/prod/upload";

document.getElementById("uploadForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const tenantId = document.getElementById("tenantId").value.trim();
    const userId = document.getElementById("userId").value.trim();
    const file = document.getElementById("fileInput").files[0];
    const responseMessage = document.getElementById("responseMessage");

    if (!tenantId || !userId || !file) {
        responseMessage.textContent = "All fields are required.";
        responseMessage.style.color = "orange";
        return;
    }

    const reader = new FileReader();

    reader.onload = async function () {
        const base64File = reader.result.split(",")[1];

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    tenantId: tenantId,
                    userId: userId,
                    fileName: file.name,
                    fileType: file.type,
                    fileContent: base64File
                })
            });

            const result = await response.json();

            if (response.ok) {
                responseMessage.textContent = result.message || "Upload successful!";
                responseMessage.style.color = "lightgreen";
            } else {
                responseMessage.textContent = result.message || "Upload failed.";
                responseMessage.style.color = "red";
            }

        } catch (error) {
            responseMessage.textContent = "Error connecting to API.";
            responseMessage.style.color = "red";
        }
    };

    reader.readAsDataURL(file);
});