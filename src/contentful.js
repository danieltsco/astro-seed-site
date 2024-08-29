import contentful from 'contentful';

// Create the Contentful client
const client = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  environment: 'master', // Adjust if using a different environment
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN
});

// Function to get entries by content type
export async function getEntries(contentType) {
  try {
    const entries = await client.getEntries({ content_type: contentType });
    return entries;
  } catch (error) {
    console.error('Error fetching entries:', error);
    throw error;
  }
}
// Function to get a single entry by ID or slug
export async function getEntryBySlug(contentType, slug) {
  try {
    const entries = await client.getEntries({
      content_type: contentType,
      'fields.slug': slug,
      limit: 1
    });
    return entries.items.length ? entries.items[0] : null;
  } catch (error) {
    console.error('Error fetching entry by slug:', error);
    throw error;
  }
}