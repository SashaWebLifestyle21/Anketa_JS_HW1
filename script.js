function validateOnString(str){
    if(!str.match(/^[a-zA-ZА-Яа-я_ ]*$/) || str==='')
        {
            return false
        }
        else{
            return true
        }
    

}
function validateOnNumber(number){
    // if(isNaN(number)){
    //     return false
    // }
    // else {return true}
    let result = !isNaN(number) ? true : false
    return result
    
}
function isMale(male){
    if(male===null){
        return 'Женский'
    }
    else{return 'Мужской'}
}
function isPension(age){
    if(
    (isMale()==='Женский' && age>=55) || 
    (isMale()==='Мужской' && age>=65)
    ){
        return 'Да'
    } else{return 'Нет'}
   
}

function setStr(text){
    
    while(true){
        str = prompt(`${text} пользователя`)
        if(validateOnString(str)){
            return str
        } else{
            alert(`${text} должно содержать только буквы.Повторите ввод`)
        }
    }
}
function showAnketa(){
    // let userName
    // let userLastname
    // let userSurname
    // let userAge
    // while(true){
    //     userName = prompt('Имя пользователя')
    //     if(validateOnString(userName)){
    //         break
    //     }
    //     else{
    //         alert('Введите имя еще раз')
    //     }
    // }
    
    // while(true){
    //     userLastname = prompt('Отчество пользователя')
    //     if(!validateOnString(userLastname)){
    //         alert('Введите отчество еще раз')
    //     }
    //     else{break}
    // }
    // while(true){
    //     userSurname = prompt('Фамилия пользователя')
    //     if(!validateOnString(userSurname)){
    //         alert('Введите фамилию еще раз')
    //     }
    //     else{break}
    // }
    let userName = setStr('Имя')
    let userLastname = setStr('Отчество')
    let userSurname = setStr('Фамилия')
    while(true){
        userAge = +prompt('Возраст пользователя')
        if(validateOnNumber(userAge)===false){
            alert('Введите возраст еще раз')
        }
        else{break}
    }
    let male = confirm('Вы мужчина?')
    // let pension = isPension(userAge) ? 'Да' : 'Нет'
    alert(`    Ваше ФИО: ${userSurname} ${userName} ${userLastname}\n
    Ваш возраст в годах: ${userAge}\n
    Ваш возраст в днях: ${userAge*365}\n
    Через 5 лет вам будет: ${userAge+5}\n
    Ваш пол: ${isMale(male)}\n
    Вы на пенсии: ${isPension(userAge)}`)
}

function searchRusVowelsWay1(str){
    const arrVowels = ['а','е','ё','и','о','у','ы','э','ю','я','А','Е','Ё','И','О','У','Ы','Э','Ю','Я']
    let arrResult = []
    for(let i=0;i<str.length;i++){
        for(let j=0;j<arrVowels.length;j++){
            if(str[i]===arrVowels[j]){
                arrResult.push(str[i])
            }
        }
    }
    alert('Результат в консоли')
    console.log('Найденые гласные буквы')
    for(let i=0;i<arrResult.length;i++){
        console.log(arrResult[i])
    }
    console.log(`Кол-во букв ${arrResult.length}`)
}
function searchRusVowelsWay2(str){
    let res = ''
    let numWord=0
    for(let i=0;i<str.length;i++){
        if(str[i]==='а' || str[i]==='е' || str[i]==='ё' || str[i]==='и' || str[i]==='о' || str[i]==='у' || str[i]==='ы' || 
        str[i]==='э' || str[i]==='ю' || str[i]==='я'){
            res=res+str[i]+' '
            numWord++
        }
    }
    alert(`Найденые гласные буквы ${res}.Кол-во букв ${numWord}`)
}

document.getElementById('btn1').addEventListener('click', () => {
    showAnketa()
})
document.getElementById('btn2').addEventListener('click', () => {
    let str = prompt('Введите строку')
    searchRusVowelsWay1(str)
})
document.getElementById('btn3').addEventListener('click', () => {
    let str = prompt('Введите строку')
    searchRusVowelsWay2(str)
})


