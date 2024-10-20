import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

/**
 * Converts a Quill Delta (JSON string or object) to HTML.
 * @param {string | object} deltaInput - The Delta object or JSON string to be converted to HTML.
 * @returns {string} The converted HTML string.
 */
export const convertDeltaToHtml = (deltaInput: string | object): string => {
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
