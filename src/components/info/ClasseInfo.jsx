import React from 'react';
const ClasseInfo = () => (
  <>
    <p>Aves: classe de animais vertebrados, com penas e bico.</p>
    import tucano from '../../assets/tucano.png';
    import teucaninho from '../../assets/teucaninho032.jpg';
    import cerrado from '../../assets/info/cerrado.jpeg';
    <img src={tucano} alt="Classe Aves 1" style={{maxWidth: 200, borderRadius: 8, marginRight: 8}} />
    <img src={teucaninho} alt="Classe Aves 2" style={{maxWidth: 200, borderRadius: 8, marginRight: 8}} />
    <img src={cerrado} alt="Cerrado" style={{maxWidth: 200, borderRadius: 8}} />
  </>
);
export default ClasseInfo;
