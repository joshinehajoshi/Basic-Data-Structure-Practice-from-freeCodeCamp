import './App.css';

let arr = [1,2,3,4,5,6,7,8,9]; 
arr.push(2);
let arr1 = [1,2,3,4,5,6,7,8,9,2]; 
arr1.pop();
let arr2 = [1,2,3,4,5,6,7,8,9];
arr2.unshift(2);
let arr3 = [2,1,2,3,4,5,6,7,8,9];
arr3.shift();
let arr4 = [1,2,3,4,5,6,7,8,9];
arr4.splice(0,3);
let arr5 = [1,2,3,4,5,6,7,8,9];
arr5.splice(0,1,2)
let arr6 = [1,2,3,4,5,6,7,8,9];
let arr7 = arr6.slice(2,5)
let arr8 = [1,2,3,4];
let arr9 = [...arr8];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic Data Structure Practice from Free Code Camp</h1>
        <h2>Push "2" at the end of array</h2>
        {JSON.stringify(arr)} .....# arr.push(2)
        <h2>Remove last element from the array</h2>
        {JSON.stringify(arr1)} .....# arr.pop()
        <h3>Push "2" at the starting of array</h3>
        {JSON.stringify(arr2)} .....# arr.unshift(2)
        <h3>Remove first element from starting of array </h3>
        {JSON.stringify(arr3)} .....# arr.shift()
        <h3>Remove first 3 items from array using splice(), arr = [1,2,3,4,5,6,7,8,9] </h3>
        {JSON.stringify(arr4)} .....# arr.splice(0,3)
        <h3>Remove first element from array using splice(), arr = [1,2,3,4,5,6,7,8,9] and add "2" </h3>
        {JSON.stringify(arr5)} .....# arr.splice(0,1,2)
        <h3>Slice arr (and copy that array in new array) from 3,4,5 in arr = [1,2,3,4,5,6,7,8,9]</h3>
        {JSON.stringify(arr7)} .....# arr.slice(2,5)
        <h3>Copy array using spread operator</h3>
        <h4>arr1 = [1,2,3,4]</h4>
        <h5>arr2 = [...arr1]</h5>
        arr2 = {JSON.stringify(arr9)}
       
      </header>
    </div>
  );
}

export default App;
