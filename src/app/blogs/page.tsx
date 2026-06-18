import type { Metadata } from "next";
import { BlogsPage } from "@/components/blogs-page";
import {
  fetchPublicBlogCategories,
  fetchPublicBlogs,
  getApiBaseUrl,
} from "@/lib/blog-api";

export const metadata: Metadata = {
  description:
    "Read Reyaansh Advisors blogs and UAE advisory insights across setup, tax, VAT, accounting, audit, and AML compliance.",
  title: "Blogs | Reyaansh Advisors",
};

export const dynamic = "force-dynamic";

export default async function Page() {
  const apiBaseUrl = getApiBaseUrl();
  const [blogs, categories] = await Promise.all([
    fetchPublicBlogs(),
    fetchPublicBlogCategories(),
  ]);

  return (
    <BlogsPage
      blogs={blogs}
      categories={categories}
      imageBaseUrl={apiBaseUrl}
    />
  );
}
