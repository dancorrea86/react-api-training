from flask import Flask, json


companies = [{"id": 1, "name": "Company"}, {"id": 2, "name": "Company2"}, {"id": 3, "name": "Company2"}]

api = Flask(__name__)


@api.route('/tarefas', methods=['GET'])
def get_companies():
    return json.dumps(companies)

if __name__ == '__main__':
    api.run()

