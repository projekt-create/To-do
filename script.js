// To-do List script 

const Form = document.querySelector('#form');
const Input = document.querySelector('#input');
const Button = document.querySelector('#btn');
const List = document.querySelector('#list');
const main = document.querySelector('main');
const Realtime = document.querySelector('.todo__Realtime');
const Blackhole = document.querySelector('.blackhole');
const Sun = document.querySelector('.sun');
const Body = document.querySelector('body');

console.log(Blackhole.style.display = 'flex');

// Date

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();


const CurrentDate = `${day}.${month}.${year} ${hours}:${minutes}`;

console.log(CurrentDate);



// Add new task
Form.addEventListener('submit', (e) => {
    e.preventDefault();
    const Task = Input.value.trim();
    if (Task) {
        const TaskElement = document.createElement('div');
        TaskElement.setAttribute('class', 'task');
        TaskElement.innerHTML = `
            <div class="task__content">
                <span class="task__text">${Task}</span>
                <span class="date">${CurrentDate}</span>
            </div>

            <div class="info">
                <input type="text" class="info__input" placeholder="Enter your plan" >
            </div>

            <div class="done">
                <button class="done__btn">Done</button>
                <button class="edit__btn">Edit</button>
                <button class="clear__btn">Clear</button>
                <button class="delete__btn">Delete</button>
            </div>
        `;
        List.appendChild(TaskElement);
        Input.value = '';
        const DoneBtn = TaskElement.querySelector('.done__btn');
        const EditBtn = TaskElement.querySelector('.edit__btn');
        const ClearBtn = TaskElement.querySelector('.clear__btn');
        const DeleteBtn = TaskElement.querySelector('.delete__btn');
        const InfoInput = TaskElement.querySelector('.info__input');
        const Info = TaskElement.querySelector('.info');
        EditBtn.style.display = 'none';

        // Delete task
        DeleteBtn.addEventListener('click', () => {
            TaskElement.remove();
            const BlackholeTask = document.createElement('div');
            BlackholeTask.setAttribute('class', 'blackhole__task');
            BlackholeTask.innerHTML = `
            <div class="task__content">
                <span class="task__text">${Task}</span>
                <span class="date">${CurrentDate}</span>
            </div>

            <div class="info">
                <p class="info__text__p">${InfoInput.value}</p>
            </div>

            <div class="done">
                <button class="done__btn">Done</button>
                <button class="edit__btn">Edit</button>
                <button class="clear__btn">Clear</button>
                <button class="delete__btn">Delete</button>
            </div>
            `
            main.appendChild(BlackholeTask);
            BlackholeTask.style.display = 'flex';
            setTimeout(() => {
                BlackholeTask.style.display = 'none';
            }, 10000);
        });

        // Clear task
        ClearBtn.addEventListener('click', () => {
            InfoInput.value = '';
        });

        // Done task
        DoneBtn.addEventListener('click', () => {
            let InfoP = document.createElement('p');
            InfoP.setAttribute('class', 'info__text__p');
            InfoP.textContent = InfoInput.value.trim();
            Info.appendChild(InfoP);
            InfoInput.style.display = 'none';
            DoneBtn.style.display = 'none';
            EditBtn.style.display = 'flex';
            InfoInput = '';
        });

        // Edit task
        EditBtn.addEventListener('click', () => {
            const InfoP = TaskElement.querySelector('.info__text__p');
            InfoInput.value = InfoP.textContent;
            InfoP.style.display = 'none';
            InfoInput.style.display = 'flex';
            DoneBtn.style.display = 'flex';
            EditBtn.style.display = 'none';
            InfoP = '';
        });

    } else {
        alert('Please enter a task');
    }
});

// Realtime date
setInterval(() => {
    const CurrentDate = `${year}.${month}.${day} ${hours}:${minutes}`;
    Realtime.textContent = CurrentDate;
}, 1000);

Blackhole.addEventListener('click', () => {
    const TaskElement = document.querySelector('.task');

    Blackhole.style.left = '-100%';
    Blackhole.style.transition = 'all 2s ease-in-out ';
    Blackhole.style.opacity = '0';
    Sun.style.visibility = 'visible';
    Sun.style.transition = 'all 2s ease-in-out ';
    Sun.style.left = '100%';
    Body.style.background = '#162130ff';
    Body.style.transition = 'all 2s ease-in-out ';
    List.style.background = '#162130ff';
    List.style.transition = 'all 2s ease-in-out ';
    List.style.boxshadow = 'none';
    TaskElement.style.background = '#162130ff';
    TaskElement.style.transition = 'all 2s ease-in-out ';

    setTimeout(() => {
        Blackhole.style.display = 'none';
    }, 10000);
});

Sun.addEventListener('click', () => {
    const TaskElement = document.querySelector('.task');

    Blackhole.style.left = '0';
    Blackhole.style.transition = 'all 2s ease-in-out ';
    Blackhole.style.opacity = '1';
    Sun.style.visibility = 'hidden';
    Sun.style.transition = 'all 2s ease-in-out ';
    Sun.style.left = '200%';
    Body.style.background = '#000';
    Body.style.transition = 'all 2s ease-in-out ';
    List.style.background = '#000';
    List.style.transition = 'all 2s ease-in-out ';
    List.style.boxshadow = '0 0 25px rgba(255, 180, 80, 0.7), 0 0 60px rgba(255, 150, 40, 0.5), 0 0 120px rgba(255, 120, 20, 0.35), inset 0 0 40px rgba(255, 200, 150, 0.4)';
    TaskElement.style.background = '#000';
    TaskElement.style.transition = 'all 2s ease-in-out ';

    setTimeout(() => {
        Blackhole.style.display = 'flex';
    }, 10000);
});