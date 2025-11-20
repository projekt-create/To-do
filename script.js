// To-do List script 

const Form = document.querySelector('#form');
const Input = document.querySelector('#input');
const Button = document.querySelector('#btn');
const List = document.querySelector('#list');
const Blackhole = document.querySelector('.blackhole__task');

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
            Blackhole.style.display = 'flex';
            setTimeout(() => {
                Blackhole.style.display = 'none';
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