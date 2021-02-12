const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

  // Instantiating the Elements:
  const artCard = document.createElement( "div" );
  const headline = document.createElement( "div" );
  const author = document.createElement( "div" );
  const imgContain = document.createElement( "div" );
  const img = document.createElement( "img" );
  const span = document.createElement( "span" );

  // setting class names, attributes, context:
  artCard.classList.add( "card" );
  headline.classList.add( "headline" );
  author.classList.add( "author" );
  imgContain.classList.add( "img-container" );

  headline.textContent = article.headline;
  span.textContent = article.author;
  img.src = article.authorPhoto;

  // appending the info, creating the hierarchy:
  artCard.appendChild( headline );
  artCard.appendChild( author );
  author.appendChild( imgContain );
  imgContain.appendChild( img );
  author.appendChild( span );

  // events
  artCard.addEventListener( "click", (evt) => {
    console.log( article.headline );
  });

  // return
  return artCard;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('https://lambda-times-api.herokuapp.com/articles')
      .then((response)=>{  // creating a card from each and every article obj
          const bsArt = response.data.articles.bootstrap;
              bsArt.forEach((bsArt)=>{
                document.querySelector(selector).appendChild(Card(bsArt)); 
          });
          const jsArt = response.data.articles.javascript;
              jsArt.forEach((jsArt)=>{
                document.querySelector(selector).appendChild(Card(jsArt));
          });
          const jqueryArt = response.data.articles.jquery;
              jqueryArt.forEach((jqueryArt)=>{
                document.querySelector(selector).appendChild(Card(jqueryArt));
          });
          const nodeArt = response.data.articles.node;
              nodeArt.forEach((nodeArt)=>{
                document.querySelector(selector).appendChild(Card(nodeArt));
          });
          const techArt = response.data.articles.technology;
              techArt.forEach((techArt)=>{
                document.querySelector(selector).appendChild(Card(techArt));
          }); // check your S's, also do not call your const and variable to pass in the same // luckily JS is smart and separates that but in the future, this is a NONO!
      })
      .catch((error)=>{
          console.log('error', error)
      })
}

export { Card, cardAppender }
