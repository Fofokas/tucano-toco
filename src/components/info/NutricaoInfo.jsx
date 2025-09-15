import React from 'react';
const NutricaoInfo = () => (
  <>
    <p>Onívoros: frutas, insetos e artrópodes.</p>
  <img src={require('../../assets/mastigano.jpg')} alt="Frutas" style={{maxWidth: 200, borderRadius: 8, marginRight: 8}} />
  <img src={require('../../assets/tucano01.jpg')} alt="Insetos" style={{maxWidth: 200, borderRadius: 8}} />
  </>
);
export default NutricaoInfo;
