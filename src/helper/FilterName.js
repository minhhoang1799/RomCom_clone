export function FilterName(items, name) {
 name = name.toLowerCase();
 return items.filter(item =>
  item.name.split(' ').some(word =>
   word.toLowerCase().startsWith(name)
  )
 );
}