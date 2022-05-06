const nedb = require("nedb-promise");
const database = new nedb({ filename: "accounts.db", autoload: true });


const eventList = {
    type: "event",
    events: [{
            id: 1,
            title: "Lasse-Stefanz",
            location: "Kjell Härnqvistsalen",
            time: "19:00 - 21:00",
            date: "21 mars",
            price: 350,
        },
        {
          id: 2,
            title: "Pelle trubadur",
            location: "pubelipuben",
            time: "22:00 - 00:00",
            date: "29 mars",
            price: 110,
        },
        {
          id: 3,
            title: "Kajsas Kör",
            location: "Göta Platsen",
            time: "15:00 - 16:00",
            date: "10 april",
            price: 99,
        },
        {
          id: 4,
            title: "Klubben Untz",
            location: "Din favoritkällare",
            time: "22:00 - du tröttnar",
            date: "17 april",
            price: 150,
        },
    ],
};