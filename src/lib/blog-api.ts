import type { BlogCategory, BlogPost } from "@/lib/blog-utils";

const apiTimeoutMs = 5000;

type ApiCollectionResponse<T> = {
  data?: {
    result?: T[];
  };
  result?: T[];
  success?: boolean;
};

type ApiItemResponse<T> = {
  data?: T;
  success?: boolean;
};

export function getApiBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_BASE_URL ||
    "http://localhost:8080"
  ).replace(/\/$/, "");
}

function createFetchSignal() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), apiTimeoutMs);

  return {
    clear: () => clearTimeout(timeout),
    signal: controller.signal,
  };
}

export async function fetchApiCollection<T>(path: string) {
  const request = createFetchSignal();

  try {
    const response = await fetch(`${getApiBaseUrl()}/${path}`, {
      cache: "no-store",
      signal: request.signal,
    });

    if (!response.ok) return [];

    const payload = (await response.json()) as ApiCollectionResponse<T>;
    return payload?.data?.result ?? payload?.result ?? [];
  } catch {
    return [];
  } finally {
    request.clear();
  }
}

export async function fetchApiItem<T>(path: string) {
  const request = createFetchSignal();

  try {
    const response = await fetch(`${getApiBaseUrl()}/${path}`, {
      cache: "no-store",
      signal: request.signal,
    });

    if (!response.ok) return null;

    const payload = (await response.json()) as ApiItemResponse<T>;
    return payload?.data ?? null;
  } catch {
    return null;
  } finally {
    request.clear();
  }
}

export function fetchPublicBlogs(limit = 100) {
  const params = new URLSearchParams({
    limit: String(limit),
    page: "1",
    sortDir: "desc",
    sortKey: "publishedAt",
  });

  return fetchApiCollection<BlogPost>(`api/blog/public?${params.toString()}`);
}

export function fetchPublicBlogCategories(limit = 100) {
  const params = new URLSearchParams({
    limit: String(limit),
    page: "1",
    sortDir: "asc",
    sortKey: "name",
  });

  return fetchApiCollection<BlogCategory>(
    `api/blog-category/public?${params.toString()}`
  );
}

export function fetchPublicBlog(identifier: string) {
  return fetchApiItem<BlogPost>(
    `api/blog/public/${encodeURIComponent(identifier)}`
  );
}
