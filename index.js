let main = {
    anime: "Naruto",
    info: "Jinchuurikis, their Bijuus and where they reside...",
    list: {
        0: ["Gaaara of the Desert" , "Shukaku(One-tail)" , "Sunagakure (Hidden Sand Village)\n"],
        1: ["Yugito Nii" , "Matatabi(Two-tails)" , "Kumogakure (Hidden Cloud Village)\n"],
        2: ["Yagura" , "Isobu(Three-tails)" , "Kirigakure (Hidden Mist Village)\n"],
        3: ["Rōshi" , "Son Gokū(Four-tails)" , "Iwagakure (Hidden Stone Village)\n"],
        4: ["Han" , "Kokuō(Five-tails)" , "Iwagakure (Hidden Stone Village)\n"],
        5: ["Utakata" , "Saiken(Six-tails)" , "Kirigakure (Hidden Mist Village)\n"],
        6: ["Fū" , "Chōmei(Seven-tails)" , "Takigakure (Hidden Waterfall Village)\n"],
        7: ["Killer Be" , "Gyūki(Eight-tails)" , "Kumogakure (Hidden Cloud Village)\n"],
        8: ["Naruto Uzumaki" , "Kurama(nine-tails)" , "Konohagakure (Hidden Leaf Village)\n"],
    }

}
generateList(main)

function generateList(main){
    console.log(`## Hi guys, the name of the anime we're going to talk about today is ${main.anime} ##\n`)
    console.log(`Where we'll show you a list of ${main.info}\n`)
    console.log("-------------------\n")

    for(let index in main.list){
        let [jinju, bijuu, Village] = main.list[index]
        console.log(`— ${jinju}: ${bijuu} • ${Village}`)
    }

}

console.log("Hope you'll enjoy it xD")