const Amount = document.querySelector('.total');
const container = document.querySelector('.container');
const salad_here = document.querySelector('.saladhere');
const bacon_here = document.querySelector('.baconhere');
const cheese_here = document.querySelector('.cheesehere');
const meat_here = document.querySelector('.meathere');
const add_ingredients = document.querySelector('.add_ingredients');

var total = 4.00;
var saladnum = 0;
var baconnum = 0;
var cheesenum = 0;
var meatnum = 0;

function Render(ingredient,num){
    document.querySelectorAll('.'+ingredient).forEach(function(a) {
        a.remove()
    });

    for(let i=0; i<num; i++) {
        const newitem = document.createElement('div');
        newitem.classList.add(ingredient);
        if(ingredient === 'salad') {
            container.insertBefore(newitem, salad_here);
        }
        if(ingredient === 'bacon') {
            container.insertBefore(newitem, bacon_here);
        }
        if(ingredient === 'cheese') {
            container.insertBefore(newitem, cheese_here);
        }
        if(ingredient === 'meat') {
            container.insertBefore(newitem, meat_here);
        }
    }

    Amount.innerHTML = (total).toFixed(2);

    if(saladnum === 0 && baconnum === 0 && cheesenum === 0 && meatnum === 0) {
        console.log("block")
        add_ingredients.style.display = "block";
    } else {
        console.log("none")
        add_ingredients.style.display = "none";
    }

    (saladnum === 0) ? makedisable('salad') : removedisable('salad');
    (baconnum === 0) ? makedisable('bacon') : removedisable('bacon');
    (cheesenum === 0) ? makedisable('cheese') : removedisable('cheese');
    (meatnum === 0) ? makedisable('meat') : removedisable('meat');
}

function More(ingredient) {
    if(ingredient === 'salad') {
        saladnum+=1;
        total+=0.50;
        Render('salad',saladnum)
    }
    if(ingredient === 'bacon') {
        baconnum+=1;
        total+=0.70;
        Render('bacon',baconnum)
    }
    if(ingredient === 'cheese') {
        cheesenum+=1;
        total+=0.40;
        Render('cheese',cheesenum)
    }
    if(ingredient === 'meat') {
        meatnum+=1;
        total+=1.30;
        Render('meat',meatnum)
    }
}

function Less(ingredient) {
    if(ingredient === 'salad' && saladnum!==0) {
        saladnum-=1;
        total-=0.50;
        Render('salad',saladnum)
    }
    if(ingredient === 'bacon' && baconnum!==0) {
        baconnum-=1;
        total-=0.70;
        Render('bacon',baconnum)
    }
    if(ingredient === 'cheese' && cheesenum!==0) {
        cheesenum-=1;
        total-=0.40;
        Render('cheese',cheesenum)
    }
    if(ingredient === 'meat' && meatnum!==0) {
        meatnum-=1;
        total-=1.30;
        Render('meat',meatnum)
    }
}

function makedisable(item) {
    const lessbutton = document.querySelector('.'+item+"_container").querySelector(".Less")
    lessbutton.disabled = true;
}

function removedisable(item) {
    const lessbutton = document.querySelector('.'+item+"_container").querySelector(".Less")
    lessbutton.disabled = false;
}