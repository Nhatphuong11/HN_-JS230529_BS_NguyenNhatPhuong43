let selector = document.querySelector('.save-up');
let tbody = document.querySelector('tbody');
let selectorname = document.querySelector('#name');
let selectoremail = document.querySelector('#email');
let selectorphone = document.querySelector('#phone');
let selectordiachi = document.querySelector('#address');
let sort = document.querySelector('.sort-abc');
let search = document.querySelector('.ptn_search')
let SearchVcl = document.querySelector('.search input');

let students = [
    {
        id: crypto.randomUUID(),
        name: 'nhatphuong',
        email: 'phuong201101@gmail.com',
        phone: '0976909192',
        address: 'ha noi',
        sex: 'Nam'
    },
    {
        id: crypto.randomUUID(),
        name: 'nhatphuong222',
        email: 'phuong201101@gmail.com',
        phone: '0976909192',
        address: 'ha noi',
        sex: 'Nam'
    }
];
function showStudent(){
    let resultHtml = '';
    for (let i = 0; i < students.length; i++) {
        let student = students[i];

        resultHtml = resultHtml + ` <tr>
            <td>${i + 1}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.address}</td>
            <td>${student.sex}</td>
            <td>
                <button type="button" data-id="${student.id}" class="ptn-edit">Edit</button>
                <button type="button" data-id="${student.id}" class="ptn-delete">Delete</button>
            </td>
        </tr>`
    }
    tbody.innerHTML = resultHtml;
}
showStudent();


function handleAddStudent(event){
    let checkemail = /^([A-Za-z0-9-.])+@([A-Za-z0-9-.])+.([A-Za-z]{2,4})$/;
    let checkphone = /^\d{10}$/;
    let sex = document.querySelector('.sex-one:checked').value;
    if(selectorname.value === "" || selectordiachi.value === "" ){
        alert('nhap day du');
        return;
    }else if(!checkemail.test(selectoremail.value)){
        alert('phải nhập đúng định dạng email');
        return;
    }else if(!checkphone.test(selectorphone.value)){
        alert('phải nhập đúng định dạng số điện thoại di động ở Việt Nam');
        return;
    }
    else{
        if (event.target.classList.contains('update')){
            let Update = event.target.getAttribute('data-id');
            let iupdate;
            for(i=0; i<students.length; i++){
                if (students[i].id === Update){
                    iupdate = i;
                    break;
                }
            }
            students[iupdate].name = selectorname.value;
            students[iupdate].email = selectoremail.value;
            students[iupdate].phone = selectorphone.value;
            students[iupdate].address = selectordiachi.value;
            students[iupdate].sex = sex;
            document.querySelector('form').reset();
            showStudent();
            selector.classList.remove('update');
            selector.removeAttribute('data-id');
            selector.innerText = 'Lưu Lại';
        }else{
            let studensAdd ={
                id: crypto.randomUUID(),
                name: selectorname.value,
                email: selectoremail.value,
                address: selectordiachi.value,
                phone: selectorphone.value,
                sex: sex,
            }; 
            students.push(studensAdd);
        }
        showStudent();
    }
}

function handledeleteStudent(event){
    let clicked = event.target;
    if(clicked.classList.contains("ptn-delete")){
        let idDelete = clicked.getAttribute("data-id");
        let indexDelete;
        for (let i = 0; i < students.length; i++) {
          if (students[i].id === idDelete) {
            indexDelete = i;
            break;
          }
        }
        students.splice(indexDelete, 1);
        showStudent();
        document.querySelector('form').reset();
        selector.classList.remove('update');
        selector.removeAttribute('data-id');
        selector.innerText = 'Lưu Lại';
    }else if(clicked.classList.contains("ptn-edit")){
        let Edit = clicked.getAttribute("data-id");
        let Iedit;
        for(let i = 0; i <students.length; i++){
            if(students[i].id === Edit){
                Iedit = i;
                break;
            }
        }
        console.log(Iedit);
        selectorname.value = students[Iedit].name;
        selectoremail.value = students[Iedit].email;
        selectorphone.value = students[Iedit].phone;
        selectordiachi.value = students[Iedit].address;
        document.querySelector(`input[value=${students[Iedit].sex}]`).checked = true;
        selector.classList.add('update');
        selector.setAttribute('data-id', Edit);
        selector.innerText = 'Update';
    }
}

function SortStudents() {
    students.sort(
        function(a, b) {
            let name1 = a.name.toLowerCase();
            let name2 = b.name.toLowerCase();
            if(name1 < name2) {
                return -1;
            }
            if(name1 > name2) {
                return 1;
            }
            return 0;
        }
    )
    showStudent();
}
function SearchStudents() {
    let Search = SearchVcl.value.toLowerCase();
    let studentSearch = students.filter(
        function(studentItem) {
            return studentItem.name.toLowerCase().includes(Search);
        }
    );
    let resultHtml = '';
    for (let i = 0; i < studentSearch.length; i++) {
        let student = studentSearch[i];
        resultHtml = resultHtml + ` <tr>
                <td>${i + 1}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
                <td>${student.address}</td>
                <td>${student.sex}</td>
                <td>
                    <button type="button" data-id="${student.id}" class="ptn-edit">Edit</button>
                    <button type="button" data-id="${student.id}" class="ptn-delete">Delete</button>
                </td>
            </tr>`
    }
    tbody.innerHTML = resultHtml;
}
search.addEventListener('click', SearchStudents);
sort.addEventListener('click', SortStudents );
tbody.addEventListener('click', handledeleteStudent);
selector.addEventListener('click', handleAddStudent);
SearchVcl.addEventListener('keyup', SearchStudents);



