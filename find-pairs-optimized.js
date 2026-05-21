function findPairs(arr, targetSum) {
    const seen = new Set();
    const pairs = new Set();
  
    for (const num of arr) {
      const complement = targetSum - num;
  
      if (seen.has(complement)) {
        // zapis w uporządkowanej formie, aby uniknąć duplikatów
        const pair = [complement, num].sort((a, b) => a - b);
        pairs.add(pair.toString());
      }
  
      seen.add(num);
    }
  
    return Array.from(pairs).map(p => p.split(',').map(Number));
  }
  
  module.exports = findPairs;