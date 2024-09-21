function getInputFildValueById(id){
    const inputValue =document.getElementById(id).value;
    const inputNumber =parseFloat(inputValue);
    return inputNumber;
}
function getInputInnerById(id){
    const textValue = document.getElementById(id).innerText;
    const textInput = parseFloat(textValue);
    return textInput;
}

function showSection(id){
    document.getElementById('add-money-from').classList.add('hidden');
    document.getElementById('cash-out-from').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}