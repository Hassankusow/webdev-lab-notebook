const url = "https://anapioficeandfire.com/api/books/";
const app = document.querySelector("#books");

const fetchData = async (url) => {
  try {
    // Fetch the book data
    const response = await fetch(url);
    const books = await response.json();

    // Iterate through each book and create an element
    books.forEach((book) => {
      const bookElement = document.createElement("div");
      bookElement.classList.add("book");

      // Format the book details
      bookElement.innerHTML = `
        <h2>${book.name}</h2>
        <p><strong>Author:</strong> ${book.authors.join(", ")}</p>
        <p><strong>Publication Year:</strong> ${new Date(
          book.released
        ).getFullYear()}</p>
        <p><strong>Pages:</strong> ${book.numberOfPages}</p>
      `;

      // Append to the container
      app.appendChild(bookElement);
    });

    // Update styles to center all books in the container
    app.style.display = "flex";
    app.style.flexDirection = "column";
    app.style.alignItems = "center";
    app.style.gap = "20px";

    // Style each book element
    document.querySelectorAll(".book").forEach((book) => {
      book.style.border = "1px solid black";
      book.style.padding = "15px";
      book.style.width = "300px";
      book.style.textAlign = "center";
      book.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.1)";
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Call the function
fetchData(url);
