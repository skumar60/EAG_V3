document.getElementById("run").addEventListener("click", async () => {
    const query = document.getElementById("query").value;

    const response = await fetch("http://localhost:5000/agent", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query })
    });

    const data = await response.json();

    document.getElementById("output").innerText = data.response;

    // Copy to clipboard automatically
    navigator.clipboard.writeText(data.response);
});