const days = ['sun','mon','tue','wed','thur','fri', 'sat']

let week =function week(day,index) {
    console.log(`hi week has ${index+1} as ${day}`);
    
}

days.forEach(week);

const months= ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']

months.forEach(function year(month,index) {
    console.log(`${index+1}th month of the year is ${month}`)
    
});

