import React from 'react';
import tucanoPeitoAmarelo from '../../assets/info/tucano-peito-amarelo.webp';

const GeneroInfo = () => (
  <>
    <ul>
      <li>Ramphastos vitellinus (Tucano-de-peito-amarelo)</li>
      <li>Ramphastos dicolorus (Tucano-de-bico-verde)</li>
    </ul>
    <img src={tucanoPeitoAmarelo} alt="Tucano-de-peito-amarelo" style={{maxWidth: 200, borderRadius: 8}} />
  </>
);

export default GeneroInfo;
