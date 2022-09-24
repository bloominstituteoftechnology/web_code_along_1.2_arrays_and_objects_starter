const hasCorrectFormat = (date) => {
    let dateArr;
    if(date.includes('-')) {
        dateArr = date.split('-');

        if(dateArr.length !== 3) {
            return false;
        } else if(dateArr[0].length !== 4 || dateArr[1].length !== 2 || dateArr[2].length !== 2) {
            return false;
        } else return true;
    } else if(date.includes('/')) {
        return false;
    } else return false;
}

export const cleanDates = async (arr) => {
    const returnArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        const newObj = {...arr[i]};
        const dob = newObj.profile.dob;

        if((dob !== undefined || dob !== '') && hasCorrectFormat(dob) === false) {
            if(dob.includes('-')) {
                const dobArr = dob.split('-');


            } else if(dob.includes('/')) {
                const dobArr = dob.split('/');

                
            } else if(dob.includes(' ')) {
                const dobArr = dob.split(' ');

                switch (dobArr) {
                    case "January" || "January,":
                      dobArr[0] = "01";
                      break;
                    case "February" || "February,":
                      dobArr[0] = "02";
                      break;
                    case "March" || "March,":
                      dobArr[0] = "03";
                      break;
                    case "April" || "April,":
                      dobArr[0] = "04";
                      break;
                    case "May" || "May,":
                      dobArr[0] = "05";
                      break;
                    case "June" || "June,":
                      dobArr[0] = "06";
                      break;
                    case "July" || "July,":
                      dobArr[0] = "07";
                      break;
                    case "August" || "August,":
                      dobArr[0] = "08";
                      break;
                    case "September" || "September,":
                      dobArr[0] = "09";
                      break;
                    case "October" || "October,":
                      dobArr[0] = "10";
                      break;
                    case "November" || "November,":
                      dobArr[0] = "11";
                      break;
                    case "December" || "December,":
                      dobArr[0] = "12";
                      break;
                    default:
                        console.warn(`Hit default case for month, setting DOB to null due to unconvertable date. Please reset at user level.`);
                        newObj.profile.dob = null;
                        break;
                }


            } else {
                console.warn(`DOB is in unconvertable format, setting to null. Please reset at user level.`);
                newObj.profile.dob = null;
            }
        }

        newObj.formatted = { color: 'black' };
        returnArr.push(newObj);
    };
    
    return returnArr;
}

export const cleanUndefinedKeys = async (arr) => {
    const returnArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        const newObj = {...arr[i]};
        
        for(let key in newObj) {
            
        }

        if(hasCorrectFormat(newObj['profile']['dob'])) {
            newObj.formatted = { color: 'black' };
        }
        returnArr.push(newObj);
    };

    return returnArr;
}
