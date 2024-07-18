###############################################################################
#
# File: main.py
#
# Author: Isaac Ingram
#
# Purpose:
#
###############################################################################


from flask import Flask, abort, jsonify
from dao import ProjectDAO

app = Flask(__name__)


project_dao = ProjectDAO('data/projects.json')


@app.route('/projects', methods=['GET'])
def get_projects():
    """
    Handle request to GET all projects
    :return:
    """
    projects = project_dao.get_all_projects()
    return jsonify(projects)


@app.route('/projects/<int:project_id>', methods=['GET'])
def get_project(project_id):
    """
    Handle request to GET a project
    :return:
    """
    # Find project with this ID
    project = project_dao.get_project_by_id(project_id)
    if project is None:
        abort(404, description="Project not found")
    else:
        return jsonify(project.to_dict())


if __name__ == '__main__':
    app.run()
