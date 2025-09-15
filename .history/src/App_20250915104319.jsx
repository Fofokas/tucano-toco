import { useState } from 'react'

import tucano from './assets/tucano.png'
import tucano_sleep from './assets/tucano_sleep.jpeg'
import tucano_sleep_jpg from './assets/tucano_sleep.jpg'
import teucaninho032 from './assets/teucaninho032.jpg'
import mastigano from './assets/mastigano.jpg'
import tucano01 from './assets/tucano01.jpg'
import tucano02 from './assets/tucano02.png'
import tucanotuco04 from './assets/tucanotuco04.jpg'
import dancingTeucano from './assets/dancing teucano.gif'

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

      <main style={{ padding: "2rem", fontFamily: "sans-serif", background: "#fff8f0" }}>
        <h1 style={{ textAlign: "center", color: "#f39912", fontSize: "2.5rem", marginBottom: "1.5rem", letterSpacing: 1 }}>
          Tucano-Toco (Tucanuçu)
        </h1>

        <section style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          flexWrap: "wrap",
          marginBottom: "2.5rem",
          background: "#fff3e0",
          borderRadius: "16px",
          padding: "1.5rem 0"
        }}>
          <img src={tucano} alt="Tucano Toco" width="220" style={{ border: '4px solid #f39912', borderRadius: 12 }} />
          <img src={teucaninho032} alt="Tucaninho" width="220" style={{ border: '4px solid #f39912', borderRadius: 12 }} />
          <img src={mastigano} alt="Tucano mastigando" width="220" style={{ border: '4px solid #f39912', borderRadius: 12 }} />
          <img src={tucano01} alt="Tucano 01" width="220" style={{ border: '4px solid #f39912', borderRadius: 12 }} />
          <img src={tucano02} alt="Tucano 02" width="220" style={{ border: '4px solid #f39912', borderRadius: 12 }} />
          <img src={tucanotuco04} alt="Tucano Tuco 04" width="220" style={{ border: '4px solid #f39912', borderRadius: 12 }} />
          <img src={tucano_sleep} alt="Tucano dormindo (jpeg)" width="220" style={{ border: '4px solid #f39912', borderRadius: 12 }} />
          <img src={tucano_sleep_jpg} alt="Tucano dormindo (jpg)" width="220" style={{ border: '4px solid #f39912', borderRadius: 12 }} />
          <img src={dancingTeucano} alt="Tucano dançando" width="220" style={{ border: '4px solid #f39912', borderRadius: 12 }} />
        </section>

        <section>
          <h2 style={{ borderBottom: "3px solid #f39912", color: "#f39912", marginBottom: 12 }}>Informações Gerais</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {info.map((item, index) => (
              <li key={index} style={{ margin: "0.5rem 0", fontSize: "1.1rem" }}>
                <strong style={{ color: "#f39912" }}>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginTop: "2rem" }}>
          <h2 
            style={{ cursor: "pointer", color: "#f39912" }} 
            onClick={() => setShowCuriosity(!showCuriosity)}
          >
            {showCuriosity ? "▼" : "►"} Curiosidade Legal
          </h2>

          {showCuriosity && (
            <article style={{ background: "#fff3e0", padding: "1.2rem", borderRadius: "12px", border: '2px solid #f39912' }}>
              <p style={{ color: '#b85c00', fontWeight: 500 }}>
                Quando dorme, o tucano se dobra de modo que diminui seu tamanho em dois terços.<br/>
                Coloca o bico sobre as costas e em seguida, cobre-se com a cauda.<br/>
                Também gostam de pousar em torres de telefonia.
              </p>
              <img 
                src={tucano_sleep} 
                alt="Tucano dormindo encolhido" 
                width="300" 
                style={{ marginTop: "1rem", borderRadius: "8px", border: '3px solid #f39912' }}
              />
            </article>
          )}
        </section>
      </main>
    </>
  )
}

export default App
