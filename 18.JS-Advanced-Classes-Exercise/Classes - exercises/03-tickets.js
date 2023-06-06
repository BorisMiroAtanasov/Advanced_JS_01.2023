function ticketSort(ticketArr, criteria){

    for (const element of ticketArr) {
        
            let [destination, price, status] = element.split('|');
        
            console.log(destination);
            
        
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