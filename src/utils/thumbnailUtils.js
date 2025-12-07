/**
 * Generate preview URL for live websites
 * Uses screenshot service to capture actual website preview
 * Note: Free screenshot APIs may have CORS/rate limit issues
 * Best practice: Add custom thumbnail URLs to project.json for reliability
 */
export const getWebsitePreviewUrl = (websiteUrl, width = 800, height = 480) => {
  if (!websiteUrl) return null;
  
  // Clean URL - remove trailing slash
  let cleanUrl = websiteUrl.replace(/\/$/, '').trim();
  
  // Ensure URL has protocol
  if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
    cleanUrl = 'https://' + cleanUrl;
  }
  
  // Using Microlink API - truly free tier with 50 requests/day, no signup required
  // Returns direct screenshot image URL with good CORS support
  return `https://api.microlink.io/?url=${encodeURIComponent(cleanUrl)}&screenshot&embed=screenshot.url&meta=false&viewport.width=${width}&viewport.height=${height}`;
  
  // Backup option 1: mini.s-shot.ru (Russian service, free, can be slow but works)
  // return `https://mini.s-shot.ru/${width}x${height}/JPEG/1024/?${cleanUrl}`;
  
  // Backup option 2: screenshot.rocks (free but sometimes slow)
  // return `https://api.screenshot.rocks/screenshot?url=${encodeURIComponent(cleanUrl)}&width=${width}&height=${height}`;
  
  // Last resort: Use a nice placeholder while screenshots are added manually
  // return `https://placehold.co/${width}x${height}/667eea/ffffff?text=${encodeURIComponent('Live Website')}`;
};

/**
 * Generate preview URL for GitHub repositories
 * Uses GitHub Open Graph image or screenshot service
 */
export const getGitHubRepoPreviewUrl = (githubUrl, width = 800, height = 480) => {
  if (!githubUrl) return null;
  
  // Extract username and repo name from GitHub URL
  const match = githubUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  if (!match) return null;
  
  const [, username, repo] = match;
  
  // Option 1: Use GitHub's Open Graph image (shows repo card with stars, description)
  // This is the most reliable and always works
  return `https://opengraph.githubassets.com/1/${username}/${repo}`;
  
  // Option 2: Use screenshot service for actual GitHub page preview (if needed)
  // return `https://api.microlink.io/screenshot?url=${encodeURIComponent(githubUrl)}&width=${width}&height=${height}`;
};

/**
 * Get thumbnail URL based on project type
 */
export const getThumbnailUrl = (project) => {
  // If project has a custom thumbnail, use it
  if (project.thumbnail) {
    return project.thumbnail;
  }
  
  // If it's a live website, generate website preview
  if (project.website) {
    return getWebsitePreviewUrl(project.website);
  }
  
  // If it's a GitHub repo, generate GitHub preview
  if (project.source && project.source.includes('github.com')) {
    return getGitHubRepoPreviewUrl(project.source);
  }
  
  return null;
};

