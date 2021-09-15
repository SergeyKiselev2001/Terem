
const thirdblock_btn1 = () => {
    const firstblock = document.getElementsByClassName('first-block')[0];

    // в задании не уточнено, использовать свойство visibility или display

    firstblock.style.visibility = firstblock.style.visibility == 'hidden' ? 'visible' : 'hidden';
}

const thirdblock_btn2 = () => {
    
    // умею обращаться к элементам через id, но слышал, что это плохая практика 

    const block1 = first_of_three.style.order;
    const block2 = second_of_three.style.order;

    first_of_three.style.order = block1 == '2' ? '1' : '2';
    second_of_three.style.order = block2 == '1' ? '2' : '1';
}

const close_modal = () => {
    document.getElementsByClassName('modal-window')[0].style.display = 'none';
}

////////////////// Код для второго файда

let obj_json = '';

document.getElementsByClassName('submit-btn')[0].addEventListener('click', (event)=>{
    event.preventDefault(); 
    request();
});

async function request(){

    let timer_error = setTimeout(() => {
        alert('Данные не дошли...');
    }, 2000);

    // Если не указывать метод явно, будет использован GET
    let response = await fetch('https://sergeykiselev2001.github.io/Terem/data.json');
    let response_parsed = await response.json();

    alert(`{ \n "status:" "${response_parsed.status}", \n "message:" "${response_parsed.msg}" \n}`);

    clearTimeout(timer_error);
}

const formChanging = () => {
    const options = document.getElementsByTagName('select');
    const inputs = document.getElementsByClassName('input-text');

    let options_value = [];
    let inputs_value = [];

    for (let i = 0; i < options.length; i++){
        options_value.push(options[i].value);
    }

    for (let i = 0; i < inputs.length; i++){
        inputs_value.push(inputs[i].value);
    }

    let [x1,x2,x3,x4,x5] = options_value;
    let [y1, y2] = inputs_value;

    document.getElementsByClassName('second')[0].innerHTML = `{"option1": "${x1}", "option2": "${x2}", "option3": "${x3}", "option4": "${x4}", "option5": "${x5}", "input1": "${y1}", "input2": "${y2}"}`;

    obj_json = document.getElementsByClassName('second')[0].innerHTML;
}