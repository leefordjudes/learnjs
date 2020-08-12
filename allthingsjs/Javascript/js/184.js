'use strict';

let arr = [100, 50, 60];

// Method 1
let x = arr[0],
    y = arr[1],
    z = arr[2];

// Method 2
let [a, b, c] = arr;

const getScores = () => [100, 85, 90, 65, 40];

// Method 3
let [a1, b1,,c1] = getScores();
console.log(a1, b1, c1); // 100 85 65

let quiz1 = [],
    quiz2 = [],
    quiz3 = [];

// Method 4
const separateScores = function([s1, s2, s3]) {
  quiz1.push(s1);
  quiz2.push(s2);
  quiz3.push(s3);
};

separateScores([100, 95, 85]);
separateScores([75, 65, 55]);

console.log(quiz1, quiz2, quiz3);

// Method 5

let obj = {
  name: 'Steven',
  interests: ['reading', 'running', 'javascript'],
  email: 'shancock@allthingsjavascript.com'
};

let {name, email} = obj;

console.log(name, email);

// Method 6

let stu1 = {
  name: 'jamie',
  student: true,
  score1: 100,
  score2: 90,
  score3: 60,
  score4: 85,
  score5: 0,
};

let stu2 = {
  name: 'Hans',
  student: true,
  score1: 50,
  score2: 45,
  score3: 90,
  score4: 85,
};

const sumFirstThreeScores = function({score1, score2, score3}) {
  return score1 + score2 + score3;
}; 

console.log('stu1 sum: ' + sumFirstThreeScores(stu1));
console.log('stu2 sum: ' + sumFirstThreeScores(stu2));
