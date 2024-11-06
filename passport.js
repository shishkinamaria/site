const changeText = () =>
    {document.getElementsByClassName('vidan1')[0].textContent = 'DEPARTAMENT OF INTERNATIONAL AFFAIRS';
    document.getElementsByClassName('vidan2')[0].textContent = 'IVANOVO REGION';
    document.getElementsByClassName('surname')[0].textContent = 'SHISHKINA';
    document.getElementsByClassName('name')[0].textContent = 'MARIA';
    document.getElementsByClassName('otchestvo')[0].textContent = 'SERGEEVNA';
    document.getElementsByClassName('sex')[0].textContent = 'FEMALE';
    document.getElementsByClassName('city')[0].textContent = 'IVANOVO';
    document.getElementsByClassName('obl')[0].textContent = 'IVANOVO REGION';
    }


function calculateX() {
    const a = parseFloat(document.getElementById('a').value);
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = ''; 
      
    if (isNaN(a)) {
        errorDiv.textContent = "Пожалуйста, введите числовое значение для a.";
        resultDiv.textContent = "";
        return;
        }
      
    let x;
    if (a < 62) {
        x = a**2 + 4 + 5;
    } else {
        x = 1/(a**2) + 4*a + 5;
    }
      
    resultDiv.textContent = "Результат: x = " + x;
    }