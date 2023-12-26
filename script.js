
window.onload = () => {
    const button1 = document.querySelector('#btn');
    button1.addEventListener('click', travel);

    const button2 = document.querySelector('#btn2');
    button2.addEventListener('click', destination);
}

function travel() {
    const travel = parseFloat(document.querySelector('#travel').value);
    const result = document.querySelector('#result');

    if (isNaN(travel) || travel <= 0) {
        result.innerText = "Please Enter a valid Number ";
        return;
    }

    if (travel <= 5) {
        result.innerText = `You have been charged RS 15 `;
    } else if (travel >= 5.1 && travel <= 10) {
        result.innerText = `You have been charged Rs 20 `;
    } else if (travel >= 10.1 && travel <= 15) {
        result.innerText = `You have been charged Rs 25`;
    } else if (travel >= 15.1 && travel <= 20) {
        result.innerText = `You have been charged Rs 30: `;
    } else if (travel >= 20.1 && travel <= 25) {
        result.innerText = `You have been charged Rs 35: `;
    } else if (travel >= 25.1 && travel <= 30) {
        result.innerText = `You have been charged Rs 40: `;
    } else if (travel >= 30.1 && travel <= 35) {
        result.innerText = `You have been charged Rs 45: `;
    } else if (travel >= 35.1 && travel <= 40) {
        result.innerText = `You have been charged Rs 50: `;
    } else if (travel > 40) {
        result.innerText = `You have been charged Rs 55: `;
    }
}

function destination() {
    const source = document.querySelector('#source').value;
    const destination = document.querySelector('#destination').value;
    const res = document.querySelector('#res');

    if (source === "saddar" && destination === "university of peshawar" || source === "university of peshawar" && destination === "saddar") {
        res.innerText = "You will pay RS 20 (for 6KM)";
        return;
    }

    if (source === destination) {
        res.innerText = "Please Enter a valid source & Destination";
        return;
    }

    if (source === "saddar" && destination === "Mall of Hayat Abad" || source === "Mall of Hayat Abad" && destination === "saddar") {
        res.innerText = "You will pay Rs 25 (for 10 KM)";
        return;
    }

    if (source === "saddar" && destination === "Karkhano Market" || source === "Karkhano Market" && destination === "saddar") {
        res.innerText = "You will pay Rs 30 (for 20 KM)";
        return;
    }

    if (source === "Karkhano Market" && destination === "Lahore Adda" || source === "Lahore Adda" && destination === "Karkhano Market") {
        res.innerText = "You will pay Rs 40 (for 35 KM)";
        return;
    }
    if(source=="saddar" && destination=="Lahore Adda" || source=="Lahore Adda" && destination=="saddar"){
        res.innerText="you will pay Rs 30 (for 20 KM)"
    }
    if(source=="chamkani" && destination=="Karkhano Market"|| source=="Karkhano Market" && destination=="chamkani"){
        res.innerText="you will pay Rs 50 (for 40 KM)"

    }
}  

// let num=1;
// let num2=3;
// let nums=[1,2,3,4,5,"car",true,[2,3,4,"cat",5]]
// let cities=["peshawar","swat","lahore","kohar"]
// cities[1]+"welcome to peshawar";
// console.log(`welcome to ${nums[2}})
//     let m1= [
//         [1,2,3],
//         [2,3,4],
//         [1,2,8],
//     ]

//     let m2= [
//         [2,4,5],
//         [7,3,7],
//         [2,3,5],
//     ]
//    let result=m1[0][0]+m2[0][0]+[0][0]+m2[0][0];
//    console.log(result)
//Assignment adding 3X3 Matrix 
   //m1[0][0] m2[0][0]
   // console.log(nums[7][3])
// // let num=3;
// nums[3]+=6;
// // let result=num+num2;
// console.log(nums)

// let weight=document.querySelector(".weight")
// let height=document.querySelector(".height")
// console.log(weight);
// weight =Number(weight);
// height=Number(height);
// let bmi= weight/(height*height);
// console.log(bmi)
// document.querySelector(".result").textContent =bmi;
// document.querySelector(".bmisay").textContent= "underweight "
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Array Decleration 
// let cities =[1,2,3,4,"pehawar","sawabi","swat",true,[2,3,5,"car"]];
// console.log(cities[7][3])

// num=[1,2,3,4,5]
// num[0]=+32
// console.log(num)





