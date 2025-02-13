var Name = document.getElementById('name');
var Form = document.getElementById('myid');
let Email = document.getElementById('email');
let Age = document.getElementById('age');
let Pass = document.getElementById('pass');
let ConPass = document.getElementById('conPass');
// let SubBtn = document.getElementById('subBtn')

Form.addEventListener('submit',function(){
    if(Name.value ===''){
        alert('Name can not be null.');
        return false;
    }
    if(Email.value ===''){
        alert('Email can not be null.');
        return false;
    }
    if(Age.value===''){
        alert('Age can not be null.');
        return false;
    }
    if(Pass.value===''){
        alert('Pass can not be null.');
        return false;
    }
    if(ConPass.value!=Pass.value){
        alert('ConPass can not be match with pass.');
        return false;
    }
})


document.getElementById('select-image-btn').addEventListener('click', function() {
    document.getElementById('image-input').click();
});
  
document.getElementById('image-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('selected-image');
            img.src = e.target.result;
            img.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});
