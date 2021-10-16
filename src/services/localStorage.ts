async function setItem(key: any, value: any) {
  await localStorage.setItem(key, value);
}

async function getItem(key: any) {
  const value = await localStorage.getItem(key);
  return value;
}

async function removeItem(key: any) {
  await localStorage.removeItem(key);
}

async function keys() {
  const { keys } = await localStorage.keys();
  return keys
}

async function clear() {
  await localStorage.clear();
}

export default { setItem, getItem, removeItem, keys, clear }