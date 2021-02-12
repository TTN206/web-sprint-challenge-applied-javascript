import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>

  // Instantiating the Elements:
  const topicsD = document.createElement( "div" );

  // setting class names, attributes, context:
  topicsD.classList.add( "topics" );

  topics.forEach( param => {
    const tab = document.createElement( "div" );
    
    tab.classList.add( "tab" );
    tab.textContent = param;
    // appending the info, creating the hierarchy:
    topicsD.appendChild( tab );
  });
  // return
  return topicsD;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  
  // entrypoint to inject in HTML // ".tabs-container"
  const tabInject = document.querySelector( `${ selector }` );
  // use axios
  axios
    .get( "https://lambda-times-api.herokuapp.com/topics" )
    .then(( res ) => {
      const topicsArr = res.data.topics;
      tabInject.appendChild( Tabs( topicsArr )) // Tabs( topicsArr ); needed to append this portion, not just return as is
    })
    .catch(( err ) => {
      console.log( err, "Houston, we have a problem" );
    })
}

export { Tabs, tabsAppender }
