export function getApiBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8080"
  ).replace(/\/$/, "");
}

const PDF_VIEW_PARAMS = "#navpanes=0&view=FitH";

function getPdfProxyUrl(url: string, download = false) {
  const base = `${getApiBaseUrl()}/api/upload/pdf/view?url=${encodeURIComponent(url)}`;
  return download ? `${base}&download=1` : `${base}${PDF_VIEW_PARAMS}`;
}

export function getPdfEmbedUrl(url?: string) {
  if (!url) return "";
  if (url.includes("res.cloudinary.com")) {
    return getPdfProxyUrl(url);
  }
  return `${url}${PDF_VIEW_PARAMS}`;
}

export function getPdfDownloadUrl(url?: string) {
  if (!url) return "";
  if (url.includes("res.cloudinary.com")) {
    return getPdfProxyUrl(url, true);
  }
  return url;
}
