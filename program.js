var mode="";
var note= document.querySelector('.write'+mode);
var noteinfo= document.querySelector('.info'+mode);
var bag= document.querySelector('.main');
var navigation= document.querySelector('.nav');
var copyright= document.querySelector('.foot');
var colorPicker= document.querySelector('.decorated');


function words(sentences){
    let size= sentences.length;
    let words_count=1;
    for(let i=0;i<=size;i++){

        if((sentences[i]==" " && sentences[i-1]!=" " && sentences!="")){
            words_count++;
        }

                
        if((sentences[i]=="." && sentences[i-1]!="." && i!=size-1) || (sentences[i-1]=="," && sentences[i-1]!="," && i!=size-1)){
            words_count++;
        }

    }


    if(sentences==""){
        return --words_count; 
    }
    else{
        return words_count;
    }
   
}

function letters(sentences){
    let size= sentences.length;
    let letters_count=0;
    for(let i=0;i<=size-1;i++){
        if(sentences[i]!="" && sentences[i]!=" "){
            letters_count++;
        }
    }
    
return letters_count;
}

function update(){

    let sentences= note.value;
    noteinfo.innerHTML= "Words "+(words(sentences))+", "+"Letters "+(letters(sentences));

    note.addEventListener('keypress',function(){
        noteinfo.innerHTML= "Words "+(words(sentences))+", "+"Letters "+(letters(sentences));    
    });

    note.addEventListener('keydown',function(e){
        if(e.keyCode==8){
            noteinfo.innerHTML= "Words "+(words(sentences))+", "+"Letters "+(letters(sentences));    
        }  
    });
}

(function main_count(){
    setInterval(update,100);
})();



function pageType(){
var white= document.querySelector('#white_page');
var rule= document.querySelector('#rule_page');
    if(white.checked){
        if(mode==""){
            note.style.background= "white";
            note.style.color="black";
        }
        else if(mode=="-night"){
            note.style.background= "black";
            note.style.color="white";
        }
    }
    else if(rule.checked){
        if(mode==""){
            note.style.backgroundImage= "repeating-linear-gradient(180deg,rgb(255, 255, 255) 1px,white 48px,rgb(0, 0, 0) 50px,black 52px)";
        }
        else if(mode=="-night")
        {
            note.style.backgroundImage= "repeating-linear-gradient(180deg,black,black 50px,white 48px,white 52px)";
        }

    }
}


function lightToggle(){
    var lamp= document.querySelector('#light'); 
    var lampT= document.querySelector('.light-img'); 
    if(lamp.checked){
            lampT.src= "images/on.png";
            mode="";
            pageType();
            note.className='write';
            noteinfo.className='info';
            bag.className='main';
            navigation.className='nav';
            copyright.className='foot';
    }
    else{
        lampT.src= "images/off.png";
        mode="-night";
            pageType();
            note.className='write'+mode;
            noteinfo.className='info'+mode;
            bag.className='main'+mode;
            navigation.className='nav'+mode;
            copyright.className='foot'+mode;
    }
}


function color(){
    var current_color= colorPicker.value;
    colorPicker.style.background= current_color;
    console.log(current_color);
}
