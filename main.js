import baza from "./db.js";

let inputs = document.querySelectorAll('input');
let button = document.querySelector('button');
let wrapper = document.querySelector('.wrapper');

const DeleteFunction = (id) => {
    const index = baza.findIndex((v) => v.id === id);
        baza.splice(index, 1);
        ReadFunction();

};

const EditFunction = (id) => {
    let index = baza.findIndex((v) => v.id === id);
        let name = prompt('Edit Your Name', baza[index].name);
        let status = prompt('Edit Your Status', baza[index].status);

            baza[index].name = name;
            baza[index].status = status;
            ReadFunction();
        
};






const ReadFunction = () => {
    wrapper.innerHTML = ''; 

    baza.forEach((v) => {
        let editbtn = document.createElement('div');
        let delete1 = document.createElement('div');
        let div = document.createElement('div');

        editbtn.classList.add('box_edit');
        editbtn.innerHTML = `<button><img class="editbtn_img" src="https://cdn.iconscout.com/icon/free/png-256/free-edit-icon-download-in-svg-png-gif-file-formats--pen-write-pencil-ball-study-user-interface-vol-2-pack-icons-2202989.png?f=webp&w=256" alt=""></button>`;

        delete1.classList.add('box_delete');
        delete1.innerHTML = `<button type="button"><img class="deletebtn_img" src="https://img.icons8.com/color/512/trash.png" alt=""></button>`;

        div.classList.add('box');
        div.innerHTML = `
            <div class="box_№"><p>${v.id}</p></div>
            <div class="box_name"><p>${v.name}</p></div>
            <div class="box_status"><p>${v.status}</p></div>`;

        div.appendChild(delete1);
        div.appendChild(editbtn);
        wrapper.appendChild(div);

        delete1.addEventListener('click', () => {
            DeleteFunction(v.id);
        });

        editbtn.addEventListener('click', () => {
            EditFunction(v.id);
        });
        localStorage.setItem('name', v.name)
        localStorage.setItem('status', v.status)
       

    });
};

const CreateElement = () => {
    const newUser = {
        id: baza.length + 1, 
        name: inputs[0].value,
        status: inputs[1].value,
    };

    baza.push(newUser);
    ReadFunction();

    inputs[0].value = '';
    inputs[1].value = '';
};

ReadFunction();

button.addEventListener('click', () => {
    CreateElement()
});







