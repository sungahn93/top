let username = prompt("Who's there?", '');

if(username === 'Admin'){
    let password = prompt('Password:', '');
        if(password === 'TheMaster'){
            alert('Welcome');
        }else if(password === '' || password === null){
            alert('Canceled');
        }else{
            alert('Wrong Password');
        }
    
}else if(username === '' || username === null){
    alert("Canceled");
}else{
    alert('Wrong Password')
}