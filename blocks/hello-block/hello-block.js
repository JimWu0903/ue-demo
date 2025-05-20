export default function decorate(block) {
  console.log('✅ hello-block.js loaded!');
  const msg = document.createElement('div');
  msg.textContent = `📦 Custom block initialized at ${new Date().toLocaleTimeString()}`;
  msg.style.color = '#33691e';
  block.append(msg);
}
