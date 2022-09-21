
function INNinfo(){

    let inputNumber = numberInput.value;

    let sex = '';

    let Birthday = new Date(1900, 0, 0);

    let DateBirthdayInNumber = '';

    let age = new Date();

    let AgeUser = 0;

    if((inputNumber.length == 10)){
        
    inputNumber = inputNumber.split('');

        if((inputNumber[8] == 8) || (inputNumber[8] == 1) || ((inputNumber[8] % 2) == 0)){

            sex = 'Женский';

            for (let i = 0; i < 5; i++) {

                DateBirthdayInNumber = DateBirthdayInNumber + inputNumber[i];
                
            }

            DateBirthdayInNumber = DateBirthdayInNumber / 1;

            Birthday.setDate( Birthday.getDate() + DateBirthdayInNumber);

            //console.log(AgeUser);

            AgeUser = age.getFullYear() - Birthday.getFullYear();

            console.log(Birthday.getFullYear(),typeof(Birthday.getFullYear()));

            //console.log(age.getFullYear());

            //console.log(AgeUser, typeof(AgeUser));

            WhoAreYou.innerHTML = `Пол - ${sex}, д.р. ${Birthday.getDate()}.${Birthday.getMonth() + 1}.${Birthday.getFullYear()}`;

            UserAge.innerHTML = `${AgeUser}`;

            }

        else{

            sex = 'Мужской';

            for (let i = 0; i < 5; i++) {

                DateBirthdayInNumber = DateBirthdayInNumber + inputNumber[i];
                
            }

            DateBirthdayInNumber = DateBirthdayInNumber / 1;

            Birthday.setDate( Birthday.getDate() + DateBirthdayInNumber);

            AgeUser = age.getFullYear - Birthday.getFullYear;

            console.log(age);

            WhoAreYou.innerHTML = `Пол - ${sex}, д.р. ${Birthday.getDate()}.${Birthday.getMonth() + 1}.${Birthday.getFullYear()}`;

            UserAge.innerHTML = `${AgeUser}`;

            }


    }

    
} 