const url = "https://anapioficeandfire.com/api/books/";
const app = document.querySelector("#books");
const loader = document.querySelector("#loading");

const fetchData = async () => {
  try {
    // Fetch books data
    const response = await fetch(url);
    const books = await response.json();

    // Remove loader
    loader.style.display = "none";

    // Loop through books and append each to DOM
    books.forEach((book) => {
      // Create a div for each book
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("mb-4");

      // Extract data
      const title = book.name;
      const author = book.authors[0];
      const year = new Date(book.released).getFullYear();
      const pages = book.numberOfPages;

      // Insert HTML
      bookDiv.innerHTML = `
          <h4 class="fw-bold">${title}</h4>
          <p class="text-muted">by ${author}</p>
          <p>${year}</p>
          <p>${pages} pages</p>
      `;

      // Center using JS (as required)
      bookDiv.style.textAlign = "center";

      // Append to DOM
      app.appendChild(bookDiv);
    });
  } catch (error) {
    console.error("Error fetching books:", error);
    loader.style.display = "none";
    app.innerHTML = "<p>Error loading books.</p>";
  }
};

fetchData();
