function compareAge() {
    const firstAge = document.getElementById('firstAge');
    const secondAge = document.getElementById('secondAge');
    const result = document.getElementById('result');
    const resultValue = firstAge.value - secondAge.value;
    result.innerHTML = resultValue;
};