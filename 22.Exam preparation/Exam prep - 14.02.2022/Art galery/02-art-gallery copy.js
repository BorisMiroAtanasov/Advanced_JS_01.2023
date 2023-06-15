class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    //picture', 'Mona Liza', 3

    articleModel = articleModel.toLowerCase();
    let isInTheArr = false;

    if (!this.possibleArticles[articleModel]) {
      throw new Error(`This article model is not included in this gallery!`);
    }
    for (const el of this.listOfArticles) {
      if (el.articleName === articleName && el.articleModel === articleModel) {
        el.quantity += quantity;
        isInTheArr = true;
      }
    }
    if ((isInTheArr = false)) {
      this.listOfArticles.push({ articleModel, articleName, quantity });
    }
    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    let newGest = {
        guestName,
       points: 0,
        "purchaseArticle": 0
    }
    for (const el of this.guests) {
      if(el.includes(guestName)){
        throw new Error`${guestName} has already been invited.`
     }else{
       this.guests.push(newGest);
       console.log(this.guests);
     }
      
    }
    
   
    // for (const element of this.guests) {
    //     // if(personality === 'Vip'){
    //     //     element[points] = 500;
    //     // }else if(personality === 'Middle'){
    //     //     element[points] = 250;
    //     // }else{
    //     //     element[points] = 50;
    //     // }
    //     console.log(element);
        
    // }
   // return (`You have successfully invited ${guestName}!`)

}

}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

const artGallery = new ArtGallery("Curtis Mayfield");
console.log(artGallery.inviteGuest("John", "Vip"));
console.log(artGallery.inviteGuest("Peter", "Middle"));
console.log(artGallery.inviteGuest("John", "Middle"));
