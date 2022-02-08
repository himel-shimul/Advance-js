const students = [
    {id: 22, name: 'Jack'},
    {id: 32, name: 'Mack'},
    {id: 42, name: 'Nack'},
    {id: 62, name: 'Lack'},
    {id: 82, name: 'xack'}
]

const names = students.map( s => s.name);
const ids = students.map( s=> s.id);
const bigger = students.filter( s=> s.id>40);
const biggerOne = students.find( s=> s.id>40);

console.log(biggerOne);