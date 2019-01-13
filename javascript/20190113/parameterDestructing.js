function getSentence({subject, verb, object}){
    return `${subject}, ${verb}, ${object}`;
}

const o = {
    subject : "I",
    verb : "love",
    object : "Javascript",
}

console.log(getSentence(o));

function addPrefix(prefix, ...words){
    console.log(typeof words);
    //확산연산자는 반드시 마지막 매개변수여야함.
    const prefixedWords = [];
    for(let i=0; i<words.length; i++){
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}

console.log(addPrefix("con", "verse", "vex"));