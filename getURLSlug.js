// this comment is a hotfix
export default function getURLSlug(words) {
  return words
    .replace(/\s+/g, '-')
    .toLowerCase();
}
