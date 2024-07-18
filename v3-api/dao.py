###############################################################################
#
# File: dao.py
#
# Author: Isaac Ingram
#
# Purpose:
#
###############################################################################
from typing import List
from datatypes import Project
import json


class ProjectDAO:
    """
    Provide an interface for getting project data from the file system.
    """

    _projects: List[Project]
    _datafile_path: str

    def __init__(self, file_path: str):
        """
        Initialize this project DAO.
        :param file_path: Path to the projects JSON file.
        """
        # Set members
        self._projects = list()
        self._datafile_path = file_path
        # Read the JSON file
        data: dict
        with open(file_path, 'r') as file:
            data = json.load(file)
        # Iterate through all objects in JSON
        for raw_project in data:
            # Make sure all expected fields are present
            if (
                    'id' in raw_project and 'name' in raw_project and
                    'thumbnail' in raw_project and 'description' in raw_project
            ):
                # Create new Project object and add to list of projects
                self._projects.append(Project(
                    raw_project['id'],
                    raw_project['name'],
                    raw_project['thumbnail'],
                    raw_project['description']
                ))

    def get_all_projects(self) -> List[Project]:
        """
        Get all projects.
        :return: A list of projects.
        """
        return self._projects

    def get_project_by_id(self, project_id: int) -> Project | None:
        """
        Get a project by its id.
        :param project_id: id of the project to get.
        :return: The project if it exists, otherwise None.
        """
        return next((proj for proj in self._projects if proj.id == project_id), None)

    def create_project(self, project: Project) -> Project | None:
        """
        Create a project
        :param project: The project to be created. The id is arbitrary as they
        are automatically assigned in this function.
        :return: The project if it was created successfully, None otherwise.
        """
        # TODO implement
        pass

    def delete_project(self, project_id: int) -> Project | None:
        """
        Delete a project
        :param project_id: id of the project to delete
        :return: The project that was deleted if successful, None otherwise.
        """


def main():
    dao = ProjectDAO("./data/projects.json")


if __name__ == "__main__":
    main()
