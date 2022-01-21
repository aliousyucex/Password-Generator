var cikti="";
var ssayi=0,slletter=0,sbletter=0,sshapes=0,length;
var random;
var bletters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lletters='abcdefghijklmnopqrstuvwxyz';
var numbers='0123456789';
var shapes='';
var yedekshapes='';


function Olustur(){

    
    length = document.getElementById('len');
    var dongu = length.value;
    slletter=0;
    sbletter=0;
    sshapes=0;
    ssayi=0;
    var shapecheck=4;
    cikti="";
    if(dongu<6 || dongu>24){
        length.value = "";
        length.classList.remove('shake');
        setTimeout(1000);
        length.classList.add('shake');
        length.setAttribute('placeholder','Lütfen sayı girişi yapanız');
    }
    else if(dongu>=6 || dongu<=24){

        length.classList.remove('shake');
    
    for(var i=0;i<dongu;i++){

    if(shapes == '')
    {
        shapecheck=3;
        sshapes++;
    }
    random = Math.floor(Math.random() * shapecheck);
    if (random == 0){
        cikti+= lletters.charAt(Math.floor(Math.random() * lletters.length));
        slletter++;
    }
    if (random == 1){
        cikti+=bletters.charAt(Math.floor(Math.random() * bletters.length));
        sbletter++;
    }
    if (random == 2){
        cikti+=numbers.charAt(Math.floor(Math.random() * numbers.length));
        ssayi++;
    }
    if (random == 3){
        cikti += shapes.charAt(Math.floor(Math.random() * shapes.length));
        sshapes++;
    }
    if((i == dongu && (slletter == 0 || sbletter == 0 || ssayi == 0 || sshapes == 0))){
        i=0;
        cikti="";
        sshapes=0; slletter=0; sbletter=0; ssayi=0;
        console.log("Sifirlandi");
    }
}
var tasi = document.getElementById('expasswords').value; 
document.getElementById('expasswords').value = cikti + '\r\n';
document.getElementById('expasswords').value += tasi;
length.classList.remove('shake');
}else{
    length.value = "";
    length.classList.remove('shake');
    length.classList.add('shake');
    length.setAttribute('placeholder','Lütfen sayı girişi yapanız');
}
}

function Pasif(a){
    if(a.value==0){
        
        document.getElementById('Pasif').style.display = "none";

        shapes ='';
    }
    else{
        document.getElementById('Pasif').style.display = "block";        
        shapes=yedekshapes;
    }
    
}


function Shape(a){
    if (a.checked) {
        shapes += a.value;
        yedekshapes += a.value;
    }
    else{
         shapes = shapes.replace(a.value,'');
         yedekshapes = yedekshapes.replace(a.value,'');
    }
    console.log(shapes);
}