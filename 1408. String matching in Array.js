/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    words.sort((a, b) => a.length - b.length)
    const set = new Set();
    for(let i = 0; i < words.length; i++) {
        for(let j = i + 1; j < words.length; i++) {
            if(words[j].includes(words[i])) {
                set.add(words[i]);
            }
        }
    }
    return Array.from(result);
};

console.log(stringMatching("mass","as","hero","superhero"));
