console.log('this works')

const reminderList = document.querySelector('#reminder-list');
const form = document.querySelector('#add-reminder-form');


function renderCafe(doc){
    let li  = document.createElement('li');
    let phone = document.createElement('span');
    let message = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    phone.textContent = doc.data().phone;
    message.textContent = doc.data().message;

    li.appendChild(phone);
    li.appendChild(message);


    reminderList.appendChild(li);

}


db.collection('reminders').get().then((snapshot)  => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    })
})



form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('reminders').add({

        phone: form.phone.value,
        message: form.message.value
    });
    form.phone.value = '';
    form.message.value = '';
})