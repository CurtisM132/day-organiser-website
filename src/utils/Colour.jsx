/**
 * Lightens or darkens a Hex colour code
 * @param {string} colour Hex colour
 * @param {number} amount Amount to lighten (positive) or darken (negative)
 */
export function colorShade(colour, amount) {
  let col = colour.replace(/^#/, '');
  if (col.length === 3) col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2];

  let [r, g, b] = col.match(/.{2}/g);
  ([r, g, b] = [parseInt(r, 16) + amount, parseInt(g, 16) + amount, parseInt(b, 16) + amount]);

  r = Math.max(Math.min(255, r), 0).toString(16);
  g = Math.max(Math.min(255, g), 0).toString(16);
  b = Math.max(Math.min(255, b), 0).toString(16);

  const rr = (r.length < 2 ? '0' : '') + r;
  const gg = (g.length < 2 ? '0' : '') + g;
  const bb = (b.length < 2 ? '0' : '') + b;

  return `#${rr}${gg}${bb}`;
}

/**
 * Converts RGB code to a Hex code
 * @param {string} rgb RGB code
 */
export function rgbToHex(rgb) {
  // If the rbg character is actually a hex then do nothing
  if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

  const rgbArray = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  function hex(x) {
    return (`0${parseInt(x, 10).toString(16)}`).slice(-2);
  }

  return `#${hex(rgbArray[1])}${hex(rgbArray[2])}${hex(rgbArray[3])}`;
}
