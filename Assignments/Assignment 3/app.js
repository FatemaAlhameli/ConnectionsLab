window.addEventListener ('load', () => {

    let inputBox1= document.getElementById('kList');
    let inputBox2= document.getElementById('hList');
    let List1 = document.getElementById ('kitchen_list');
    let List2 = document.getElementById ('house_list');

    inputBox1.addEventListener('change', (e) => {

        let list = document.createElement('li');
        list.innerHTML = " <input type= checkbox> "+e.target.value+"";
        List1.appendChild(list);
       
        

    })

    inputBox2.addEventListener('change', (e) => {
        let list = document.createElement('li');
        list.innerHTML = " <input type= checkbox> "+e.target.value+"";
        List2.appendChild(list);

    })

})

