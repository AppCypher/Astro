// Stringifies and pretty prints all kinds of values including arrays and objects.
export const print = (...s) => {
  if (s.length === 1) {
    if (typeof (s[0]) === 'string') {
      console.log(s[0]);
    } else {
      console.log(JSON.stringify(s[0], null, 2));
    }
  } else {
    const result = s
      .map(e => (typeof (e) === 'string' ? e : JSON.stringify(e)))
      .join('');
    console.log(result);
  }
};

// Checks if both the object and its properties are not undefined or null,
// if they are not, it returns the property, otherwise it returns null.
// PEGjs returns null for unmatched rule or terminal.
export const safeAccess = (obj, ...prop) => {
  if (obj === null || obj === undefined) return null;
  for (let p of prop) {
    if (obj[p] === null || obj[p] === undefined) return null;
    obj = obj[p];
  }
  return obj;
}

// Removes null or undefined values from an array.
export const removeNulls = a => a.filter(x => x != null);

// Strips '_' in a string.
export const removeUnderscores = s => s.replace(/_/g, '');

// Stringifies an array and cleans up the resulting commas.
// PEGjs tokenizer output can be an array containing tokens, nulls and empty arrays.
export const stringify = a => a.toString().replace(/,/g, "").trim();
