function ticketSort(ticketArr, criteria){

    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;

        }
    }

    let result = [];
    for (const element of ticketArr) {
        let [destination, price, status] = element.split('|');

    result.push(new Ticket(destination, price, status));
        
    
    }


    
            
        
    

}

ticketSort(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination');



// ticketSort(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'status')