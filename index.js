// function shout(hello){
//     return 'HELLO';
// }
// console.log(shout(hello));
function shout(hello){
    return hello.toUpperCase();
}
function whisper(HI){
    return HI.toLowerCase();
}
function logShout(hello){
console.log("HELLO");
}
function logWhisper(HELLO){
    console.log("hello");
}
function sayHiToHeadphonedRoommate(hi){
    switch (hi) {
        case hi.toLowerCase():
            return "I can't hear you!";
            break;
         case hi.toUpperCase():
             return "YES INDEED!";
             break;
         case hi = "Let's have dinner together!":
             return "I would love to!";
             break;
        default:
            break;
    }
    
 }