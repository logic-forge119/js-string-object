 const college={
    name: 'BCIC',
    class: ['11','12'],
    events: ['science fair','bijoi dibos','21 feb'],
    unique:{
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
 }
 //before merit change:
 console.log("Merit: "+college.unique.result.merit);
 //change the merit:
 college.unique.result.merit= 'top-10';

 //for access color:
 console.log("color: "+college.unique.color);

//for access merit:
console.log("After changing Merit: ");

console.log("Merit: "+college.unique.result.merit);

 