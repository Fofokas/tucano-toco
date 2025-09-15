import { useState } from 'react'
import tucano from './assets/tucano.png'
import tucano_sleep from "./assets/tucano_sleep.jpeg"
import teucaninho032 from "./assets/teucaninho032.jpg"

import Header from './components/Header'

const info = [
  { label: "Nome Científico", value: <i>Ramphastos toco</i> },
  { label: "Gênero", value: "Ramphastos" },
  { label: "Família", value: "Ramphastidae" },
  { label: "Ordem", value: "Piciformes" },
  { label: "Classe", value: "Aves" },
  { label: "Filo", value: "Chordata" },
  { label: "Reino", value: "Animalia" },
  { label: "Habitat", value: "Matas de galeria, cerrado e capões" },
  { label: "País/Região", value: "Todo o Brasil, principalmente no sudeste" },
  { label: "Origem", value: "São originários de florestas tropicais da América Latina" },
  { label: "Nutrição", value: "Onívoros: frutas (banana, mamão, açaí, pinha), insetos e artrópodes" },
  { label: "Reprodução", value: "Ovíparos. Fazem ninhos em árvores ocas, buracos em barrancos ou cupinzeiros. Botam de 2 a 4 ovos, incubados por 16 a 18 dias." },
  { label: "Risco de Extinção", value: "LC – Pouco preocupante" },
]

function App() {
  const [showCuriosity, setShowCuriosity] = useState(false)

  return (
    <>
      <Header />

      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1 style={{ textAlign: "center", color: "#2c3e50" }}>
          Tucano-Toco (Tucanuçu)
        </h1>

        <section style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          <img src={tucano} alt="Tucano Toco" width="300" />
          <img src={teucaninho032} alt="Tucaninho" width="300" />
        </section>

        <section>
          <h2 style={{ borderBottom: "2px solid #ccc" }}>Informações Gerais</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {info.map((item, index) => (
              <li key={index} style={{ margin: "0.5rem 0" }}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <h2 
            style={{ cursor: "pointer", color: "#2980b9" }} 
            onClick={() => setShowCuriosity(!showCuriosity)}
          >
            {showCuriosity ? "▼" : "►"} Curiosidade Legal
          </h2>

          {showCuriosity && (
            <article style={{ background: "#f9f9f9", padding: "1rem", borderRadius: "8px" }}>
              <p>
                Quando dorme, o tucano se dobra de modo que diminui seu tamanho em dois terços.
                Coloca o bico sobre as costas e em seguida, cobre-se com a cauda.
                Também gostam de pousar em torres de telefonia.
              </p>
              <img 
                src={tucano_sleep} 
                alt="Tucano dormindo encolhido" 
                width="300" 
                style={{ marginTop: "1rem", borderRadius: "8px" }}
              />
            </article>
          )}
        </section>
      </main>
    </>
  )
}

export default App
