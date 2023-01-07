///////////Question no  1 
const diagonalSumAndProduct = (mat, n) => {
  let principalSum = 0, secondarySum = 0, principalProduct = 1, secondaryProduct = 1;
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {

          if (i == j){
              principalSum += mat[i][j];
              principalProduct *= mat[i][j];
          }

          if ((i + j) == (n - 1)){
              secondarySum += mat[i][j];
              secondaryProduct *= mat[i][j];
          }
      }
  }
  return {sum:{primary:principalSum, secondary:secondarySum},product:{principal:principalProduct,secondary:secondaryProduct}}
}

let a = [ [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ] 
      ];

console.log(diagonalSumAndProduct(a,3))



/////////////// Question no 2

const multiplyMatrices = (m1, m2) => {
  var result = [];
  for (var i = 0; i < m1.length; i++) {
      result[i] = [];
      for (var j = 0; j < m2[0].length; j++) {
          var sum = 0;
          for (var k = 0; k < m1[0].length; k++) {
              sum += m1[i][k] * m2[k][j];
          }
          result[i][j] = sum;
      }
  }
  return result;
}


const m1 = [
  [2, 4, 4, 4],
  [3, 2, 2, 2],
  [1, 5, 9, 1],
  [5, 5, 5, 5]
];
const m2 = [
  [2, 4, 4, 4],
  [3, 2, 2, 2],
  [1, 5, 9, 1],
  [5, 5, 5, 5]
];

console.log(multiplyMatrices(m1, m2))


///////////////Question 3

const object = {
  parent_name: 'Father',
  child1: 'Sumair'
};

const array = ["Hamza","Shahbaz","Jahanzaib","Junaid","Tabish","Ahtisham","Asghar"];

array.forEach((child,index)=>{
  object[`child${index+2}`] = child
})


console.log(object);



////////////question 4 

  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))