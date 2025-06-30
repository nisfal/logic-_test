
function validName(name) {
  const terms = name.split(' ');
  if (terms.length < 2 || terms.length > 3) return false;

  const isInitial = (term) => /^[A-Z]\.$/.test(term);
  const isWord = (term) => /^[A-Z][a-z]+$/.test(term);

  for (let term of terms) {
    if (!(isInitial(term) || isWord(term))) return false;
  }

  if (!isWord(terms[terms.length - 1])) return false;

  if (terms.length === 3) {
    if (isInitial(terms[0]) && isWord(terms[1])) return false;
  }

  return true;
}

function findDisappeared(nums) {
  const n = nums.length;
  const seen = new Array(n + 1).fill(false);

  for (let num of nums) {
    seen[num] = true;
  }

  const result = [];
  for (let i = 1; i <= n; i++) {
    if (!seen[i]) result.push(i);
  }

  return result;
}

console.log(validName("I. Tri"))
console.log(validName("I. T. Septian"))
console.log(validName("Ivan T. Septian"))

console.log(validName("Ivan"))
console.log(validName("i. Tri"))
console.log(validName("I Tri"))
console.log(validName("I. Tri Septian"))
console.log(validName("I. Tri P."))
console.log(validName("Ivan. Tri Septian"))


console.log(findDisappeared([4,3,2,7,8,2,3,1])); 
console.log(findDisappeared([1,1]));    
