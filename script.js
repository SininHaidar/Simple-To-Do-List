document.getElementById('btn').addEventListener('click', addTask);
 function addTask(){
    const input = document.getElementById('txt');
    const text = input.value;

    if(text == '')
        return;
    const li = document.createElement('li');
    li.textContent = text;

    li.addEventListener('click', function(){
        li.classList.toggle('decoration')
    });
    document.getElementById('list').appendChild(li);
    input.value = " ";
 }