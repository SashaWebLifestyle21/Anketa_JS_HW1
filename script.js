function validateOnString(str){
    if(!str.match(/^[a-zA-Z_ ]*$/) || str==='')
        {
            return false
        }
        else{
            return true
        }
    

}
function validateOnNumber(number){
    if(isNaN(number)){
        return false
    }
    else {return true}
}
function isMale(male){
    if(male===null){
        return 'Женский'
    }
    else{return 'Мужской'}
}
function isPension(age){
    if(isMale()==='Женский'){
        if(age>=55){
            return true
        }
        else{return false}
    }
    if(isMale()==='Мужской'){
        if(age>=65){
            return true
        }
        else{return false}
    }
}

function showAnketa(){
    let userName
    let userLastname
    let userSurname
    let userAge
    while(true){
        userName = prompt('Имя пользователя')
        if(validateOnString(userName)===true){
            break
        }
        else{
            alert('Введите имя еще раз')
        }
    }
    
    while(true){
        userLastname = prompt('Отчество пользователя')
        if(validateOnString(userLastname)===false){
            alert('Введите отчество еще раз')
        }
        else{break}
    }
    while(true){
        userSurname = prompt('Фамилия пользователя')
        if(validateOnString(userSurname)===false){
            alert('Введите фамилию еще раз')
        }
        else{break}
    }
    while(true){
        userAge = +prompt('Возраст пользователя')
        if(validateOnNumber(userAge)===false){
            alert('Введите возраст еще раз')
        }
        else{break}
    }
    let male = confirm('Вы мужчина?')
    let pension = isPension(userAge) ? 'Да' : 'Нет'
    alert(`    Ваше ФИО: ${userSurname} ${userName} ${userLastname}\n
    Ваш возраст в годах: ${userAge}\n
    Ваш возраст в днях: ${userAge*365}\n
    Через 5 лет вам будет: ${userAge+5}\n
    Ваш пол: ${isMale(male)}\n
    Вы на пенсии: ${pension}`)

}
showAnketa()