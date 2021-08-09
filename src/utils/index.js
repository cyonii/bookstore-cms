function makeRandomID(length) {
  const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const DIGITS = '0123456789';

  let id = LETTERS.charAt(Math.floor(Math.random() * LETTERS.length));

  for (let i = 0; i < length; i += 1) {
    if (Math.random() * 100 < 50) {
      id += LETTERS.charAt(Math.floor(Math.random() * LETTERS.length));
    } else {
      id += DIGITS.charAt(Math.floor(Math.random() * DIGITS.length));
    }
  }
  return id;
}

export default { makeRandomID };
