# Project: ES6 and Unit Tests 🧪🔬

This project was developed as part of the Trybe Web Development course, where I implemented various functions and unit tests to guarantee the reliability of the code. The project focused on the following objectives:

- Writing unit tests using NodeJS's Jest module to verify the proper functioning of the functions.
- Implementing functions that satisfy the provided tests.
- Adopting a test-driven development (TDD) methodology.

### ⚠️  This repository does not include all the function and tests files present in the original project since the tool used to make the copy from the original repository ommit and/or modify some of the files in order to comply with copyright restrictions.

## 📝 Installation
1. Clone the repository
2. Install the dependencies by running `npm install`
3. Run the tests by running `npm test`
<hr>

## 🖱️ Technologies used
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
<img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>

## 💻 Requirements
  <details>
    <summary>1. Implement the function <code>average</code>
    </summary>
      <li>The <code>average</code> function accepts an array of variable length and returns the average of the recieved values. </li>
      <li>In case it recieves a non numerical value or an empty array, the value <code>undefined</code> must be returned.</li> 
      <li>All the results must be round to integer values.</li>
       ❌ This function still does not have tests implemented
  </details>
  <br>
  <details>
    <summary>2. Implement the test cases for the function <code>numbers</code>
    </summary>
    <li>The <code>numbers</code> function accepts an array of variable length and returns <code>true</code> if all the parameters's types are <code>number</code> and <code>false</code> if they are not.</li>
    <li>All the results must be round to integer values.</li>
</details>
<br>
<details>
  <summary>3. Implement the function <code>vqv</code>
  </summary>
  <li>Use template literals to write the function <code>vqv</code>, which accepts a name and age and returns the following paragraph:<br>
  
    "Oi, meu nome é Tunico!
    Tenho 30 anos,
    trabalho na Trybe e mando muito em programação!
    #VQV!"
   <br>
  </li>
  <li>In case the function is called with no parameter, the value <code>undefined</code> must be returned.</li>
  <li>The function must satisfy the proposed tests.</li>
</details>
<br>
<details>
  <summary>4. Implement the test cases for the function <code>circle</code>
  </summary>
  <li>The function <code>circle</code> accepts a numeric value and returns an object containing radius, area and circumference based on the provided radio value.</li>
  <li>Implement at least six test cases for this function.</li>
</details>
<br>
<details>
  <summary>5. Implement the function <code>createStudent</code>
  </summary>
  <li>The function <code>createStudent</code> accepts a string ("name") and returns an object containing two keys: name (the name given as a parameter) and feedback (containing a function that returns the phrase "Eita pessoa boa!") when it's called.</li>
  <li>The function must satisfy the proposed tests.</li>
</details>
<br>
<details>
  <summary>6. Implement the test cases for the function <code>productDetails</code>
  </summary>
  <li>The function <code>productDetails</code> accepts two strings (which represent products's names) and returns an array containing two objects with the products's details</li>
   - When called with:<br>
  
    productDetails('Alcool gel', 'Máscara');
   <br>
    - It returns:<br>
  
    [
      {
        name: 'Alcool gel'
        details: {
          productId: 'Alcool gel123'
        }
      },
      {
        name: 'Máscara'
        details: {
          productId: 'Máscara123'
        }
      }
    ]
   <br>
   <li>Implement at least five test cases for this function.</li>
</details>
<br>
<details>
  <summary>7. Implement the functions <code>calculator</code> and <code>arrayGenerator</code>
  </summary>
  <li>The function <code>calculator</code> accepts two integers and returns an objects with the following keys:
    - sum: returns the sum of the two numbers;
    - mult: returns the multiplication of the two numbers;
    - div: returns the division of the two numbers;
    - sub: returns the subtraction of the two numbers;
  </li>
   <li>The results of the divisions should always be rounded down.</li>
   <li>Expected behavior:<br>


    calculator(1, 2); // { sum: 3, mult: 2, div: 0, sub: -1 }

  
   </li>
   <li>The function <code>arrayGenerator</code> converts objects (keys, values or both) in arrays.</li>
   <li>It accepts two parameters: a string that indicates the type of conversion and an object similar to the one returned by the function <code>calculator</code>.</li>
    <li>Expected behavior:<br>


      arrayGenerator('keys', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 'sum', 'mult', 'div', 'sub' ];
      arrayGenerator('values', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 3, 2, 1, 0 ];
      arrayGenerator('entries', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 1 ], [ 'sub', 0 ] ];
<br>

</details>

## 💬 Contact me
<a href="https://www.linkedin.com/in/bshiromoto/" target="_blank"> 
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>