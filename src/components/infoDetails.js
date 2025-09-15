import NomeCientificoInfo from './info/NomeCientificoInfo';
import GeneroInfo from './info/GeneroInfo';
import HabitatInfo from './info/HabitatInfo';

const infoDetails = {
  "Nome Científico": {
    title: "Etimologia de Ramphastos toco",
    content: <NomeCientificoInfo />
  },
  "Gênero": {
    title: "Outros animais do gênero Ramphastos",
    content: <GeneroInfo />
  },
  "Habitat": {
    title: "Habitat do Tucano-Toco",
    content: <HabitatInfo />
  },
  // ...adicione mais detalhes para outros cards se quiser...
};

export default infoDetails;
