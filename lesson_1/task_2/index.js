function table() {
  const obj = document.querySelector('table');
  const trs = obj.querySelectorAll('tr');
  const keis = getValuesFromTr(trs[0], 'th');
  const table = {};
  for (let i = 1; i < trs.length; i++) {
    const tr = {};
    const values = getValuesFromTr(trs[i], 'td');
    keis.forEach((key, index) => {
      tr[key] = values[index];
    });
    table[i] = tr;
  }
  console.table(table);
}

function getValuesFromTr(tr, tag) {
  const result = [];
  const items = tr.querySelectorAll(tag);
  items.forEach((item) => result.push(item.innerHTML));
  return result;
}

table();
