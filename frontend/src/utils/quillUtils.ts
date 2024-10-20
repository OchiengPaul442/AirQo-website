import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

/**
 * Checks if a string is valid HTML.
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string looks like HTML, false otherwise.
 */
const isHtml = (str: string): boolean => {
  const trimmedStr = str.trim();
  return (
    trimmedStr.startsWith('<') &&
    trimmedStr.endsWith('>') &&
    /<\/?[a-z][\s\S]*>/i.test(trimmedStr)
  );
};

/**
 * Converts a Quill Delta (JSON string, Delta object) to HTML or returns the HTML string if already provided.
 * @param {string | object} deltaInput - The Delta object, JSON string, or HTML string.
 * @returns {string} The HTML string.
 */
export const convertDeltaToHtml = (deltaInput: string | object): string => {
  // If the input is already a valid HTML string, return it as-is
  if (typeof deltaInput === 'string' && isHtml(deltaInput)) {
    return deltaInput; // Return HTML directly if the input looks like HTML
  }

  let delta;

  // Check if deltaInput is a JSON string, parse it to an object if necessary
  if (typeof deltaInput === 'string') {
    try {
      delta = JSON.parse(deltaInput); // Attempt to parse the JSON string
    } catch (error) {
      console.error('Invalid JSON string provided:', error);
      return ''; // Return an empty string if the input is invalid
    }
  } else {
    // Assume it's already a Delta object
    delta = deltaInput;
  }

  // Ensure the parsed delta has an ops array
  if (!delta || !delta.ops) return '';

  // Convert the Delta object to HTML using QuillDeltaToHtmlConverter
  const converter = new QuillDeltaToHtmlConverter(delta.ops, {});
  return converter.convert();
};
