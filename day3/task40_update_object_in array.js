const arr = [ {id:1,name:'A'}, {id:2,name:'B'} ];
function updateById(list, id, patch) {
  return list.map(item => item.id===id ? { ...item, ...patch } : item);
}
console.log('task40 updated:', updateById(arr,2,{name:'B2'}));
export { updateById };