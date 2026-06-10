/**
 * Prepend the Vite base URL to any /imgs/... path.
 * Works both in local dev (base = '/') and GitHub Pages (base = '/portfolio/').
 *
 * Usage:
 *   import img from '../utils/imgPath';
 *   <img src={img('/imgs/kv-bg.svg')} />
 */
const BASE = import.meta.env.BASE_URL; // e.g. '/' or '/portfolio/'

export default function img(path) {
  // path should start with '/' — strip it so we don't double-slash
  return BASE.replace(/\/$/, '') + path;
}
