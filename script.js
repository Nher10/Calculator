const list = document.querySelectorAll('ul li');
const answer = document.querySelector('.answer');


list.forEach( (lists) => {
    lists.addEventListener('click', (calculate) => {

        if(answer.textContent == '0' || answer.textContent == 'undefined' || answer.textContent == 'Infinity') {
            answer.textContent = '';
        } else if(lists.textContent == '=') {
            let solution = eval(answer.textContent);
            answer.textContent = solution;
            return true;
        } else if(lists.textContent == 'C') {
            answer.textContent = '';
            return true;
        } else {
            answer.append(lists.textContent);
        }
        
    })
})


