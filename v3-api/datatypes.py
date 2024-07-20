###############################################################################
#
# File: dao.py
#
# Author: Isaac Ingram
#
# Purpose: Hold custom datatypes, such as Project
#
###############################################################################

class Project:
    """
    A project
    """
    id: int
    name: str
    thumbnail: str
    description: str
    featured: bool

    def __init__(self, proj_id: int, name: str, thumbnail: str, description: str, featured: bool):
        self.id = proj_id
        self.name = name
        self.thumbnail = thumbnail
        self.description = description
        self.featured = featured

    def to_dict(self):
        """
        Convert project to a dictionary. This should be called within "jsonify"
        to convert the project into a format that is readable.
        :return:
        """
        return {
            "id": self.id,
            "name": self.name,
            "thumbnail": self.thumbnail,
            "description": self.description,
            "featured": self.featured
        }
