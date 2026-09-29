function add(a, b) {
    return a + b;
}

if (add(2, 3) !== 5) {
    throw new Error("Test failed");
}

console.log("All tests passed!");