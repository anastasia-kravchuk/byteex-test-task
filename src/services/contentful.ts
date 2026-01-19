const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const TOKEN = import.meta.env.VITE_CONTENTFUL_TOKEN;

if (!SPACE_ID || !TOKEN) {
  throw new Error('Missing Contentful environment variables');
}

const BASE_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master`;

export async function fetchEntries<T>(contentType: string): Promise<T> {
  const responce = await fetch(`${BASE_URL}/entries?content_type=${contentType}&include=2&access_token=${TOKEN}`);

  if (!responce.ok) {
    throw new Error('Failed to fetch entries from Contentful');
  }

  const data = await responce.json();
  return data;
}