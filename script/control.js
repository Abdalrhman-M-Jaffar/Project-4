// inputs
let nameInput = document.getElementById('step1-name-input');
let emailInput = document.getElementById('step1-email-input');
let pNumberInput = document.getElementById('step1-number-input');

nameInput.onkeyup = function(){
    if(nameInput.value == ''){
        nameInput.placeholder = 'This field is requierd';
        nameInput.classList.add('place-holder-color');
        nameInput.style.cssText = `border-color: #c75361; outline-color: #c75361;`;
    }
    else{
        nameInput.placeholder = 'e.g. Stephen King';
        nameInput.classList.remove('place-holder-color');
        nameInput.style.cssText = `border-color: #AAA;`;
    }
}

emailInput.onkeyup = function(){
    if(emailInput.value == ''){
        emailInput.placeholder = 'This field is requierd';
        emailInput.classList.add('place-holder-color');
        emailInput.style.cssText = `border-color: #c75361; outline-color: #c75361;`;
    }
    else{
        emailInput.placeholder = 'e.g. Stephen King';
        emailInput.classList.remove('place-holder-color');
        emailInput.style.cssText = `border-color: #AAA;`;
    } 
}

pNumberInput.onkeyup = function(){
    if(pNumberInput.value == '' && pNumberInput.value < 0){
        pNumberInput.placeholder = 'This field is requierd';
        pNumberInput.classList.add('place-holder-color');
        pNumberInput.style.cssText = `border-color: #c75361; outline-color: #c75361;`;
    }
    else{
        pNumberInput.placeholder = 'e.g. Stephen King';
        pNumberInput.classList.remove('place-holder-color');
        pNumberInput.style.cssText = `border-color: #AAA; outline-color: #AAA;`;
    }
}

// next prev btns design and conditions

let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let calcBtn = document.getElementById('calcBtn');
let confirmBtn = document.getElementById('confirmBtn');
let changePlan = document.getElementById('changePlan');
let newSubscription = document.getElementById('star-new-subscription-con');
let okBtn = document.getElementById('msg-okBtn');

let btnCounter = 1; // imp

function prevNextBtn(){
    if(btnCounter == 1){
        prevBtn.style.cssText = `visibility: hidden; opacity: 0;`;
        nextBtn.style.cssText = `visibility: visible; opacity: 1;`;
        confirmBtn.style.cssText = `visibility: hidden; opacity: 0;`;
        calcBtn.style.cssText = `visibility: hidden; opacity: 0;`;
    }
    else if(btnCounter == 2){
        prevBtn.style.cssText = `visibility: visible; opacity: 1;`;
        nextBtn.style.cssText = `visibility: visible; opacity: 1;`;
        confirmBtn.style.cssText = `visibility: hidden; opacity: 0;`;
        calcBtn.style.cssText = `visibility: hidden; opacity: 0;`;
    }
    else if(btnCounter == 3){
        nextBtn.style.cssText = `visibility: hidden; opacity: 0;`;
        confirmBtn.style.cssText = `visibility: hidden; opacity: 0;`;
        calcBtn.style.cssText = `visibility: visible; opacity: 1;`;
    }
    else if(btnCounter == 4){
        prevBtn.style.cssText = `visibility: hidden; opacity: 0;`;
        nextBtn.style.cssText = `visibility: hidden; opacity: 0;`;
        calcBtn.style.cssText = `visibility: hidden; opacity: 0;`;
        confirmBtn.style.cssText = `visibility: visible; opacity: 1;`;
    }
    else if(btnCounter == 5){
        prevBtn.style.cssText = `visibility: hidden; opacity: 0;`;
        nextBtn.style.cssText = `visibility: hidden; opacity: 0;`;
        calcBtn.style.cssText = `visibility: hidden; opacity: 0;`;
        confirmBtn.style.cssText = `visibility: hidden; opacity: 0;`;
        newSubscription.style.cssText = `visibility: visible; opacity: 1;`;
    }

    if(btnCounter <= 0)
        btnCounter = 1;
    else if(btnCounter > 5)
        btnCounter = 5;
}
prevNextBtn();

// switching pages

let step1 = document.getElementById('step1');
let step2 = document.getElementById('step2');
let step3 = document.getElementById('step3');
let step4 = document.getElementById('step4');
let step5 = document.getElementById('step5');

let step1Number = document.getElementById('s1');
let step2Number = document.getElementById('s2');
let step3Number = document.getElementById('s3');
let step4Number = document.getElementById('s4');
let step5Number = document.getElementById('s5');

function switchingPages(){
    if(btnCounter == 1){
        step1.style.cssText = `visibility: visible; opacity: 1; z-index = 98;`
        step2.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`
        step3.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`
        step4.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`
        step5.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`

        step1Number.style.cssText = `background-color: #bcdff9; color: #333; border: 1px solid #bcdff9;`
        step2Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
        step3Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
        step4Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
        step5Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
    }
    if(btnCounter == 2){
        step1.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`
        step2.style.cssText = `visibility: visible; opacity: 1; z-index = 98;`
        step3.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`
        step4.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`
        step5.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`

        step1Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
        step2Number.style.cssText = `background-color: #bcdff9; color: #333; border: 1px solid #bcdff9;`
        step3Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
        step5Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
    }
    if(btnCounter == 3){
        step1.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`
        step2.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`
        step3.style.cssText = `visibility: visible; opacity: 1; z-index = 98;`
        step4.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`
        step5.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`

        step1Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
        step2Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
        step3Number.style.cssText = `background-color: #bcdff9; color: #333; border: 1px solid #bcdff9;`
        step4Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
        step5Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
    }
    if(btnCounter == 4){
        step1.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`
        step2.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`
        step3.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`
        step4.style.cssText = `visibility: visible; opacity: 1; z-index = 98;`
        step5.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`

        step1Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
        step2Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
        step3Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
        step4Number.style.cssText = `background-color: #bcdff9; color: #333; border: 1px solid #bcdff9;`
        step5Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
    }
    if(btnCounter == 5){
        step1.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`
        step2.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`
        step3.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`
        step4.style.cssText = `visibility: hidden; opacity: 0; z-index = 97;`
        step5.style.cssText = `visibility: visible; opacity: 1; z-index = 98;`

        step1Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
        step2Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
        step3Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
        step4Number.style.cssText = `background-color: transparent; color: white; border: 1px solid white;`
        step5Number.style.cssText = `background-color: #bcdff9; color: #333; border: 1px solid #bcdff9;`
    }
}

// btns

let msg = document.getElementById('msg');

prevBtn.onclick = function(){
    btnCounter--;
    prevNextBtn();
    switchingPages();
}

nextBtn.onclick = function(){
    btnCounter++;
    prevNextBtn();
    switchingPages()
}

calcBtn.onclick = function(){
    if(nameInput.value.length > 0 && emailInput.value.length > 0 && pNumberInput.value.length > 0 && (planChosed == 'Arcade' || planChosed == 'Advanced' || planChosed == 'Pro') && (addOnsN1 == 1 || addOnsN2 == 1 || addOnsN3 == 1)){
        btnCounter++;
        prevNextBtn();
        switchingPages();
        calcAndShowData();
    }
    else{
        msg.style.cssText = `z-index: 99; opacity: 1;`;
    }
}

confirmBtn.onclick = function(){
    btnCounter++;
    prevNextBtn();
    switchingPages();
}

changePlan.onclick = function(){
    btnCounter = 2;
    prevNextBtn();
    switchingPages()
}

newSubscription.onclick = function(){
    btnCounter = 1;
    prevNextBtn();
    switchingPages();
    newSubscription.style.cssText = `visibility: hidden; opacity: 0;`;
    nameInput.value = '';
    emailInput.value = '';
    pNumberInput.value = '';
    planChosed = '';
    card1.style.cssText = `border: 2px solid #AAA;`;
    card2.style.cssText = `border: 2px solid #AAA;`;
    card3.style.cssText = `border: 2px solid #AAA;`;
    if(planTypechecker == 'year')
        planTypeBtn.click();
    if(addOnsN1 == 1){
        addOns1.click();
        addOnsN1 = 0;
    }
    if(addOnsN2 == 1){
        addOns2.click();
        addOnsN2 = 0;
    }
    if(addOnsN3 == 1){
        addOns3.click();
        addOnsN3 = 0
    }
}

okBtn.onclick = function(){
    msg.style.cssText = `z-index: 50; opacity: 0;`;
}


// chosing plan

let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card1Price = document.getElementById('card1-price');
let card2Price = document.getElementById('card2-price');
let card3Price = document.getElementById('card3-price');
var planChosed = ''; // imp

card1.onclick = function(){
    planChosed = 'Arcade';
    card1.style.cssText = `border: 2px solid #02295a;`;
    card2.style.cssText = `border: 2px solid #AAA;`;
    card3.style.cssText = `border: 2px solid #AAA;`;
}
card2.onclick = function(){
    planChosed = 'Advanced';
    card1.style.cssText = `border: 2px solid #AAA;`;
    card2.style.cssText = `border: 2px solid #02295a;`;
    card3.style.cssText = `border: 2px solid #AAA;`;
}
card3.onclick = function(){
    planChosed = 'Pro';
    card1.style.cssText = `border: 2px solid #AAA;`;
    card2.style.cssText = `border: 2px solid #AAA;`;
    card3.style.cssText = `border: 2px solid #02295a;`;
}

// plan type
let monthly = document.getElementById('monthly');
let yearly = document.getElementById('yearly');
let planTypeBtn = document.getElementById('planTypeBtn');
let planTypechecker = 'month'; // imp

planTypeBtn.onclick = function(){
    if(planTypeBtn.checked){
        yearly.style.cssText = `font-weight: bold; color: #02295a;`;
        monthly.style.cssText = `font-weight: normal; color: #AAA;`;
        card1Price.innerHTML = '$90/yr';
        card2Price.innerHTML = '$120/yr';
        card3Price.innerHTML = '$150/yr';

        addOnsPrice1.innerHTML = '$10/yr';
        addOnsPrice2.innerHTML = '$20/yr';
        addOnsPrice3.innerHTML = '$20/yr';
        planTypechecker = 'year';
    }
    else{
        monthly.style.cssText = `font-weight: bold; color: #02295a;`;
        yearly.style.cssText = `font-weight: normal; color: #AAA;`;
        card1Price.innerHTML = '$9/mo';
        card2Price.innerHTML = '$12/mo';
        card3Price.innerHTML = '$15/mo';

        addOnsPrice1.innerHTML = '$1/yr';
        addOnsPrice2.innerHTML = '$2/yr';
        addOnsPrice3.innerHTML = '$2/yr';
        planTypechecker = 'month';
    }
}


// add ons
let addOnsCon1 = document.getElementById('add-ons-con1');
let addOnsCon2 = document.getElementById('add-ons-con2');
let addOnsCon3 = document.getElementById('add-ons-con3');

let addOns1 = document.getElementById('addOns1');
let addOns2 = document.getElementById('addOns2');
let addOns3 = document.getElementById('addOns3');

var addOnsPrice1 = document.getElementById('addOnsPrice1');
var addOnsPrice2 = document.getElementById('addOnsPrice2');
var addOnsPrice3 = document.getElementById('addOnsPrice3');

let addOnsN1 = 0, addOnsN2 = 0, addOnsN3 = 0;

addOns1.onclick = function(){
    if(addOns1.checked){
        addOnsCon1.style.cssText = `border-color: #02295a`;
        addOnsN1 = 1;
    }
    else{
        addOnsCon1.style.cssText = `border-color: #AAA`;
        addOnsN1 = 0
    }
}

addOns2.onclick = function(){
    if(addOns2.checked){
        addOnsCon2.style.cssText = `border-color: #02295a`;
        addOnsN2 = 1;
    }
    else{
        addOnsCon2.style.cssText = `border-color: #AAA`;
        addOnsN2 = 0
    }
}

addOns3.onclick = function(){
    if(addOns3.checked){
        addOnsCon3.style.cssText = `border-color: #02295a`;
        addOnsN3 = 1;
    }
    else{
        addOnsCon3.style.cssText = `border-color: #AAA`;
        addOnsN3 = 0
    }
}

// calc and show data
let chosedPlanInner = document.getElementById('chosedPlanInner');
let planPriceInner = document.getElementById('planPriceInner');
let totalPrice = document.getElementById('totalPrice');

let feature1 = document.getElementById('feature1');
let feature2 = document.getElementById('feature2');
let feature3 = document.getElementById('feature3');

let featurePrice1 = document.getElementById('feature-price1');
let featurePrice2 = document.getElementById('feature-price2');
let featurePrice3 = document.getElementById('feature-price3');

function calcAndShowData(){
    let priceSumer = 0;
    let pricePerMo = 0;
    let pricePerYr = 0;
    if(planTypechecker == 'month'){
        if(planChosed == 'Arcade'){
            priceSumer = +priceSumer + 9;
            pricePerMo = priceSumer;
        }
        else if(planChosed == 'Advanced'){
            priceSumer = +priceSumer + 12;
            pricePerMo = priceSumer;
        }
        else if(planChosed == 'Pro'){
            priceSumer = +priceSumer + 15;
            pricePerMo = priceSumer;
        }
        
        if(addOnsN1 == 1)
            priceSumer = +priceSumer + 1;
        else
            priceSumer = +priceSumer + 0;    
        if(addOnsN2 == 1)
            priceSumer = +priceSumer + 2;
        else
            priceSumer = +priceSumer + 0;
        if(addOnsN3 == 1)
            priceSumer = +priceSumer + 2;
        else{
            priceSumer = +priceSumer + 0;
        }
    
        chosedPlanInner.innerHTML = `${planChosed} (Monthly)`;
        planPriceInner.innerHTML = `$${pricePerMo}/mo`;
        totalPrice.innerHTML = `+$${priceSumer}/mo`;
        if(addOnsN1 == 1){
            feature1.style.cssText = `display: flex`;
            featurePrice1.innerHTML = `+$1/mo`;
        }
        else if (addOnsN1 == 0){
            feature1.style.cssText = `display: none`;
        }

        if(addOnsN2 == 1){
            feature2.style.cssText = `display: flex`;
            featurePrice2.innerHTML = `+$2/mo`;
        }
        else if (addOnsN2 == 0){
            feature2.style.cssText = `display: none`;
        }

        if(addOnsN3 == 1){
            feature3.style.cssText = `display: flex`;
            featurePrice3.innerHTML = `+$2/mo`;
        }
        else if (addOnsN3 == 0){
            feature3.style.cssText = `display: none`;
        }
    }
    else if(planTypechecker == 'year'){
        if(planChosed == 'Arcade'){
            priceSumer = +priceSumer + 90;
            pricePerYr = priceSumer;
        }
        else if(planChosed == 'Advanced'){
            priceSumer = +priceSumer + 120;
            pricePerYr = priceSumer;
        }
        else if(planChosed == 'Pro'){
            priceSumer = +priceSumer + 150;
            pricePerYr = priceSumer;
        }
        
        if(addOnsN1 == 1)
            priceSumer = +priceSumer + 10;
        else
            priceSumer = +priceSumer + 0;    
        if(addOnsN2 == 1)
            priceSumer = +priceSumer + 20;
        else
            priceSumer = +priceSumer + 0;
        if(addOnsN3 == 1)
            priceSumer = +priceSumer + 20;
        else{
            priceSumer = +priceSumer + 0;
        }

        chosedPlanInner.innerHTML = `${planChosed} (Yearly)`;
        planPriceInner.innerHTML = `$${pricePerYr}/yr`;
        totalPrice.innerHTML = `+$${priceSumer}/yr`;

        if(addOnsN1 == 1){
            feature1.style.cssText = `display: flex`;
            featurePrice1.innerHTML = `+$10/mo`;
        }
        else if (addOnsN1 == 0){
            feature1.style.cssText = `display: none`;
        }

        if(addOnsN2 == 1){
            feature2.style.cssText = `display: flex`;
            featurePrice2.innerHTML = `+$20/mo`;
        }
        else if (addOnsN2 == 0){
            feature2.style.cssText = `display: none`;
        }

        if(addOnsN3 == 1){
            feature3.style.cssText = `display: flex`;
            featurePrice3.innerHTML = `+$20/mo`;
        }
        else if (addOnsN3 == 0){
            feature3.style.cssText = `display: none`;
        }
    }
}