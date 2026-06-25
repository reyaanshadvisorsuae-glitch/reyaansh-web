"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  MdArrowForward,
  MdArticle,
  MdChevronLeft,
  MdChevronRight,
  MdClose,
  MdSearch,
  MdTrendingUp,
} from "react-icons/md";
import {
  type BlogCategory,
  type BlogPost,
  formatDate,
  getBlogHref,
  getCategoryId,
  getCategoryName,
  getReadTime,
  getSummary,
  resolveBlogImage,
  stripHtml,
  toTitleCase,
} from "@/lib/blog-utils";
import { routes } from "@/lib/routes";

type BlogsPageProps = {
  blogs: BlogPost[];
  categories: BlogCategory[];
  imageBaseUrl?: string;
};

const allCategoriesId = "all";
const blogsPerPage = 9;

function normalizeCategories(blogs: BlogPost[], categories: BlogCategory[]) {
  const categoryMap = new Map<string, BlogCategory>();

  categories.forEach((category) => {
    if (category?._id && category.status !== false) {
      categoryMap.set(category._id, category);
    }
  });

  blogs.forEach((blog) => {
    if (typeof blog.category !== "string" && blog.category?._id) {
      categoryMap.set(blog.category._id, blog.category);
    }
  });

  return Array.from(categoryMap.values()).sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

function getPaginationItems(currentPage: number, totalPages: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages = new Set([
    1,
    totalPages,
    currentPage,
    currentPage - 1,
    currentPage + 1,
  ]);

  return Array.from(pages)
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b)
    .reduce<(number | string)[]>((items, page, index, list) => {
      if (index > 0 && page - list[index - 1] > 1) items.push(`gap-${page}`);
      items.push(page);
      return items;
    }, []);
}

function matchesSearch(blog: BlogPost, query: string) {
  if (!query) return true;

  const normalized = query.toLowerCase();
  return [
    blog.title,
    blog.author,
    getCategoryName(blog),
    blog.excerpt,
    stripHtml(blog.content),
  ]
    .filter(Boolean)
    .some((value) => String(value).toLowerCase().includes(normalized));
}

export function BlogsPage({
  blogs,
  categories,
  imageBaseUrl,
}: BlogsPageProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(allCategoriesId);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const publishedBlogs = useMemo(
    () => blogs.filter((blog) => blog.status !== false),
    [blogs]
  );

  const visibleCategories = useMemo(
    () => normalizeCategories(publishedBlogs, categories),
    [categories, publishedBlogs]
  );

  const categoryTabs = useMemo(() => {
    const tabs = visibleCategories.map((category) => ({
      ...category,
      count: publishedBlogs.filter((blog) => getCategoryId(blog) === category._id)
        .length,
    }));

    return [
      {
        _id: allCategoriesId,
        count: publishedBlogs.length,
        description: "All published advisory notes",
        name: "All Insights",
      },
      ...tabs,
    ];
  }, [publishedBlogs, visibleCategories]);

  const filteredBlogs = useMemo(() => {
    const byCategory =
      selectedCategoryId === allCategoriesId
        ? publishedBlogs
        : publishedBlogs.filter(
            (blog) => getCategoryId(blog) === selectedCategoryId
          );

    return byCategory.filter((blog) => matchesSearch(blog, searchTerm.trim()));
  }, [publishedBlogs, searchTerm, selectedCategoryId]);

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / blogsPerPage));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedBlogs = useMemo(() => {
    const start = (safeCurrentPage - 1) * blogsPerPage;
    return filteredBlogs.slice(start, start + blogsPerPage);
  }, [filteredBlogs, safeCurrentPage]);
  const paginationItems = useMemo(
    () => getPaginationItems(safeCurrentPage, totalPages),
    [safeCurrentPage, totalPages]
  );
  const visibleStart =
    filteredBlogs.length === 0 ? 0 : (safeCurrentPage - 1) * blogsPerPage + 1;
  const visibleEnd = Math.min(
    safeCurrentPage * blogsPerPage,
    filteredBlogs.length
  );
  const featuredBlog = publishedBlogs[0] ?? null;
  const activeCategory =
    categoryTabs.find((category) => category._id === selectedCategoryId) ??
    categoryTabs[0];

  const selectCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setCurrentPage(1);
  };

  const updateSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    document
      .getElementById("insight-grid")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="max-w-full overflow-x-clip bg-background text-on-background">
      <main className="max-w-full overflow-x-clip">
        <section className="relative overflow-hidden bg-primary-container pt-44 pb-28 text-center text-white md:pt-52">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(233,193,118,0.36),transparent_34%)]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,rgba(0,0,0,0.16),transparent)]" />
          </div>
          <div className="relative z-10 mx-auto max-w-container-max px-gutter">
            <span className="inline-flex rounded-full bg-secondary-fixed-dim/18 px-4 py-2 font-label-md text-[11px] uppercase tracking-[0.2em] text-secondary-fixed-dim">
              Reyaansh Advisory Intelligence
            </span>
            <h1 className="mx-auto mt-7 max-w-4xl font-display-lg text-display-lg-mobile leading-tight text-white md:text-display-lg">
              Market Foresight for Global Decision Makers.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl font-body-lg text-white/74">
              Discreet strategic intelligence, regulatory foresight, and complex
              tax navigation from the Reyaansh advisory desk.
            </p>
          </div>
        </section>

        <section className="relative z-20 mx-auto -mt-16 max-w-container-max px-gutter">
          <div className="relative flex min-h-[430px] items-end overflow-hidden rounded-xl shadow-2xl md:aspect-[21/9] md:min-h-0">
            {featuredBlog ? (
              <>
                <img
                  alt={featuredBlog.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                  src={resolveBlogImage(featuredBlog, 0, imageBaseUrl)}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.16),rgba(15,29,41,0.72))]" />
                <div className="relative grid w-full gap-10 p-6 md:grid-cols-2 md:items-end md:p-12 lg:p-16">
                  <article className="glass-card rounded-xl p-6 md:p-9">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="rounded-sm bg-secondary px-3 py-1 font-label-md text-[10px] uppercase tracking-widest text-white">
                        Featured Insight
                      </span>
                      <span className="font-label-md text-[12px] uppercase tracking-[0.14em] text-on-surface-variant">
                        {getReadTime(featuredBlog)}
                      </span>
                    </div>
                    <h2 className="font-headline-md text-3xl leading-tight text-primary md:text-4xl">
                      {featuredBlog.title}
                    </h2>
                    <p className="mt-5 font-body-md leading-7 text-on-surface-variant">
                      {getSummary(featuredBlog, 210)}
                    </p>
                    <Link
                      className="mt-7 inline-flex items-center gap-2 font-label-md text-[12px] uppercase tracking-[0.14em] text-primary transition-all hover:gap-3 hover:text-secondary"
                      href={getBlogHref(featuredBlog)}
                    >
                      Access Full Report
                      <MdArrowForward aria-hidden="true" />
                    </Link>
                  </article>
                </div>
              </>
            ) : (
              <div className="relative w-full bg-primary p-10 text-white">
                <p className="font-headline-md text-3xl">
                  Publish your first blog from the admin panel.
                </p>
                <p className="mt-4 max-w-2xl font-body-md text-white/70">
                  Once backend blogs are published, the featured insight and
                  library will populate automatically.
                </p>
              </div>
            )}
          </div>
        </section>

        <section
          id="blog-library"
          className="mx-auto max-w-container-max px-gutter py-12"
        >
          <div className="grid gap-5 border-b border-outline-variant/40 pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,340px)] lg:items-start">
            <div className="min-w-0">
              <div className="mb-3 flex min-h-4 items-center justify-between gap-4">
                <p className="font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">
                  Browse by category
                </p>
                <span className="hidden font-label-md text-[10px] uppercase tracking-[0.14em] text-primary/42 sm:inline">
                  Scroll sideways
                </span>
              </div>

              <div className="relative overflow-hidden rounded-full border border-primary/8 bg-white/78 p-1.5 shadow-[0_16px_40px_rgba(0,26,51,0.06)]">
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-[linear-gradient(to_left,rgba(255,255,255,0.96),transparent)]" />
                <div className="blog-category-strip blog-category-strip-compact flex min-w-0 gap-2 overflow-x-auto pr-8">
                  {categoryTabs.map((category) => {
                    const isActive = selectedCategoryId === category._id;

                    return (
                      <button
                        key={category._id}
                        type="button"
                        aria-pressed={isActive}
                        className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 font-label-md text-sm transition-all ${
                          isActive
                            ? "bg-primary text-on-primary shadow-[0_16px_30px_rgba(0,26,51,0.16)]"
                            : "bg-surface-container-low text-primary hover:bg-surface-container-high"
                        }`}
                        onClick={() => selectCategory(category._id)}
                      >
                        {toTitleCase(category.name)}
                        <span
                          className={
                            isActive
                              ? "ml-2 text-white/58"
                              : "ml-2 text-primary/42"
                          }
                        >
                          {category.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <label className="relative block min-w-0">
              <span className="mb-3 flex min-h-4 items-center font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">
                Search archive
              </span>
              <input
                className="h-[54px] w-full rounded-full border border-primary/8 bg-white/88 px-5 pr-12 font-body-md text-primary shadow-[0_16px_40px_rgba(0,26,51,0.06)] outline-none transition-all placeholder:text-outline focus:border-secondary/45 focus:ring-4 focus:ring-secondary/10"
                placeholder="Search archive..."
                type="search"
                value={searchTerm}
                onChange={(event) => updateSearch(event.target.value)}
              />
              {searchTerm ? (
                <button
                  type="button"
                  aria-label="Clear search"
                  className="absolute right-4 bottom-3.5 text-outline transition-colors hover:text-primary"
                  onClick={() => updateSearch("")}
                >
                  <MdClose aria-hidden="true" className="text-2xl" />
                </button>
              ) : (
                <MdSearch
                  aria-hidden="true"
                  className="absolute right-4 bottom-3.5 text-2xl text-outline"
                />
              )}
            </label>
          </div>
        </section>

        <section
          id="insight-grid"
          className="mx-auto max-w-container-max scroll-mt-32 px-gutter pb-section-padding-desktop"
        >
          <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="font-label-md text-[11px] uppercase tracking-[0.18em] text-secondary">
                {toTitleCase(activeCategory?.name ?? "All Insights")}
              </p>
              <h2 className="mt-2 font-headline-md text-3xl text-primary md:text-4xl">
                Executive insights archive
              </h2>
            </div>
            <p className="font-label-md text-[11px] uppercase tracking-[0.16em] text-primary/55">
              Showing {visibleStart}-{visibleEnd} of {filteredBlogs.length}
            </p>
          </div>

          {filteredBlogs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3">
                {paginatedBlogs.map((blog, index) => {
                  const globalIndex =
                    (safeCurrentPage - 1) * blogsPerPage + index;

                  return (
                    <Link
                      key={blog._id}
                      href={getBlogHref(blog)}
                      className="group flex min-w-0 flex-col"
                    >
                      <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-lg border border-outline-variant/20 shadow-sm">
                        <img
                          alt={blog.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          src={resolveBlogImage(
                            blog,
                            globalIndex,
                            imageBaseUrl
                          )}
                        />
                        <div className="absolute left-4 top-4">
                          <span className="rounded-sm bg-primary/90 px-3 py-1 font-label-md text-[10px] uppercase tracking-widest text-white backdrop-blur-md">
                            {getCategoryName(blog)}
                          </span>
                        </div>
                      </div>
                      <div className="mb-3 flex items-center gap-4 font-label-md text-[12px] uppercase tracking-[0.13em] text-on-surface-variant/70">
                        <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
                        <span className="h-1 w-1 rounded-full bg-outline" />
                        <span>{getReadTime(blog)}</span>
                      </div>
                      <h3 className="overflow-wrap-anywhere font-headline-sm text-2xl leading-tight text-primary transition-colors group-hover:text-secondary">
                        {blog.title}
                      </h3>
                      <p className="mt-4 line-clamp-3 font-body-md text-on-surface-variant">
                        {getSummary(blog, 160)}
                      </p>
                      <div className="mt-5 inline-flex items-center gap-2 font-label-md text-[12px] uppercase tracking-[0.14em] text-secondary transition-all group-hover:gap-3">
                        Read Insight
                        {globalIndex === 0 ? (
                          <MdTrendingUp aria-hidden="true" />
                        ) : (
                          <MdArticle aria-hidden="true" />
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>

              {totalPages > 1 ? (
                <div className="mt-20 flex flex-wrap items-center justify-center gap-4">
                  <button
                    type="button"
                    disabled={safeCurrentPage === 1}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant text-outline transition-all hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-35"
                    onClick={() => goToPage(safeCurrentPage - 1)}
                  >
                    <MdChevronLeft aria-hidden="true" className="text-2xl" />
                  </button>

                  <div className="flex flex-wrap justify-center gap-2">
                    {paginationItems.map((item) =>
                      typeof item === "number" ? (
                        <button
                          key={item}
                          type="button"
                          className={`flex h-10 min-w-10 items-center justify-center rounded-lg px-3 font-label-md transition-colors ${
                            safeCurrentPage === item
                              ? "bg-primary text-on-primary"
                              : "text-primary hover:bg-surface-container"
                          }`}
                          onClick={() => goToPage(item)}
                        >
                          {item}
                        </button>
                      ) : (
                        <span
                          key={item}
                          className="flex h-10 min-w-10 items-center justify-center rounded-lg px-3 font-label-md text-outline"
                        >
                          ...
                        </span>
                      )
                    )}
                  </div>

                  <button
                    type="button"
                    disabled={safeCurrentPage === totalPages}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant text-outline transition-all hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-35"
                    onClick={() => goToPage(safeCurrentPage + 1)}
                  >
                    <MdChevronRight aria-hidden="true" className="text-2xl" />
                  </button>
                </div>
              ) : null}
            </>
          ) : (
            <div className="rounded-xl border border-dashed border-secondary/30 bg-white p-10 text-center">
              <p className="font-headline-sm text-2xl text-primary">
                No published insights match this view.
              </p>
              <p className="mx-auto mt-3 max-w-xl font-body-md text-on-surface-variant">
                Adjust the category or search term. New backend blogs will
                appear here as soon as they are published.
              </p>
            </div>
          )}
        </section>

        <section className="bg-tertiary-container py-section-padding-desktop">
          <div className="mx-auto max-w-container-max px-gutter text-center">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display-lg text-display-lg-mobile text-white md:text-display-lg">
                The Strategic Briefing
              </h2>
              <p className="mt-6 font-body-lg text-white/70">
                Need the private context behind a public insight? Bring the
                question to our advisory desk and we will turn it into a clear
                next step.
              </p>
              <Link
                href={routes.contact}
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-secondary-fixed-dim px-8 py-4 font-label-md text-[12px] uppercase tracking-[0.14em] text-on-secondary-fixed shadow-lg transition-all hover:bg-secondary-container"
              >
                Request Briefing
                <MdArrowForward aria-hidden="true" />
              </Link>
              <p className="mt-6 font-label-md text-[12px] uppercase tracking-[0.18em] text-on-tertiary-container">
                Secure, discreet, and built around your operating reality.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
