import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class AddBook extends React.Component{
  state = {
    query: '',
    filteredBooks: [],
  }

  updateQuery = (query) => {
    if (query === '') {
      this.setState({filteredBooks: []})
      this.setState(() => ({
        query: ''
      }))
    } else {
      this.setState(() => ({
        query: query
      }))
      this.searchBooks(query)
    }
  }
  
  searchBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then(books => {
        if (books && books.length > 0) {
          this.updateBooks(books)
        } else {
          this.setState({ filteredBooks: [] })
        }
      })
    }
  }

  updateBooks = (filterBooks) => {
    const updatedBooks = filterBooks.map(book => {
      book.shelf = 'none'
      this.props.books.forEach(shelvedBook => {
        if (shelvedBook.id === book.id) {
          book.shelf = shelvedBook.shelf
        }
      })
      return book
    })
    this.setState({
      filteredBooks: updatedBooks
    })
  }

  render() {
    const { onChangeShelf } = this.props
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'><button className="close-search">Close</button></Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
          {this.state.filteredBooks.map(book => {
            return <Book key={book.id} book={book} onChangeShelf={onChangeShelf}/>
          })}
        </div>
      </div>
    )
  }
}

export default AddBook