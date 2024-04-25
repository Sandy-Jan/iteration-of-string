var s = " sandip ";
function iterateString(s) {
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < s.length; j++) {
            console.log(s.substring(i, j + 1));
        }
    }
}
iterateString(s);
