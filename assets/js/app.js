
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

            AgeUser = age.getFullYear() - Birthday.getFullYear();

            if(Birthday.getMonth() <= age.getMonth()){

                if(Birthday.getDate() <= age.getDate()){

                    console.log('sdfgsdfg');

                    AgeUser = AgeUser;

                }else{

                    console.log('sdfgsdfg');

                    AgeUser = AgeUser - 1;

                }

            }
            if(Birthday.getMonth() > age.getMonth()){

                if(Birthday.getDate() > age.getDate()){

                    console.log('12341234');

                    AgeUser = AgeUser - 1;

                }else{

                    AgeUser = AgeUser - 1;

                    console.log('12341234');

                }

            }

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

            AgeUser = age.getFullYear() - Birthday.getFullYear();

            if(Birthday.getMonth() >= age.getMonth()){

                if(Birthday.getDate() >= age.getDate()){

                    AgeUser = AgeUser - 1;

                }

            }
            if(Birthday.getMonth() < age.getMonth()){

                if(Birthday.getDate() < age.getDate()){

                    AgeUser = AgeUser;

                }

            }

            WhoAreYou.innerHTML = `Пол - ${sex}, д.р. ${Birthday.getDate()}.${Birthday.getMonth() + 1}.${Birthday.getFullYear()}`;

            UserAge.innerHTML = `${AgeUser}`;

            }


    }

    
} 