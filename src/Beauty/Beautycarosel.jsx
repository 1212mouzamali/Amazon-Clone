import React from 'react';
import '../Books/Bookscarosel.css';

import { Carousel } from 'react-bootstrap';

const Beautycarosel = () => {
    // Importing images
    const images = [
        require('../Beauty/BeautyImages/img1.jpg'),
        require('../Beauty/BeautyImages/img2.jpg'),
        require('../Beauty/BeautyImages/img3.jpg'),
        require('../Beauty/BeautyImages/img4.jpg'),
        require('../Beauty/BeautyImages/img5.jpg'),
        require('../Beauty/BeautyImages/img6.jpg'),
        require('../Beauty/BeautyImages/img7.jpg'),
        require('../Beauty/BeautyImages/img8.jpg'),
        require('../Beauty/BeautyImages/img9.jpg'),
        require('../Beauty/BeautyImages/img10.jpg'),
        require('../Beauty/BeautyImages/img11.jpg'),
        require('../Beauty/BeautyImages/img12.jpg'),
        require('../Beauty/BeautyImages/img13.jpg'),
        require('../Beauty/BeautyImages/img14.jpg'),
        require('../Beauty/BeautyImages/img15.jpg'),
        require('../Beauty/BeautyImages/img16.jpg'),
        require('../Beauty/BeautyImages/img17.jpg'),
        require('../Beauty/BeautyImages/img18.jpg'),
        require('../Beauty/BeautyImages/img19.jpg'),
       
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
      <h4>Best Sellers in Beauty & Personal care</h4>
            {chunkedImages.map((chunk, index) => (
                <Carousel.Item key={index}>
                    <div className="d-flex container  align-items-center">
                        {chunk.map((image, idx) => (
                            <div key={idx} className={`image-${(index * 8) + idx + 1}`} style={{ width: '200px', height: '200px', overflow: 'hidden' }}>
                                <img
                                    className="img-fluid beauty-images"
                                    src={image}
                                    alt={`Slide ${(index * 8) + idx + 1}`}
                                    style={{ width: '100%', height: 'auto', maxHeight: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        ))}
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Beautycarosel;
