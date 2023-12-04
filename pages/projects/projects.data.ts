import { createContentLoader } from 'vitepress'

export interface Project {
  url: string
  title: string
  description: string
  createdAt: string
  coverUrl: string
  coverAlt: string
}

export default createContentLoader<Project[]>('pages/projects/*.md', {
  transform(projects) {
    return projects
      .filter((project) => project.url !== '/projects/')
      .map(
        (project): Project => ({
          url: project.url,
          title: project.frontmatter.title,
          description: project.frontmatter.description,
          createdAt: project.frontmatter.created_at,
          coverUrl: project.frontmatter.cover_url,
          coverAlt: project.frontmatter.cover_alt,
        }),
      )
      .sort((projectA, projectB) => (projectA.createdAt < projectB.createdAt ? 1 : -1))
  },
})
