function palindrome(text) {
    const input = text.toLowerCase();
    let output = "";
    let palindrom = false;

    for(let i = text.length; i >= 0; i--)
        output += input.charAt(i);

    if(input === output)
        palindrom = true;

    console.log(palindrom);
    printResult.innerHTML = input + " &rarr; " + output + "<br>" + palindrom;
}