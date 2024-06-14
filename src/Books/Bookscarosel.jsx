import React from 'react';
import '../Books/Bookscarosel.css';
import { Carousel } from 'react-bootstrap';

const Bookscarosel = () => {
    // Importing images
    const images = [
        require('../Books/BooksImages/img1.jpg'),
        require('../Books/BooksImages/img2.jpg'),
        require('../Books/BooksImages/img3.jpg'),
        require('../Books/BooksImages/img4.jpg'),
        require('../Books/BooksImages/img5.jpg'),
        require('../Books/BooksImages/img6.jpg'),
        require('../Books/BooksImages/img7.jpg'),
        require('../Books/BooksImages/img8.jpg'),
        require('../Books/BooksImages/img9.jpg'),
        require('../Books/BooksImages/img10.jpg'),
        require('../Books/BooksImages/img11.jpg'),
        require('../Books/BooksImages/img12.jpg'),
        require('../Books/BooksImages/img13.jpg'),
        require('../Books/BooksImages/img14.jpg'),
        require('../Books/BooksImages/img15.jpg'),
        require('../Books/BooksImages/img16.jpg'),
        require('../Books/BooksImages/img17.jpg'),
        require('../Books/BooksImages/img2.jpg'),
        require('../Books/BooksImages/img19.jpg'),
        require('../Books/BooksImages/img20.jpg'),
        require('../Books/BooksImages/img21.jpg'),
        require('../Books/BooksImages/img22.jpg'),
        require('../Books/BooksImages/img3.jpg'),
        require('../Books/BooksImages/img7.jpg'),
      
   
    ];

    const chunkArray = (arr, chunkSize) => {
      const chunkedArr = [];
      for (let i = 0; i < arr.length; i += chunkSize) {
          chunkedArr.push(arr.slice(i, i + chunkSize));
      }
      return chunkedArr;
  }

  // Chunking images into arrays of 8 images each
  const chunkedImages = chunkArray(images, 8);

    return (
      <Carousel className='books-carosal'>
      <h4 className='mt-5'>Best Sellers in Books</h4>
      {chunkedImages.map((chunk, index) => (
          <Carousel.Item key={index}>
              <div className=" container d-flex justify-content-between align-items-center">
                  {chunk.map((image, idx) => (
                      <div key={idx} style={{ width: '130px', height: '200px' }}>
                          <img
                              className="img-fluid"
                              src={image}
                              alt={`Slide ${(index * 8) + idx + 1}`}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                      </div>
                  ))}
              </div>
          </Carousel.Item>
      ))}
  </Carousel>
    );
}

export default Bookscarosel;
