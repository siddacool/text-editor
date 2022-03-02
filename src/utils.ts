export const formatStringToHTML = (value: string) =>
  value.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
