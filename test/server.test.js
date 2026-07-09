const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');

test('hub files exist', () => {
  assert.ok(fs.existsSync(path.join(root, 'server.js')));
  assert.ok(fs.existsSync(path.join(root, 'public', 'index.html')));
  assert.ok(fs.existsSync(path.join(root, 'public', 'style.css')));
});

test('hub links to all four games', () => {
  const html = fs.readFileSync(path.join(root, 'public', 'index.html'), 'utf8');
  assert.match(html, /online-shichinarabe-standard\.onrender\.com/);
  assert.match(html, /online-daifugo-standard\.onrender\.com/);
  assert.match(html, /online-babanuki-standard\.onrender\.com/);
  assert.match(html, /online-blackjack-standard\.onrender\.com/);
});
