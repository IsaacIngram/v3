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
        self._load()

    def _load(self):
        """
        Load the projects from the JSON file
        """
        data: dict
        with open(self._datafile_path, 'r') as file:
            data = json.load(file)
        # Iterate through all objects in JSON
        for raw_project in data:
            # Make sure all expected fields are present
            if (
                    'id' in raw_project and 'name' in raw_project and
                    'thumbnail' in raw_project and 'description' in raw_project
                    and 'featured' in raw_project
            ):
                # Create new Project object and add to list of projects
                self._projects.append(Project(
                    raw_project['id'],
                    raw_project['name'],
                    raw_project['thumbnail'],
                    raw_project['description'],
                    raw_project['featured']
                ))

    def _save(self):
        """
        Save the current projects list to the JSON
        :return:
        """
        with open(self._datafile_path, 'w') as file:
            json.dump(self._projects, file)

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

    def create_project(self, in_project: Project) -> Project | None:
        """
        Create a project
        :param in_project: The project to be created. The id is arbitrary as they
        are automatically assigned in this function.
        :return: The project if it was created successfully, None otherwise.
        """
        new_id = 0
        # Find the ID that is one above the highest existing project ID
        for project in self._projects:
            if project.id >= new_id:
                new_id = project.id + 1
        # Create new project
        new_project = Project(new_id, in_project.name, in_project.thumbnail, in_project.description, in_project.featured)
        # Add it to the projects list and save it to the JSON
        self._projects.append(new_project)
        self._save()
        return new_project

    def delete_project(self, project_id: int) -> Project | None:
        """
        Delete a project
        :param project_id: id of the project to delete
        :return: The project that was deleted if successful, None otherwise.
        """
        for project in self._projects:
            if project.id == project_id:
                self._projects.remove(project)
                self._save()
                return project
        return None


def main():
    dao = ProjectDAO("./data/projects.json")


if __name__ == "__main__":
    main()
