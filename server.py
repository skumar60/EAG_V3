from flask import Flask, request, jsonify
from agent import run_agent   # 👈 THIS is your agent file

app = Flask(__name__)

@app.route("/agent", methods=["POST"])
def agent_api():
    data = request.json
    query = data.get("query")

    logs = run_agent(query)

    return jsonify({
        "response": logs
    })

if __name__ == "__main__":
    app.run(port=5000)