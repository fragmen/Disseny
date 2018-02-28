function empezar(event){
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData("Data", event.target.getAttribute('id'));
    event.dataTransfer.setDragImage(event.target, 0, 0);
    
    return true;                
}
            
function enter(event){
    return true;
}

function over(event){
    var lletra = event.dataTransfer.getData("Data");
    var id = event.target.getAttribute('id');
    
    //per que no es pugi ficar una peça a una altre contenidor de peces de lletres
    if ((id == 'lletres1_joc1') && lletra == 'lletres1_opcio1' && lletra == 'lletres1_opcio2' && lletra == 'lletres1_opcio3' && lletra == 'lletres1_opcio4'){
        return false;
    }

    if ((id == 'lletres2_joc1') && lletra == 'lletres2_opcio1' && lletra == 'lletres2_opcio2' && lletra == 'lletres2_opcio3'){
        return false;
    }

     if ((id == 'lletres3_joc1') && lletra == 'lletres3_opcio1' && lletra == 'lletres3_opcio2' && lletra == 'lletres3_opcio3' && lletra == 'lletres3_opcio4' && lletra == 'lletres3_opcio5'){
        return false;
    }

     if ((id == 'lletres4_joc1') && lletra == 'lletres4_opcio1' && lletra == 'lletres4_opcio2' && lletra == 'lletres4_opcio3' && lletra == 'lletres4_opcio4' && lletra == 'lletres4_opcio5'){
        return false;
    }

     if ((id == 'lletres5_joc1') && lletra == 'lletres5_opcio1' && lletra == 'lletres5_opcio2' && lletra == 'lletres5_opcio3'){
        return false;
    }

     if ((id == 'lletres6_joc1') && lletra == 'lletres6_opcio1' && lletra == 'lletres6_opcio2' && lletra == 'lletres6_opcio3' && lletra == 'lletres6_opcio4'){
        return false;
    }
         
    //per que es pugi ficar la peça al lloc correcte de la primera resposta    
    if ((id == 'resposta1_1') && lletra == 'lletres1_opcio1') {
        return false;
    }
                
    if ((id == 'resposta1_2') && lletra == 'lletres1_opcio2') {
        return false;
    }
                
    if ((id == 'resposta1_4') && lletra == 'lletres1_opcio3') {
        return false;
    }
    
    if ((id == 'resposta1_3') && lletra == 'lletres1_opcio4') {
        return false;
    }

    //per que es pugi ficar la peça al lloc correcte de la segona resposta   
    if ((id == 'resposta2_1') && lletra == 'lletres2_opcio1') {
        return false;
    }
                
    if ((id == 'resposta2_2') && lletra == 'lletres2_opcio2') {
        return false;
    }
                
    if ((id == 'resposta2_3') && lletra == 'lletres2_opcio3') {
        return false;
    }

    //per que es pugi ficar la peça al lloc correcte de la tercera resposta    
    if ((id == 'resposta3_1') && lletra == 'lletres3_opcio1') {
        return false;
    }
                
    if ((id == 'resposta3_2') && lletra == 'lletres3_opcio2') {
        return false;
    }
                
    if ((id == 'resposta3_3') && lletra == 'lletres3_opcio3') {
        return false;
    }
    
    if ((id == 'resposta3_4') && lletra == 'lletres3_opcio4') {
        return false;
    }

    if ((id == 'resposta3_5') && lletra == 'lletres3_opcio5') {
        return false;
    }

    //per que es pugi ficar la peça al lloc correcte de la quarta resposta   
    if ((id == 'resposta4_1') && lletra == 'lletres4_opcio1') {
        return false;
    }
                
    if ((id == 'resposta4_2') && lletra == 'lletres4_opcio2') {
        return false;
    }
                
    if ((id == 'resposta4_3') && lletra == 'lletres4_opcio3') {
        return false;
    }
    
    if ((id == 'resposta4_4') && lletra == 'lletres4_opcio4') {
        return false;
    }

    if ((id == 'resposta4_5') && lletra == 'lletres4_opcio5') {
        return false;
    }

    //per que es pugi ficar la peça al lloc correcte de la cinquena resposta    
    if ((id == 'resposta5_1') && lletra == 'lletres5_opcio1') {
        return false;
    }
                
    if ((id == 'resposta5_2') && lletra == 'lletres5_opcio2') {
        return false;
    }
                
    if ((id == 'resposta5_3') && lletra == 'lletres5_opcio3') {
        return false;
    }

    //per que es pugi ficar la peça al lloc correcte de la sisena resposta    
    if ((id == 'resposta6_1') && lletra == 'lletres6_opcio3') {
        return false;
    }
                
    if ((id == 'resposta6_2') && lletra == 'lletres6_opcio4') {
        return false;
    }
                
    if ((id == 'resposta6_3') && lletra == 'lletres6_opcio1') {
        return false;
    }
    
    if ((id == 'resposta6_4') && lletra == 'lletres6_opcio2') {
        return false;
    }
}

function drop(event){
    var lletra = event.dataTransfer.getData("Data");
	
    event.target.appendChild(document.getElementById(lletra));
	event.stopPropagation();
    
    return false;
}
			
function end(event){
    event.dataTransfer.clearData("Data");
    
    return true
}	