// this comment is a hotfix
function getURLSlug(words) {
  return words
    .replace(/\s+/g, '-')
    .toLowerCase();
}
