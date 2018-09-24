function StopWatch(){
    let startTime,endTime,running,duration = 0;

    this.start = function(){
        if(running){
            return new Error('stop watch already started');
        }
        startTime = new Date();
        running = true;
    };

    this.stop = function(){
        if(!running){
            return new Error('stop watch already stoped');
        }
        endTime = new Date();
        running = false;
        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration += seconds;
     };
     this.reset = function(){
         startTime = null;
         endTime = null;
         running = false;
         duration = 0;

     };
     Object.defineProperty(this,'duration',{
        get: function(){
            return duration;
        }
     });
  
}
const sw = new StopWatch();
console.log(sw.start);
console.log(sw.stop);
console.log(sw.duration);