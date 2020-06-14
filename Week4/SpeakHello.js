// This is the script file used for printing "Hellos"
(function(window) {
    helloSpeaker = new Object();
    speakWord = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);
