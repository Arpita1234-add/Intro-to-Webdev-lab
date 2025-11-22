const url = "https://anapioficeandfire.com/api/books/";

// jQuery references to DOM elements
let $app = $("#books");
let $loading = $("#loading");

// Helper function to append each book to the DOM
const addBookToDOM = (item) => {
  console.log(item);

  // Create elements using jQuery
  let $element = $("<div></div>");
  let $title = $("<h4></h4>").text(item.name);
  let $author = $("<p></p>").text(`by ${item.authors[0]}`);
  let $published = $("<p></p>").text(item.released.substr(0, 4));
  let $pages = $("<p></p>").text(`${item.numberOfPages} pages`);

  // Styling 
  $element.css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  });

  // Append to parent
  $element.append($title, $author, $published, $pages);

  // Add to books container
  $app.append($element);
};

// Fetch data using jQuery Ajax
const fetchData = (url) => {
  $.ajax({
    url: url,
    method: "GET",
    success: function (data) {
      data.forEach((item) => {
        addBookToDOM(item);
      });
    },
    error: function () {
      let $errorMsg = $("<p></p>").text("An error occurred. Please try again.");
      $app.append($errorMsg);
    },
    complete: function () {
      // Remove the loading gif
      $loading.remove();
    },
  });
};

// Call the function
fetchData(url);
