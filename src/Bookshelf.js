import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const Bookshelf = ({ shelfTitle, books, onChangeShelf }) => {
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => {
            return(
              <Book key={book.id} book={book} onChangeShelf={onChangeShelf}/>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

React.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default Bookshelf