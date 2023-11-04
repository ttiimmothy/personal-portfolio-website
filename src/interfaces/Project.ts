export interface Project {
  backdropImage: string;
  name: string;
  description: string;
  originLink: string;
  githubLink: string;
  backendGithubLink?: string;
  stacks: string[];
  stackLinks: { [key: string]: string | undefined };
}
