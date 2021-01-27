function clock(){
        let d = new Date();
        let time = d.toLocaleDateString();
        console.log(time);
}

setInterval(clock,1000); // simply setinterval and give a function as its argument