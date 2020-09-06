function solution(input) {
  let arr = input.split("").filter((i) => {
    return parseInt(i);
  });
  if (arr.length < 1) return "No Numbers Located";

  return results(arr);
}

const results = (inputArray) => {
  let ints = [];

  const permutate = (array, x = []) => {
    if (array.length === 0) {
      ints.push(x.join(""));
    } else {
      for (let counter = 0; counter < array.length; counter++) {
        let curr = array.slice();
        let next = curr.splice(counter, 1);
        permutate(curr.slice(), x.concat(next));
      }
    }
  };
  permutate(inputArray);
  ints = ints.reverse().toString();
  return ints;
};

console.log(solution("326")); // expected output 632,623,362,326,263,236
console.log(solution("A 3B2 C6D")); // expected output 632,623,362,326,263,236
console.log(solution("A B C"));
