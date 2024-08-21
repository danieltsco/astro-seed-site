import contentful from 'contentful';

// Log environment variables for debugging
console.log('Space ID:', import.meta.env.CONTENTFUL_SPACE_ID);
console.log('Access Token:', import.meta.env.CONTENTFUL_ACCESS_TOKEN);

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
