# python3.11.exe
from legal import Legal_Researcher
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/backend', methods=['POST'])
def backend():
    # Receive the user input and language from the frontend
    user_input = request.json['message']
    # Process the user input and language using your Python function
    response = Legal_Researcher(user_input)

    # Return the response to the frontend
    return jsonify({'message': response})


if __name__ == "__main__":
    app.run()
