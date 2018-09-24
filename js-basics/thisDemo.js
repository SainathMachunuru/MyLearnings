console.log('******this keyword demo start');
const video = {
    title : 'a',
    play(){
        //console.log("ASDA: "+JSON.stringify(this));
        console.log(this);

    }
};
video.stop = function(){
    console.log(this);
};
function stopPlayVideo(){
    console.log(this);
}

video.play();
stopPlayVideo();
const video2 = {
    title : 'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title,tag);
        },this);
    }
    
};
video2.showTags();
console.log('*****this keyword demo end');