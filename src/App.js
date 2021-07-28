import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {

  }

  render() {
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
