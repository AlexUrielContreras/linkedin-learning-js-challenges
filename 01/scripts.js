class Books {
   constructor(title, author, isbn, numCopies) {
      this.title = title,
      this.author = author,
      this.isbn = isbn,
      this.numCopies = numCopies
   }

   get availability() {
      return this.getAvailability();
   }

   getAvailability() {
      if (this.numCopies === 0 ) {
         return 'out of stock'
      }

      if (this.numCopies < 10 ) {
         return 'low stock'
      }

      return 'in stock'
   }

   sellBook(numSold = 1) {
      return this.numCopies - numSold
   }

   restock(numOfCopies) {
      return this.numCopies + numOfCopies
   }
}

