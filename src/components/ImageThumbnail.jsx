import React from 'react';

const ImageThumbnail = ({ src, alt, onClick }) => (
  <img
    src={src}
    alt={alt}
    className="img-fluid"
    style={{ border: '4px solid #f39912', borderRadius: 12, objectFit: 'cover', height: 140, width: 170, maxWidth: '100%', cursor: 'pointer' }}
    onClick={onClick}
    tabIndex={0}
    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
  />
);

export default ImageThumbnail;
