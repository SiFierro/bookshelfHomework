/**
 * @param {string[]} topics
 * @param {string} paragraph
 * @returns whether the given paragraph contains any of the given topics
 */
const isRelevant = (topics, paragraph) => {
  for (const topic of topics) {
    if (paragraph.includes(topic)) {
      return true;
    }
  }
  return false;
};

/**
 * @param {string[]} topics
 * @returns a function that takes a string and returns whether
 * that string is relevant to the given topics
 */
const about = (topics) => (paragraph) => isRelevant(topics, paragraph);

/**
 * Take an array of sentences and return only the sentences
 * that meet certain criteria
 * @param {(sentence: string) => boolean} criteriaFn
 * @param {string[]} sentences
 * @returns a subset of sentences for which criteriaFn returns true
 */
const getRelevantSentences = (criteriaFn, sentences) => {
  const relevantSentences = [];
  for (const sentence of sentences) {
    if (criteriaFn(sentence)) {
      relevantSentences.push(sentence);
    }
  }
  return relevantSentences;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @returns the absolute difference in length between s1 and s2
 */
const getLengthDistance = (s1, s2) => Math.abs(s1.length - s2.length);

/**
 * @param {string[]} words
 * @param {string} word
 * @param {number} limit
 * @returns the word in words with the minimum difference in length,
 * unless that difference is greater than the limit, in which case
 * the original word will be returned.
 */
const getClosestInLength = (words, word, limit) => {
  let closestWord = word;
  let minDistance = Number.MAX_VALUE;

  // Find closest word
  for (const w of words) {
    const distance = getLengthDistance(w, word);
    if (distance < minDistance) {
      minDistance = distance;
      closestWord = w;
    }
  }

  // Check against limit
  return minDistance <= limit ? closestWord : word;
};

/**
 * Recursive equality check of two strings.
 * @param {string} s1
 * @param {string} s2
 * @returns whether str1 is the same as str2
 */
const isSame = (s1, s2) => {
  // Base cases

  // Both empty
  if (s1.length === 0 && s2.length === 0) {
    return true;
  }

  // Different lengths
  if (s1.length !== s2.length) {
    return false;
  }

  // Different first letter
  if (s1[0] !== s2[0]) {
    return false;
  }

  // Recursive case
  // Check if the rest of the strings are the same
  return isSame(s1.slice(1), s2.slice(1));
};

/**
 * Find the number of operations needed
 * to convert one string into another.
 * The possible operations are:
 * - add a character to s1
 * - remove a character from s1
 * - substitute a character in s1
 * @param {string} s1
 * @param {string} s2
 * @returns the edit distance between s1 and s2
 */
const getEditDistance = (s1, s2) => {
  // Base cases

  // same strings
  if (s1 === s2) return 0;

  // both strings empty
  if (!s1 && !s2) return 0;

  // exactly one string empty
  if (!s1 || !s2) return Math.abs(s1.length - s2.length);

  // same first letter -> 0 edits
  if (s1[0] === s2[0]) return getEditDistance(s1.slice(1), s2.slice(1));

  // Recursive case
  // The first letters are different, so try all 3 possible edits.

  const add = getEditDistance(s1, s2.slice(1));
  const remove = getEditDistance(s1.slice(1), s2);
  const substitute = getEditDistance(s1.slice(1), s2.slice(1));

  // Return the minimum found edit distance + 1 for current edit
  return Math.min(add, remove, substitute) + 1;
};

/**
 * @param {string[]} words
 * @param {string} word
 * @param {(s1: string, s2: string) => number} distanceFn
 * @param {number} limit
 * @returns the word in words with the minimum distance calculated
 * by the distance function, unless that difference is greater than
 * the limit, in which case the original word will be returned.
 */
const getClosestWord = (words, word, distanceFn, limit) => {
  let closestWord = word;
  let minDistance = Number.MAX_VALUE;

  // Find closest word
  for (const w of words) {
    const distance = distanceFn(w, word); // Only this line has changed
    if (distance < minDistance) {
      minDistance = distance;
      closestWord = w;
    }
  }

  // Check against limit
  return minDistance <= limit ? closestWord : word;
};
