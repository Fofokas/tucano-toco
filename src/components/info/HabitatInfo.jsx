
import React from 'react';
import tucano01 from '../../assets/tucano01.jpg';
import tucanotuco04 from '../../assets/tucanotuco04.jpg';
import paisagemNatural from '../../assets/info/paisagem-natural-floresta.webp';
import cerrado from '../../assets/info/cerrado.jpeg';

const HabitatInfo = () => (
  <>
    <p>O tucano-toco vive em matas de galeria, cerrado e capões.</p>
    <img src={paisagemNatural} alt="Habitat 3 (floresta)" style={{maxWidth: 200, borderRadius: 8, marginRight: 8}} />
    <img src={cerrado} alt="Habitat 4 (cerrado)" style={{maxWidth: 200, borderRadius: 8, marginRight: 8}} />
  </>
);

export default HabitatInfo;
