const headInject = document.createElement( "header-container" );

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>

  // Instantiating the Elements:
  const headDiv = document.createElement( "div" );
  const dateSpan = document.createElement( "span" );
  const titleH1 = document.createElement( "h1" );
  const tempSpan = document.createElement( "span" );

  // setting class names, attributes, context:
  headDiv.classList.add( "header" );
  dateSpan.classList.add( "date" );
  tempSpan.classList.add( "temp" );

  dateSpan.textContext = date;
  titleH1.textContext = title;
  tempSpan.textContext = temp;

  // Append the info, creating the hierarchy:
  headDiv.appendChild( dateSpan );
  headDiv.appendChild( titleH1 );
  headDiv.appendChild( tempSpan );
  headInject.appendChild( headDiv );
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.

  // Append this (Header(title, date, temp))
  const headerInfo = document.querySelector( selector );
  headerInfo.appendChild(Header( "Timmy Times", "February 12th, 2021", "-173°K"));
}

export { Header, headerAppender }
