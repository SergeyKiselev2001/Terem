
function thirdblock_btn1(){
    const firstblock = document.getElementsByClassName('first-block')[0];

    // в задании не уточнено, использовать свойство visibility или display

    firstblock.style.visibility = firstblock.style.visibility == 'hidden' ? 'visible' : 'hidden';
}

function thirdblock_btn2(){
    
    // умею обращаться к элементам через id, но слышал, что это плохая практика 

    const block1 = first_of_three.style.order;
    const block2 = second_of_three.style.order;

    first_of_three.style.order = block1 == '2' ? '1' : '2';
    second_of_three.style.order = block2 == '1' ? '2' : '1';
}

function close_modal(){
    document.getElementsByClassName('modal-window')[0].style.display = 'none';
}

////////////////// Код для второго файда

// Стартовые значения JSON, для того, чтобы отправить информацию, если пользователь не ввел ничего

let obj_json = '';

document.getElementsByClassName('submit-btn')[0].addEventListener('click', (event)=>{
    event.preventDefault(); 

    let result = obj_json || `{"option1": "1", "option2": "1", "option3": "1", "option4": "1", "option5": "1", "input1": "", "input2": ""}`; // присвоение по умолчанию
    
    request();
    
});

async function request(){
    let response = await fetch('https://sergeykiselev2001.github.io/Terem/data.json');
    alert(response);
    let response_parsed = await response.json();
    alert(response_parsed);
}

function formChanging(){
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