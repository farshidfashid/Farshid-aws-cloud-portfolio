async function calculate() {
    const base = document.getElementById("base").value;
    const exponent = document.getElementById("exponent").value;

    if (!base || !exponent) {
        document.getElementById("result").innerText =
            "Please enter both values";
        return;
    }

    try {
        const response = await fetch(
            "https://aux84xh4d3.execute-api.us-east-1.amazonaws.com/calculate",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    base: Number(base),
                    exponent: Number(exponent)
                })
            }
        );

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        if (data.result !== undefined) {
            document.getElementById("result").innerText =
                "Result: " + data.result;
        } else {
            document.getElementById("result").innerText =
                "Unexpected response from API";
        }

    } catch (error) {
        document.getElementById("result").innerText =
            "Error connecting to API";
        console.error(error);
    }
}