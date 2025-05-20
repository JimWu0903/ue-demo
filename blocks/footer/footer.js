import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  console.log('✅ Custom footer.js loaded and executed at', new Date().toISOString());

  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  // 測試：加一段驗證訊息
  const testNote = document.createElement('div');
  testNote.textContent = '🧪 Footer loaded from GitHub';
  testNote.style.cssText = 'background:#e3f2fd;color:#1565c0;padding:4px;margin-top:10px;font-size:12px;';
  footer.appendChild(testNote);

  block.append(footer);
}
