//1

const creatVisitor = (namn, ålder, ticketId) => {
    return{namn, ålder, ticketId}
};

const visitor = creatVisitor('Verena Nardi ', 45 , ' H32AZ123')
console.log(visitor)

//2

const revokeTicket = (visitor) => {
    visitor.ticketId = null;
    return visitor;
};

const visitorWithTicket = {
    namn: 'Verena Nardi',
    ålder: 45,
    ticketId: 'H32AZ123'
};

console.log(revokeTicket(visitorWithTicket))

//3

const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
  };

function ticketStatus(check_ticket, ticket){
    if(ticket in check_ticket){
        if(check_ticket[ticket] != null){
            return `ticket sold to ${check_ticket[ticket]}`
        }
        else{
            return 'Ticket not sold'
        }
    }
    else{
        return 'None ticket ID'
    }

}

console.log(ticketStatus(tickets, '0H2AZ123'))
console.log(ticketStatus(tickets, '23LA9T41'))
console.log(ticketStatus(tickets, 'RE90VAW7'))

//4

function simpleTicketStatus(tickets, ticketId) {
    if (tickets[ticketId] !== null && tickets[ticketId] !== undefined) {
      return tickets[ticketId];
    } else {
      return 'invalid ticket !!!';
    }
  }
  
  console.log(simpleTicketStatus(tickets, '23LA9T41'));
  console.log(simpleTicketStatus(tickets, '0H2AZ123'));
  console.log(simpleTicketStatus(tickets, 'RE90VAW7')); 

  
//5

function gtcVersion(visitor) {
    if (visitor.gtc && visitor.gtc.version) {
      return visitor.gtc.version;
    } else {
      return undefined;
    }
  }
  
  const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
      signed: true,
      version: '2.1',
    },
  };
  
  const visitorOld = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
  };
  
  console.log(gtcVersion(visitorNew));
  console.log(gtcVersion(visitorOld));
  