function information() {
    let names = prompt('Введите ваше имя');
    let year = +prompt('Введите год рождения');
    let naweVremya = +prompt('Какой сейчас год?');
    let age = naweVremya - year;
    let allInfo = 'Вас зовут ' + names + ' вы родились в' + year + ' значит вам ' + age;
    return allInfo;
}
alert(information());