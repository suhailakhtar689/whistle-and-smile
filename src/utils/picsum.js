async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Unable to fetch from ${url}`);
  }
  return response.json();
}

export async function fetchPicsumPhotos(page = 1, limit = 1) {
  return fetchJson(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
}

export async function fetchPosts(limit = 5) {
  return fetchJson(`https://dummyjson.com/posts?limit=${limit}`);
}

export async function fetchProducts(limit = 5) {
  return fetchJson(`https://dummyjson.com/products?limit=${limit}`);
}

export function buildPicsumUrl(id, width = 400, height = 300) {
  return `https://picsum.photos/id/${id}/${width}/${height}`;
}

export function keywordImageUrl(width = 400, height = 300, query = 'smile,teeth') {
  const seed = encodeURIComponent(
    query
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
  );
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}

export function randomPicsumUrl(width = 400, height = 300) {
  return `https://picsum.photos/${width}/${height}?random=${Date.now()}`;
}
