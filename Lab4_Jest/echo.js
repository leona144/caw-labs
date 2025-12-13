function exf(s, n) {
    for (let i = 0; i < n; i++) {
        console.log(s);
    }
}

module.exports = { exf };

if (require.main === module) {
    exf("echo", 5);
    exf("JS from server", 10);
}