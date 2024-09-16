export interface Project {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  featured: boolean;
  links:  Map<string, string>;
}
