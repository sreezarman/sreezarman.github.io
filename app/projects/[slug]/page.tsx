import { getAllProjects } from "@/lib/data"
import ProjectPageClient from "./project-page-client"

export const dynamicParams = false

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectPageClient params={params} />
}
