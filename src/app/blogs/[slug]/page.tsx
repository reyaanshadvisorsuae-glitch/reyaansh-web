import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MdArrowBack,
  MdArrowForward,
  MdArticle,
  MdOutlineSchedule,
  MdPersonOutline,
  MdPictureAsPdf,
} from "react-icons/md";
import { BlogPdfSection } from "@/components/blog-pdf-section";
import {
  fetchPublicBlog,
  fetchPublicBlogs,
  getApiBaseUrl,
} from "@/lib/blog-api";
import {
  formatDate,
  getBlogContentHtml,
  getBlogHref,
  getCategoryId,
  getCategoryName,
  getReadTime,
  getSummary,
  resolveBlogImage,
} from "@/lib/blog-utils";
import { routes } from "@/lib/routes";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchPublicBlog(slug);

  if (!blog) {
    return {
      title: "Blog not found | Reyaansh Advisors",
    };
  }

  return {
    description: getSummary(blog, 155),
    title: `${blog.title} | Reyaansh Advisors`,
  };
}

export default async function Page({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = await fetchPublicBlog(slug);

  if (!blog) notFound();

  const apiBaseUrl = getApiBaseUrl();
  const relatedBlogs = (await fetchPublicBlogs(6))
    .filter((item) => item._id !== blog._id)
    .filter((item) => {
      const blogCategoryId = getCategoryId(blog);
      return blogCategoryId ? getCategoryId(item) === blogCategoryId : true;
    })
    .slice(0, 3);
  const fallbackRelatedBlogs =
    relatedBlogs.length > 0
      ? relatedBlogs
      : (await fetchPublicBlogs(4)).filter((item) => item._id !== blog._id).slice(0, 3);
  const heroImage = resolveBlogImage(blog, 0, apiBaseUrl);

  return (
    <main className="max-w-full overflow-x-clip bg-background text-on-background">
      <section className="relative overflow-hidden bg-primary-container pt-40 pb-24 text-white md:pt-48">
        <img
          alt={blog.title}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,26,51,0.38),rgba(0,26,51,0.78))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(233,193,118,0.12),transparent_42%)]" />

        <div className="relative z-10 mx-auto max-w-container-max px-gutter">
          <Link
            href={routes.blogs}
            className="inline-flex items-center gap-2 font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary-fixed transition-colors hover:text-white"
          >
            <MdArrowBack aria-hidden="true" />
            Back to insights
          </Link>
          <div className="mt-10 max-w-4xl">
            <span className="inline-flex rounded-full bg-secondary-fixed-dim/18 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.2em] text-secondary-fixed-dim">
              {getCategoryName(blog)}
            </span>
            <h1 className="mt-6 font-display-lg text-display-lg-mobile leading-tight text-white md:text-display-lg">
              {blog.title}
            </h1>
            <p className="mt-7 max-w-3xl font-body-lg text-white/74">
              {getSummary(blog, 260)}
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-white/72">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/8 px-3 py-1.5 font-label-md text-[11px] uppercase tracking-[0.12em]">
                <MdOutlineSchedule aria-hidden="true" />
                {getReadTime(blog)}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/8 px-3 py-1.5 font-label-md text-[11px] uppercase tracking-[0.12em]">
                <MdPersonOutline aria-hidden="true" />
                {blog.author || "Reyaansh Advisors"}
              </span>
              <span className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-3 py-1.5 font-label-md text-[11px] uppercase tracking-[0.12em]">
                {formatDate(blog.publishedAt || blog.createdAt)}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-container-max gap-8 px-gutter py-section-padding-desktop lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <article className="glass-card rounded-xl p-6 md:p-10">
          <div
            className="blog-rich-content"
            dangerouslySetInnerHTML={{
              __html: getBlogContentHtml(blog.content || getSummary(blog)),
            }}
          />

          {blog.pdfUrl ? (
            <section className="mt-12">
              <div className="mb-4">
                <p className="flex items-center gap-2 font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">
                  <MdPictureAsPdf aria-hidden="true" className="text-lg" />
                  Attached PDF
                </p>
                <h2 className="mt-2 font-headline-sm text-xl text-primary">
                  {blog.pdfFileName || blog.title}
                </h2>
              </div>
              <BlogPdfSection
                fileName={blog.pdfFileName || blog.title}
                url={blog.pdfUrl}
              />
            </section>
          ) : null}
        </article>

        <aside className="space-y-6 lg:sticky lg:top-32">
          <div className="rounded-xl bg-primary p-6 text-white">
            <p className="font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary-fixed">
              The Strategic Briefing
            </p>
            <h2 className="mt-4 font-headline-md text-3xl">
              Need private context around this note?
            </h2>
            <p className="mt-4 font-body-md leading-7 text-white/70">
              Use the insight as your first read, then bring Reyaansh the real
              situation. We will help turn it into a practical next step.
            </p>
            <Link
              href={routes.contact}
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-secondary-fixed-dim px-5 py-3 font-label-md text-[11px] uppercase tracking-[0.14em] text-on-secondary-fixed transition-all hover:bg-secondary-container"
            >
              Get Consultation
              <MdArrowForward aria-hidden="true" />
            </Link>
          </div>

          {fallbackRelatedBlogs.length > 0 ? (
            <div className="rounded-xl border border-outline-variant/30 bg-white p-5">
              <p className="font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">
                Related insights
              </p>
              <div className="mt-5 space-y-4">
                {fallbackRelatedBlogs.map((item, index) => (
                  <Link
                    key={item._id}
                    href={getBlogHref(item)}
                    className="group grid grid-cols-[84px_minmax(0,1fr)] gap-3 rounded-lg border border-transparent p-2 transition-all hover:border-secondary/20 hover:bg-surface-container-low"
                  >
                    <img
                      alt={item.title}
                      className="h-20 w-20 rounded-md object-cover"
                      src={resolveBlogImage(item, index + 1, apiBaseUrl)}
                    />
                    <div className="min-w-0">
                      <div className="mb-1 inline-flex items-center gap-1 font-label-md text-[10px] uppercase tracking-[0.12em] text-secondary">
                        <MdArticle aria-hidden="true" />
                        {getCategoryName(item)}
                      </div>
                      <h3 className="line-clamp-2 font-headline-sm text-[15px] leading-5 text-primary transition-colors group-hover:text-secondary">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </aside>
      </section>
    </main>
  );
}
