let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
confession = confession.replaceAll(secret,'x'.repeat(secret.length));


// a) How many function calls are there in this file?
 // There are 2 function calls:

// confession.replaceAll(secret, 'x'.repeat(secret.length))

// 'x'.repeat(secret.length)

// Even though secret.length uses .length, that is a property, not a function, so it does not count.

// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing
// The expression confession.replaceAll(secret,'x'.repeat(secret.length)); is replacing all occurrences of the word "cake" in the confession string with a string of 'x' characters that has the same length as the word "cake". The repeat method is used to create a string of 'x' characters that matches the length of the secret word, effectively censoring it in the confession.

// It replaces every occurrence of "cake" in the string confession with "xxxx".

// c) How many inputs do we pass to replaceAll when we call it? How can you tell?
// We pass 2 inputs to replaceAll when we call it. You can tell because the replaceAll method is called with two arguments: the first argument is secret (which holds the value "cake"), and the second argument is 'x'.repeat(secret.length) (which generates a string of 'x' characters). The syntax of the method call shows that there are two inputs separated by a comma.

// d) How any inputs do we pass to repeat when we call it?  How can you tell?
// We pass 1 input to repeat when we call it. You can tell because the repeat method is called with a single argument: secret.length. The syntax of the method call shows that there is only one input provided to repeat.

// e) What kind of statement is on line 7?
// The statement on line 7 is an assignment statement. It assigns the result of the expression confession.replaceAll(secret,'x'.repeat(secret.length)); back to the variable confession, effectively updating its value.

console.log(confession);

// My secret is that I really like xxxx. Sometimes I sneak into the fridge at night and steal my housemate's xxxx