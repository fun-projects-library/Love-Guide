
let button = document.getElementById("button");
let candidate = document.getElementById("candidate");
let money = document.getElementById("money");
let proposal = document.getElementById("proposal");
let answer = document.getElementById("answer");



// --- Now the results calling ---

let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let forth = document.getElementById("forth");
let fifth = document.getElementById("fifth");
let sixth = document.getElementById("sixth");
let seventh = document.getElementById("seventh");




button.onclick = () => { 

    document.getElementById("first").innerHTML = "Now, Be Patient. Your answers are coming slowly!!!";

    second.innerHTML = "";
    third.innerHTML = "";
    forth.innerHTML = "";
    fifth.innerHTML = "";
    sixth.innerHTML = "";
    seventh.innerHTML = "";
    
    const loveStory = new Promise ((happy, sad) => {
        setTimeout( () => {
            if(candidate.value === "Exist"){
            happy(`Good! Next step, You should have some money <i class="fas fa-smile"></i>`)
        } else {
            sad("First you should find someone, then")
        }}, 3000)  
    });
    
    const loveStory2 = () => {
        return new Promise ( (happy, sad) => {
            setTimeout( () => {
                if(money.value === "Enough"){
                    happy("Well, You are ready to propose, then :)")
                } else {
                    sad("I'm sorry but I hope you can find a rich father-in-law :( ")
                }
            }, 4500)
        })
    };
    
    const loveStory3 = () => {
        return new Promise ( (happy, sad) => {
            setTimeout( () => {
                if(proposal.value === "Okay"){
                    happy(`Be ready for any answer but hope the best <i class="fas fa-pray"></i>`)
                } else {
                    sad(`C'mon, Go on and Do it! It will worth it anyway <i class="far fa-smile-wink"></i> `)
                }
            },6000)
        })
    };
    
    const loveStory4 = () => {
        return new Promise ( (happy, sad) => {
            setTimeout( () => {
                if(answer.value === "YES"){
                    happy("Congratulations!!!");
                } else {
                    sad("Find Another One. Don't give up. You will find the true love someday....")
                }
            },7500)
        });
    };
    
    loveStory.then( (res) => {
        second.innerHTML = res;
        return loveStory2();
    }).then( (res) => {
        third.innerHTML = res;
        return loveStory3();
    }).then( (res) => {
        forth.innerHTML = res;
        return loveStory4();
    }).then( (res)=> {
        fifth.innerHTML = res;
        fifth.style.color = "blue";
        sixth.innerHTML = "Go on you deserve it!";
        sixth.href = "https://www.youtube.com/watch?v=JPJjwHAIny4&list=RDMM&start_radio=1",
        sixth.target = "_blank"
    }).catch( (val) => {
        seventh.innerHTML = val;
});

};






