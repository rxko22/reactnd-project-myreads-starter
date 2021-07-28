import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import AddBook from './AddBook'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }

  editShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .then(() => {
        book.shelf = newShelf
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat(book)
        }))
      })
  }

  setBooks = shelf => {
    this.setState((currentState) => ({
      books: currentState.books.map(book => {
        if (!book.shelf) {
          book.shelf = 'none'
          BooksAPI.update(book, 'none')
        }
        return book
      })
    }))
  }

  render() {
    const currentlyReadingBooks = this.state.books.filter(book => book.shelf === 'currentlyReading')
    const wantToReadBooks = this.state.books.filter(book => book.shelf === 'wantToRead')
    const readBooks = this.state.books.filter(book => book.shelf === 'read')
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Bookshelf 
                shelfTitle="Currently Reading"
                books={currentlyReadingBooks}
                onChangeShelf={this.editShelf}
              />
              <Bookshelf
                shelfTitle="Want to Read"
                books={wantToReadBooks}
                onChangeShelf={this.editShelf}
              />
              <Bookshelf
                shelfTitle="Read"
                books={readBooks}
                onChangeShelf={this.editShelf}
              />
            </div>
          </div>
          <div className="open-search">
            <Link to='search'><button>Add a book</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
