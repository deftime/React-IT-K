export function required(value) {
  if (value) {
    return undefined;
  } else {
    return 'Field is required!';
  }
}

export let maxChars25 = maxChars(25);
export let maxChars50 = maxChars(50);
export let minChars3 = minChars(3);

function maxChars(max) {
  return function(value) {
    if (value && value.length > max) {
      return [`Max chars are ${max}!`, true];
    } else {
      return undefined;
    }
  }
}

function minChars(min) {
  return function(value) {
    if (value && value.length < min) {
      return `Minimum chars are ${min}!`;
    } else {
      return undefined;
    }
  }
}

// export {maxChars10, maxChars50};
