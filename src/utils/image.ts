// Image utility functions for handling paths in Next.js

export const getImgPath = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/${cleanPath}`;
};

export const getDataPath = (path: string): string => {
  // Remove leading slash if present to avoid double slashes  
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/${cleanPath}`;
};