import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, CalendarDays, Github, ExternalLink } from "lucide-react";
import { projectsData } from "@/components/ui/Types";
import type { ProjectItem } from "@/components/ui/Types";
import Layout from "@/components/ui/Layout";
import TagTitle from "@/components/ui/TagTitle";

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────
function getAllProjects(): ProjectItem[] {
  return Object.values(projectsData).flat();
}

function getProjectBySlug(slug: string): ProjectItem | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

// ─────────────────────────────────────────────
// generateStaticParams
// ─────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllProjects()
    .filter((p) => !!p.blog)
    .map((p) => ({ slug: p.slug }));
}

// ─────────────────────────────────────────────
// generateMetadata
// ─────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Projects`,
    description: project.description,
  };
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
export default async function ProjectBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.blog) notFound();

  const { blog } = project;

  // Dynamic import konten dari components/pages/Blog/{slug}.tsx
  // Kalau file belum ada → render placeholder, tidak crash
  let BlogContent: React.ComponentType | null = null;
  try {
    const mod = await import(`@/components/pages/Blog/${slug}`);
    BlogContent = mod.default ?? null;
  } catch {
    BlogContent = null;
  }

  return (
    <Layout>
      <main className="max-w-2xl mx-auto px-4 py-12 md:py-10 lg:ml-[5%]">

        <TagTitle title="Blog" bagian={project.title} color="blue" />

        {/* back */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-700 transition-colors mb-10 group"
        >
          <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
          Kembali ke Projects
        </Link>

        {/* cover image */}
        {(blog.coverImage ?? project.photo) && (
          <div className="w-full h-52 rounded-xl overflow-hidden mb-8 bg-slate-100">
            <img
              src={blog.coverImage ?? project.photo}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* tech badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="inline-block text-xs px-2.5 py-0.5 rounded-sm border font-medium border-slate-200 text-slate-600 bg-slate-50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* title */}
        <h1 className="font-coolvetica text-3xl md:text-4xl leading-tight text-slate-900 mb-3">
          {project.title}
        </h1>

        {/* meta */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-8 pb-8 border-b border-slate-100">
          <span className="flex items-center gap-1">
            <CalendarDays size={12} />
            {blog.publishedAt ?? project.year}
          </span>
          {blog.readTime && (
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {blog.readTime}
            </span>
          )}
        </div>

        {/* konten manual */}
        <article>
          {BlogContent ? (
            <BlogContent />
          ) : (
            <div className="rounded-lg border border-dashed border-slate-200 px-6 py-10 text-center space-y-1">
              <p className="text-sm text-slate-400">Konten belum dibuat.</p>
              <p className="text-xs text-slate-300 font-mono">
                Buat file: components/pages/Blog/{slug}.tsx
              </p>
            </div>
          )}
        </article>

        {/* footer links */}
        {(project.link || project.repo) && (
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors"
              >
                <Github size={14} />
                GitHub
              </a>
            )}
          </div>
        )}

      </main>
    </Layout>
  );
}