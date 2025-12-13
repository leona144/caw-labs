function mean(scores) {
    if (scores.length === 0) {
        return 0;
    }
    
    const sum = scores.reduce((total, score) => total + score, 0);
    return sum / scores.length;
}
console.log(mean([15,88,99,10,6]));

export default { mean };