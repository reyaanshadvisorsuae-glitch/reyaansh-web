export type BlogCategory = {
  _id: string;
  createdAt?: string;
  description?: string;
  name: string;
  status?: boolean;
  updatedAt?: string;
};

export type BlogPost = {
  _id: string;
  author?: string;
  category?: BlogCategory | string;
  content?: string;
  coverImage?: string;
  createdAt?: string;
  excerpt?: string;
  featureImage?: string;
  featuredImage?: string;
  image?: string;
  imageUrl?: string;
  publishedAt?: string | null;
  pdfFileName?: string;
  pdfPublicId?: string;
  pdfUrl?: string;
  slug?: string;
  status?: boolean;
  thumbnail?: string;
  title: string;
  updatedAt?: string;
};

const fallbackBlogImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuANhwrtfW_KRavrv5WmhtUQRLdw-VKBMkoVKT3VYvZIpM8mFAnS8hKfaCNYev3cVx489eTZOOmrIpohWgNJXYm8z4ssRH_IG5Kk2c4z9S_W3m0EbdNBDXP61jr9AXC2NB6DVo0GCeI28_mUCOZlwpiu6cNrYYGfWUi4KD-pBUIax1YHbvDeRx9-FD81DJFK7sfwnMyX8KKTKltdwgkDCUpcrWUISnI6CQvwRhFaDTJiw1FZyXISu05EG6W6aIXrpg-q8kWkPCRYojOd",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDnfiRzKFZ60V8pVLHNDFIgw0hPwT-3fGUZPNUKs7_XqqM6biwNfaCw6A7yvhwuGH5U3yq2f4fkjjOkolhusaLwlOxaOHz4zRfMnXzc_igzijXriohW75TVdULsvppiBhbE_KEXt7rqktL1dI-_7Zo-iwq--H6Ok-iZZ3Ojg3AbykG-EUEgOMPy2W2A0fNp1Q4t4-HmCckKdJYbF4rz6x3OKmntRqu955ARqFRT02x8Mw2k79djmw-LzVYl9laO9Kqx_5G_nyUQ9mAB",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDlRZP3TReX4eRwqE2WIygCCneZ7xMoS3JBaBnD8MrFDVhQK8f9QPo_OBHeRsc_7UGvlb-ySwgCqtbnP7D5r4Ds420EwWf5zqNil8QUHaSOFKTU_w5rorjS7ks21zJMSrLmOBJwaXYQsNbkPTuVQYxl6mGrmM0Cxd7TBvJ5hHAXS5u1fnd_3Zt5SZiSaLPHsVNXHOJWMsYhaDwGsvC_oMuE3Xmkv4W-r6gLRjNMMvFx8GtTdFw71Ytpp4LggDbuGDX2M5yxxafgooiY",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAbMMt7-vWs14veN4WUhgbimz2INqm-P9sgwrugweEGfoPYG31aVvv49guQZikOg58Y_CYbzmLYXJdWK-8Q4CMu0nHru3r2OfPcuJWugn4084K5v7QXhY17e6pwPzsp9WkqnUXg53sqeUVzec2oCYlk02aoZbVr-NPFw5_-3fNdZWDRPIi8DCR3e7fYbklRJ9LJGMVPx9SnnEr58sTytC3b310H5-7WjN_v2L8bjOaeh-2ljDmzcSG1kwOvBv4BD6MZs4UlIMEg6rk1",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBsfnSptUtb-LoGn-wRrfgqJraltn62OKrzldUSo39_8kFuBqzF7S4Zqc_KqckKatD9XY06GUytI4AHpf0RqxlMk9ZDT1KCjkWIJyjeR-Sqcy0sJ8_4R16V1M0H1Oi1m_hl_LgIXt34ttwG9YcCPzh1aEtoqspibp4P7rTPa6ZS3fJH9HMgqpSYt5I1OhmEej46aCuNoBpx02lfD1ddXzwivVpEiVW-aDgpeILDVc6UiCQ22CQmsAGHxtYgIrDISoOVDVgnJFnGYHdh",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC1msrgNUANtdDzP-GMZ07kwYBbaTBx9YUTBnpxs3uL3zXwWlZHe7qvly7q73PPgmf5sy7ryRmPTtPRiGvzaak9w8BvM1tl28uIeEauh5ct9hupl7oEFHnzZ36aT4JQMVb8Pp7GY8VOSAYC2S9lNcvTXCJF26gceAKQgyOBmhFHXmaWHzZcCJDpu0U-OFSTAnsQqaXIahrPTi_QWYXB5_868VY_dmblcoFza7MkUoefcycOTzllsXQmevOf_e-QnpNGf5Ly33oXU6YT",
];

export function stripHtml(value = "") {
  return value
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function toTitleCase(value = "") {
  return value
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getCategoryId(blog: BlogPost) {
  return typeof blog.category === "string" ? blog.category : blog.category?._id;
}

export function getCategoryName(blog: BlogPost) {
  const category =
    typeof blog.category === "string" ? "" : blog.category?.name ?? "";

  return category ? toTitleCase(category) : "Advisory";
}

export function getSummary(blog: BlogPost, maxLength = 180) {
  const text = blog.excerpt?.trim() || stripHtml(blog.content);

  if (!text) return "A Reyaansh advisory note is ready for review.";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

export function getReadTime(blog: BlogPost) {
  const text = `${blog.excerpt ?? ""} ${stripHtml(blog.content)}`.trim();
  const words = text ? text.split(/\s+/).length : 0;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

export function formatDate(value?: string | null) {
  if (!value) return "Recently published";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Recently published";

  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function getBlogHref(blog: BlogPost) {
  return `/blogs/${encodeURIComponent(blog.slug || blog._id)}`;
}

function getRawImage(blog: BlogPost) {
  return (
    blog.coverImage ||
    blog.featureImage ||
    blog.featuredImage ||
    blog.image ||
    blog.imageUrl ||
    blog.thumbnail ||
    ""
  );
}

export function resolveImageUrl(image: string, imageBaseUrl?: string) {
  if (!image) return "";
  if (/^https?:\/\//i.test(image) || image.startsWith("data:")) return image;

  if (imageBaseUrl) {
    const cleanBase = imageBaseUrl.replace(/\/$/, "");
    const cleanPath = image.startsWith("/") ? image : `/${image}`;
    return `${cleanBase}${cleanPath}`;
  }

  return image.startsWith("/") ? image : `/${image}`;
}

export function resolveBlogImage(
  blog: BlogPost,
  index = 0,
  imageBaseUrl?: string
) {
  const image = resolveImageUrl(getRawImage(blog), imageBaseUrl);
  return image || fallbackBlogImages[index % fallbackBlogImages.length];
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function getBlogContentHtml(content = "") {
  const trimmed = content.trim();
  if (!trimmed) return "";
  if (/<\/?[a-z][\s\S]*>/i.test(trimmed)) return trimmed;

  return trimmed
    .split(/\n{2,}/)
    .map((paragraph) => {
      const formatted = escapeHtml(paragraph.trim()).replace(/\n/g, "<br />");
      return formatted ? `<p>${formatted}</p>` : "";
    })
    .filter(Boolean)
    .join("");
}
