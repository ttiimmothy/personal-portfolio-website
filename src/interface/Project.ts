export interface Project {
  backdropImage: string;
  name: string;
  description: string;
  originLink: string;
  githubLink: string;
  stacks: string[];
  stackLinks: { [key: string]: string | undefined };
}
