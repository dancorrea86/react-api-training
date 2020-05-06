from flask import Flask, json
from flask_cors import CORS

companies = [{"id": 1, "name": "Company"}, {"id": 2, "name": "Company2"}]

api = Flask(__name__)
CORS(api)

@api.route('/tarefas', methods=['GET'])
def get_companies():
    return json.dumps(companies)

if __name__ == '__main__':
    api.run()

