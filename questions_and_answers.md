<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the correct answer from the following options and give an explanation (2-5 lines).

javascript
let greeting;
greetign = {};
console.log(greetign);


- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ReferenceError: greetign is not defined

<i>There's a typo in the assignment of greeting. It's misspelled as greetign.</i>

</p>
</details>

###### 2. Write the correct answer from the following options and give an explanation (2-5 lines).

javascript
function sum(a, b) {
  return a + b;
}

sum(1, '2');


- A: NaN
- B: TypeError
- C: "12"
- D: 3

<details><summary><b>Answer</b></summary>
<p>

#### Answer: NaN

<i>When + sign is used between a number and a string in JavaScript, it tries to combine them. In this case, it adds the number 1 to the string "2" creating "12." But this isn't a real math calculation, so JavaScript can't give a valid result, and it shows "NaN".</i>

</p>
</details>

###### 3. Write the correct answer from the following options and give an explanation (2-5 lines).

javascript
const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

info.favoriteFood = '🍝';

console.log(food);


- A: ['🍕', '🍫', '🥑', '🍔']
- B: ['🍝', '🍫', '🥑', '🍔']
- C: ['🍝', '🍕', '🍫', '🥑', '🍔']
- D: ReferenceError

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ['🍕', '🍫', '🥑', '🍔']

<i>Initially, info.favoriteFood is "🍕". When you change it to "🍝", only the info object is updated, not the food array.</i>

</p>
</details>

###### 4. Write the correct answer from the following options and give an explanation (2-5 lines).

javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());


- A: Hi there,
- B: Hi there, undefined
- C: Hi there, null
- D: ReferenceError

<details><summary><b>Answer</b></summary>
<p>

#### Answer: Hi there, undefined

<i>The sayHi function needs a name argument, but it's called without one. So, it returns "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the correct answer from the following options and give an explanation (2-5 lines).

javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);


- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: 2

<i>The forEach method checks if each element in the nums array is truthy and counts them if they are truthy, and in this case, there are 2.</i>

</p>
</details>