// Number of rows for the triangle
let rows = 5;

// Outer loop for each row
for (let i = 1; i <= rows; i++) {
    let pattern = '';
    
    // Inner loop for each column in the current row
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    
    console.log(pattern);
}
