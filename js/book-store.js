function cost(books) {
    const bookPrice = 800;
  
    const bookCount = new Map();
  
    books.forEach(book => {
      if (bookCount.has(book)) {
        bookCount.set(book, bookCount.get(book) + 1);
      } else {
        bookCount.set(book, 1);
      }
    });
  
    const discounts = [0, 0, 5, 10, 20, 25];
  
    let totalCost = 0;
  
    while (bookCount.size > 0) {
      const uniqueBooks = bookCount.size;
  
      const discount = discounts[uniqueBooks];
  
      const currentCost = (uniqueBooks * bookPrice * (100 - discount)) / 100;
  
      totalCost += currentCost;
  
      bookCount.forEach((count, book) => {
        if (count === 1) {
          bookCount.delete(book);
        } else {
          bookCount.set(book, count - 1);
        }
      });
    }
  
    return totalCost;
  }
  
  const books = [1, 2, 2, 3, 3, 4, 5, 1];
  const totalCost = cost(books);
  console.log(`Totalkostnaden för böckerna är ${(totalCost / 100).toFixed(2)} USD`);
  