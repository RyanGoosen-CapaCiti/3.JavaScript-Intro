var Ret = lefty("This is a test",7);
alert (Ret);
function lefty (InString, Num) {
    var OutString=InString.substring(InString, Num);
    alert (OutString);
}

lefty("This is a test", 7);