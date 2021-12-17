// Birthday calculator
//Step One- Retrieve reference to HTML elements
const akanNameCalculator = (CC, YY, MM, DD, gender) => {
    const calculationResult = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7

    //console.log(calculationResult)
    let wholeNumber = Number(calculationResult.toFixed())

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    if (wholeNumber >= 7) {
        wholeNumber = wholeNumber - 1;
    }

    if (gender == 'Male') {
        return { 'name': maleNames[wholeNumber], 'day': daysOfTheWeek[wholeNumber] };
    } else {
        return { 'name': femaleNames[wholeNumber], 'day': daysOfTheWeek[wholeNumber] };
    }
}

const handleClick = () => {
    console.log("birthDay")
   // alert('Please enter a valid month')
        const buttonObject=document.getElementById("btn")
        const birthDayBox = document.getElementById("birthDay")
        const birthMonthBox = document.getElementById("birthMonth")
        const birthYearBox = document.getElementById("birthYear")
        const birthGenderBox = document.getElementById("birthGender")

    //Step Two- Retrieve reference to HTML elements
        const birthDay = birthDayBox.value;
        const birthMonth= birthMonthBox.value;
        //const birthYear= birthYearBox.value;
        //const birthGender= birthGenderBox.value;


    //console.log(birthDayBox,birthMonthBox,birthYearBox,birthGenderBox)
    // Check user Gender
        const allGendersArray= ["Male", "Female"]
        if (allGendersArray.includes(birthGender)) {
            // CC= Century
            // YY =  Year
            const centuryVar = String(birthYear).substring(0, 2)
            const yearVar = String(birthYear).substring(2)
            //console.log(centuryVar, yearVar);
            if (birthDay <= 0 || birthDay > 31) {
                alert('Please enter a valid day')

            } else if (birthMonth <= 0 || birthMonth > 12) {
                alert('Please enter a valid month')
            }
            else  {
                const akanName = akanNameCalculator(centuryVar,yearVar,birthMonth,birthDay, birthGender);
                alert(`Your Akan name is ${akanName.name} born on ${akanName.day}`)
            }
        } else{
            return 'Please enter a valid value';
            alert('Please enter either Male or Female in the gender box')

}}