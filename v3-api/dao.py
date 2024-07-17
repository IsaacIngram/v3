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

projects_i = [
    {"id": 0, "name": "Test", "thumbnail": "none", "description": "Cool project!!"}
]


class ProjectDAO:
    """
    Provide an interface for getting project data from the file system.
    """

    _projects: List[Project]

    def __init__(self, file_path: str):
        """
        Initialize this project DAO.
        :param file_path: Path to the projects JSON file.
        """
        self._projects = list()
        pass

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
