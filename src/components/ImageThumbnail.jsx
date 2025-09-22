import React from 'react';

const ImageThumbnail = ({ src, alt, onClick, width = 250, height = 250 }) => (
  <img
    src={src}
    alt={alt}
    className="img-fluid"
    style={{ border: '4px solid #f39912', borderRadius: 12, objectFit: 'cover', width, height, maxWidth: '250px', minWidth: '250px', cursor: 'pointer' }}
    onClick={onClick}
    tabIndex={0}
    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
    width={width}
    height={height}
  />
);

export default ImageThumbnail;
