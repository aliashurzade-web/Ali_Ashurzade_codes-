const ui = {
  category: document.getElementById('category'),
  stock:    document.getElementById('stock'),
  image:    document.getElementById('image'),
  preview:  document.getElementById('preview'),
  addBtn:   document.getElementById('addBtn'),
  tbody:    document.getElementById('tableBody'),
};

const randomCode = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const prefix = Array.from({ length: 3 }, () =>
    alphabet.charAt(Math.floor(Math.random() * alphabet.length))
  ).join('');
  const suffix = Math.floor(Math.random() * 900) + 100;
  return `${prefix}${suffix}`;
};

const hidePreview = () => {
  ui.preview.hidden = true;
  ui.preview.removeAttribute('src');
};

const makeCell = (content) => {
  const td = document.createElement('td');
  if (content instanceof Node) td.appendChild(content);
  else td.textContent = content;
  return td;
};

const makeThumbnail = (src, alt) => {
  if (!src) return '';
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  return img;
};

const buildRow = ({ category, stock, image }) => {
  const tr = document.createElement('tr');
  tr.append(
    makeCell(randomCode()),
    makeCell(category),
    makeCell(`${stock} ədəd`),
    makeCell(makeThumbnail(image, category))
  );
  return tr;
};

const resetForm = () => {
  ui.category.value = '';
  ui.stock.value = '';
  ui.image.value = '';
  hidePreview();
  ui.category.focus();
};

const handleAdd = () => {
  const data = {
    category: ui.category.value,
    stock:    ui.stock.value,
    image:    ui.image.value,
  };

  if (!data.category || !data.stock) {
    alert('Zəhmət olmasa Kateqoriya və Stok Sayı sahələrini doldurun.');
    return;
  }

  ui.tbody.appendChild(buildRow(data));
  resetForm();
};

// Image preview
ui.image.addEventListener('input', () => {
  const url = ui.image.value;
  if (url) ui.preview.src = url;
  else hidePreview();
});
ui.preview.addEventListener('load',  () => (ui.preview.hidden = false));
ui.preview.addEventListener('error', () => (ui.preview.hidden = true));

// Add product via button or Enter key
ui.addBtn.addEventListener('click', handleAdd);
for (const field of [ui.category, ui.stock, ui.image]) {
  field.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleAdd();
  });
}