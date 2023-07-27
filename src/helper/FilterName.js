export function FilterName(items, name) {
 name = name.toLowerCase();
 const isname = name.trim()
 return items.filter(item =>
  item.name.toLowerCase().includes(isname)
 )
}