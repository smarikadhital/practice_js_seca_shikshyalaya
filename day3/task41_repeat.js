export function repeat(action, times) {
  for (let i=0;i<times;i++) action(i);
}
repeat(i=>console.log('task41 repeat iteration',i),3);