let num_Array = ["one", 4, 9, "three", 8, 64, "two"]
//loop through the array and print the word if the element is a num type
for (let i = 0; i < num_Array.length; i++) {
    if (typeof num_Array[i] === "number") {
        console.log(num_Array[i]);
    }
}
console.log("---------------------------------------------------")  