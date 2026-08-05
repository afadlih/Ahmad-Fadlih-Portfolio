import profileData from "@/content/profile.json";
import projectData from "@/content/projects.json";
import organizationData from "@/content/organizations.json";
import credentialData from "@/content/credentials.json";
import experienceData from "@/content/experiences.json";
import type { Credential, Experience, Organization, Project } from "@/types/content";

export const profile = profileData;
export const projects = projectData as Project[];
export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99));
export const organizations = (organizationData as Organization[]).filter((item) => item.published);
export const credentials = (credentialData as Credential[]).filter((item) => item.published);
export const experiences = (experienceData as Experience[]).filter((item) => item.published);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
