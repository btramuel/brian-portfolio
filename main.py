from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/assets/documents/<path:filename>')
def serve_documents(filename):
    return send_from_directory('assets/documents', filename)

@app.route('/<path:filename>')
def serve_files(filename):
    if filename.endswith('.pdf'):
        return "File not found", 404
    return send_from_directory('.', filename)

@app.route('/')
def root():
    return send_from_directory('.', 'index.html')

if __name__ == "__main__":
    app.run(debug=True)