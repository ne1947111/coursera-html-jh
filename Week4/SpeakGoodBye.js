// This is the file used for printing Goodbyes
(function(window) {
    byeSpeaker = new Object();
    speakWord = "Good Bye";
    byeSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);
