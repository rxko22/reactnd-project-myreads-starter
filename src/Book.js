import React from 'react'

const Book = props => {
  const imageURL = props.book.imageLinks ? props.book.imageLinks.thumbnail : ''
  return(
    <div style={{display:'inline-grid'}}className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageURL})` }}></div>
        <div className="book-shelf-changer">
          <select value={props.book.shelf} onChange={e => props.onChangeShelf(props.book, e.target.value)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-bottom">
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
      </div>
    </div>
  )
}

export default Book