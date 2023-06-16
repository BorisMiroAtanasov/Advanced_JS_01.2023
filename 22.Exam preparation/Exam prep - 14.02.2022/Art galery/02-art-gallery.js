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
        //console.log(listOfArticles.join(','));
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {

        for (let guest of this.guests) {
            if (guest.guestName === guestName) {
                throw new Error(`${guestName} has already been invited.`)
            }
        }
        let obj = {
            guestName,
            points: 0,
            purchaseArticle: 0,
        }
        if (personality === 'Vip') {
            obj.points = 500
        } else if (personality === 'Middle') {
            obj.points = 250;
        } else {
            obj.points = 50;
        }
        this.guests.push(obj)
        return `You have successfully invited ${guestName}!`

    }
    buyArticle(articleModel, articleName, guestName) {
        let article;
        let guest;
        let isArticleIntheArr = false;
        for (const el of this.listOfArticles) {
            if (el.articleName !== articleName || el.articleModel !== articleModel) {

                isArticleIntheArr = false;
            } else {
                article = el;
                isArticleIntheArr = true;
                break;
            }
        }
        if(!isArticleIntheArr){ //(isArticleIntheArr = false) да се проебва дали е вярно
            throw new Error(`This article is not found.`)
        }



    }

}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

// const artGallery = new ArtGallery("Curtis Mayfield");
// console.log(artGallery.inviteGuest("John", "Vip"));
// console.log(artGallery.inviteGuest("Peter", "Middle"));
// console.log(artGallery.inviteGuest("John", "Middle"));


// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));