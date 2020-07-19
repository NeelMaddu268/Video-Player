var running=false;

function ga(){
    var time = prompt('How many minutes do you want the timer.');
    if(isNaN(time)){
        alert('Please enter a number.');
        ga()
    }else{
        start(time)
    }
}
var doneTime = 0;
var area = document.getElementById('area');


var names = ['Detective Pickachu','The Power Inside','Coming For The Crown','Whatever It Takes','Contagious','Together','God of Thunder','Summer','Stars','Gotta Go Fast','Shout My Name','Respect My Throne','Rooftop','Head In The Clouds','Hero You Deserve','Do It Like Me','Cinematic Universe','Born To Fly','Back To You','Alone','Happier']

var arr = [document.getElementById('a'),document.getElementById('b'),document.getElementById('c'),document.getElementById('d'),document.getElementById('e'),document.getElementById('f'),document.getElementById('g'),document.getElementById('h'),document.getElementById('i'),document.getElementById('j'),document.getElementById('k'),document.getElementById('l'),document.getElementById('m'),document.getElementById('n'),document.getElementById('o'),document.getElementById('p'),document.getElementById('q'),document.getElementById('r'),document.getElementById('s'),document.getElementById('t'),document.getElementById('u')];

var now = document.getElementById('now');
                now.textContent='Current Song: '+names[0];
var after = document.getElementById('after');
                after.textContent='Next Song: '+names[1];
                names.shift()
            area.textContent='No Timer Set';
function start(time){
    if(running){
        clearInterval(timer);
        running=false;
        start(time)
    }else{running=true;
        
            area.textContent='Time Left: '+time+' Minutes';

    var timer = setInterval(()=>{
        //alert(doneTime)
        if(doneTime==time){
            clearInterval(timer);
            arr[0].pause()
            doneTime=0;
        }else{
            doneTime+=1;
            area.textContent='Time Left: '+parseInt(parseInt(time)-parseInt(doneTime))+' Minutes';
        }
    },60000)}
}
function skip(){
                arr[0].style.display='none';
    arr[0].pause()
            if(arr.length>0){
                now.textContent='Current Song: '+names[0];
                after.textContent='Next Song: '+names[1];

                names.shift()
                arr.shift()
                next()
                console.clear()}else{location.reload();clearInterval(other)}
        }

for(var i = 1;i<arr.length;i++){
    arr[i].style.display="none"
}
     var other =  setInterval(()=>{
        if(arr[0].ended){
                arr[0].style.display='none';
            if(arr.length>0){
                now.textContent='Current Song: '+names[0];
                after.textContent='Next Song: '+names[1];

                names.shift()
                arr.shift()
                next()
                console.clear()}else{alert('Done');clearInterval(other)}
        }
     }, 1000);

function next(){
    arr[0].style.display='block';
    arr[0].play()
    console.clear()
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        if(arr[0].paused){arr[0].play}else{arr[0].pause()}
    }
}

