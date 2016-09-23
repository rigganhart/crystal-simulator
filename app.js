window.addEventListener('load', function() {

    // this simulate opening a PHC crystal in marvel coc
    // given a list of champions and percentages of opening a 2star 3star or 4star

    // randomly opening a crystal has a % chance for each type of crystal 2star is 75% 3star is 20% 4star is 5%
    var openCrystal = function() {
        let crystal = "";
        let roll = Math.random();

        if (roll > 0.15) {
            crystal = "2star"
        } else if (roll <= 0.15 && roll > 0.02) {
            crystal = "3star"

        } else if (roll <= 0.02) {
            crystal = "4star"
        }

        return crystal
    }

    // open an ammount of crystals ex:200 crystals
    var openMultiple = function(ammount) {
        let openedCrystals = [];
        let twoStars = [];
        let threeStars = [];
        let fourStars = [];

        for (var i = 0; i < ammount; i++) {
            openedCrystals.push(openCrystal());
        }
        console.log(openedCrystals);
        openedCrystals.forEach(function(el) {
            if (el === "2star") {
                twoStars.push(el)
            } else if (el === "3star") {
                threeStars.push(el)
            } else if (el === "4star") {
                fourStars.push(el)
            }
        });

        console.log("ammount of 2stars",
            twoStars.length);
        console.log("ammount of 3stars",
            threeStars.length);
        console.log("ammount of 4stars",
            fourStars.length);
        var crystalList = document.getElementById('crystalList')
        var totals = document.getElementById('totals')
        crystalList.innerHTML = "";
        openedCrystals.forEach(function(el) {

            var item = document.createElement('li');
            item.innerHTML = `${el}`;
            crystalList.appendChild(item);
        })
        var totalTwo = twoStars.length;
        var totalThree = threeStars.length;
        var totalFour = fourStars.length;
        totals.innerHTML = `
          <h4> Total Two Stars: ${totalTwo}</h4>
          <h4> Total Three Stars: ${totalThree}</h4>
          <h4> Total Four Stars: ${totalFour}</h4>
        `;
    }

    results = function() {
        var button = document.getElementById("open");
        button.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('clicked the button');
            var ammount = document.getElementById("ammount").value;
            openMultiple(ammount);
        });

    }
    results();
})
