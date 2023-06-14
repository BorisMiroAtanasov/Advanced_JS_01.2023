class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles  = {"picture":200,"photo":50,"item":250};
        this.listOfArticles = [];
        this.guests  = [];
    
    }

    addArticle( articleModel, articleName, quantity ){ //picture', 'Mona Liza', 3
       
         articleModel = articleModel.toLowerCase()
         let isInTheArr = false;

         if(!this.possibleArticles[articleModel]){
            throw new Error(`This article model is not included in this gallery!`)
        }
        for (const el of  this.listOfArticles) {
            
            
        }


        }
    
        
    }
    




const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));