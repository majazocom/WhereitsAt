const ticket = JSON.parse(localStorage.getItem('ticket'));

let title = document.getElementById('title');
title.innerText = ticket.title;


//här skall vi ladda upp vår valda biljett till tickets.db
//via api/ticket
function postTicket(ticket) {
    ticket.uniqueKey = Math.floor(Math.random() * 12345);
    document.getElementById('unique').innerText = ticket.uniqueKey;
    fetch('http://localhost:3000/api/ticket', {
        method: 'POST',
        body: JSON.stringify(ticket),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
}

postTicket(ticket);
console.log(ticket);


