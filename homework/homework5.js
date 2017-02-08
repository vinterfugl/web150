var cards = [
    {
    suit: "Hearts",
    value: "Ace"
    },
    {
    suit: "Hearts",
    value: "2"
    },
    {
    suit: "Hearts",
    value: "3"
    },
    {
    suit: "Hearts",
    value: "4"
    },
    {
    suit: "Hearts",
    value: "5"
    },
    {
    suit: "Hearts",
    value: "6"
    },
    {
    suit: "Hearts",
    value: "7"
    },
    {
    suit: "Hearts",
    value: "8"
    },
    {
    suit: "Hearts",
    value: "9"
    },
    {
    suit: "Hearts",
    value: "10"
    },
    {
    suit: "Hearts",
    value: "Jack"
    },
    {
    suit: "Hearts",
    value: "Queen"
    },
    {
    suit: "Hearts",
    value: "King"
    },
    {
    suit: "Diamonds",
    value: "Ace"
    },
    {
    suit: "Diamonds",
    value: "2"
    },
    {
    suit: "Diamonds",
    value: "3"
    },
    {
    suit: "Diamonds",
    value: "4"
    },
    {
    suit: "Diamonds",
    value: "5"
    },
    {
    suit: "Diamonds",
    value: "6"
    },
    {
    suit: "Diamonds",
    value: "7"
    },
    {
    suit: "Diamonds",
    value: "8"
    },
    {
    suit: "Diamonds",
    value: "9"
    },
    {
    suit: "Diamonds",
    value: "10"
    },
    {
    suit: "Diamonds",
    value: "Jack"
    },
    {
    suit: "Diamonds",
    value: "Queen"
    },
    {
    suit: "Diamonds",
    value: "King"
    },
    {
    suit: "Spades",
    value: "Ace"
    },
    {
    suit: "Spades",
    value: "2"
    },
    {
    suit: "Spades",
    value: "3"
    },
    {
    suit: "Spades",
    value: "4"
    },
    {
    suit: "Spades",
    value: "5"
    },
    {
    suit: "Spades",
    value: "6"
    },
    {
    suit: "Spades",
    value: "7"
    },
    {
    suit: "Spades",
    value: "8"
    },
    {
    suit: "Spades",
    value: "9"
    },
    {
    suit: "Spades",
    value: "10"
    },
    {
    suit: "Spades",
    value: "Jack"
    },
    {
    suit: "Spades",
    value: "Queen"
    },
    {
    suit: "Spades",
    value: "King"
    },
    {
    suit: "Clubs",
    value: "Ace"
    },
    {
    suit: "Clubs",
    value: "2"
    },
    {
    suit: "Clubs",
    value: "3"
    },
    {
    suit: "Clubs",
    value: "4"
    },
    {
    suit: "Clubs",
    value: "5"
    },
    {
    suit: "Clubs",
    value: "6"
    },
    {
    suit: "Clubs",
    value: "7"
    },
    {
    suit: "Clubs",
    value: "8"
    },
    {
    suit: "Clubs",
    value: "9"
    },
    {
    suit: "Clubs",
    value: "10"
    },
    {
    suit: "Clubs",
    value: "Jack"
    },
    {
    suit: "Clubs",
    value: "Queen"
    },
    {
    suit: "Clubs",
    value: "King"
    }
];

function pickOne(a, b, c, d, e) {
    a = cards[Math.floor(Math.random() * 51)];
    b = cards[Math.floor(Math.random() * 51)];
    c = cards[Math.floor(Math.random() * 51)];
    d = cards[Math.floor(Math.random() * 51)];
    e = cards[Math.floor(Math.random() * 51)];
    m = a.value + " of " + a.suit + "<br />" +
        b.value + " of " + b.suit + "<br />" +
        c.value + " of " + c.suit + "<br />" +
        d.value + " of " + d.suit + "<br />" +
        e.value + " of " + e.suit + "<br />";
    document.getElementById("display").innerHTML = m;
}

function blackjack(x, y, z) {
    x = cards[Math.floor(Math.random() * 51)];
    y = cards[Math.floor(Math.random() * 51)];
    z = cards[Math.floor(Math.random() * 51)];
    
    if (x.value == "Ace") {
        xval = 1;
    } else if (x.value == "Jack" || x.value == "Queen" || x.value == "King") {
        xval = 10;
    } else {
        xval = parseInt(x.value);
    }
    
    if (y.value == "Ace") {
        yval = 1;
    } else if (y.value == "Jack" || y.value == "Queen" || y.value == "King") {
        yval = 10;
    } else {
        yval = parseInt(y.value);
    }
    
    if (z.value == "Ace") {
        zval = 1;
    } else if (z.value == "Jack" || z.value == "Queen" || z.value == "King") {
        zval = 10;
    } else {
        zval = parseInt(z.value);
    }
    
    xyz = xval + yval + zval;
    
    if (xyz > 21) {
        n = "over 21";
    } else {
        n = xyz;
    }
    
    m = x.value + " of " + x.suit + "<br />" +
        y.value + " of " + y.suit + "<br />" +
        z.value + " of " + z.suit + "<br />" +
        "<br />Your Blackjack score is: " + n;
        

    
    document.getElementById("score").innerHTML = m;
}

/*$("deal").click(function(){
    $("showCards").append("That button does something!");
});*/