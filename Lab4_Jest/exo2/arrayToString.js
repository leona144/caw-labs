function arrayToStringDemo() {
    const myColor = ["Red", "Green", "White", "Black"];
    
    console.log(myColor.toString());
    console.log(myColor.join());
    console.log(myColor.join(''));
    
    return {
        toString: myColor.toString(),
        joinWithComma: myColor.join(),
        joinWithoutSpace: myColor.join('')
    };
}

module.exports = { arrayToStringDemo };