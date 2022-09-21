
function INNinfo(){

    let inputNumber = numberInput.value;

    let sex = '';

    let Birthday = new Date(1900, 0, 0);

    let DateBirthdayInNumber = '';

    if((inputNumber.length == 10)){
        
    inputNumber = inputNumber.split('');

        if((inputNumber[8] == 8) || (inputNumber[8] == 1) || ((inputNumber[8] % 2) == 0)){

            sex = 'Женский';

            for (let i = 0; i < 5; i++) {

                DateBirthdayInNumber = DateBirthdayInNumber + inputNumber[i];
                
            }

            DateBirthdayInNumber = DateBirthdayInNumber / 1;

            Birthday.setDate( Birthday.getDate() + DateBirthdayInNumber);

            WhoAreYou.innerHTML = `Пол - ${sex}, д.р. ${Birthday.getDate()}.${Birthday.getMonth() + 1}.${Birthday.getFullYear()}`;

            }

        else{

            sex = 'Мужской';

            for (let i = 0; i < 5; i++) {

                DateBirthdayInNumber = DateBirthdayInNumber + inputNumber[i];
                
            }

            DateBirthdayInNumber = DateBirthdayInNumber / 1;

            Birthday.setDate( Birthday.getDate() + DateBirthdayInNumber);

            WhoAreYou.innerHTML = `Пол - ${sex}, д.р. ${Birthday.getDate()}.${Birthday.getMonth() + 1}.${Birthday.getFullYear()}`;

            }


    }

    
} 