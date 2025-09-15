import { useState } from 'react'



import tucano from './assets/tucano.png'
import teucaninho032 from './assets/teucaninho032.jpg'
import mastigano from './assets/mastigano.jpg'
import tucano01 from './assets/tucano01.jpg'
import tucano02 from './assets/tucano02.png'
import tucanotuco04 from './assets/tucanotuco04.jpg'
import dancingTeucano from './assets/dancing teucano.gif'
import tucanocu from './assets/tucanocu.jpeg'
import tucano_sleep from './assets/tucano_sleep.jpeg'


import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

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
  const [selectedInfo, setSelectedInfo] = useState(null)

  return (
    <>
      <Header />

      <main style={{ padding: "2rem", fontFamily: "sans-serif", background: "#fff8f0" }}>
        <h1 style={{ textAlign: "center", color: "#f39912", fontSize: "2.5rem", marginBottom: "1.5rem", letterSpacing: 1 }}>
          Tucano-Toco (Tucanuçu)
        </h1>

        <section
          className="container mb-4 py-3"
          style={{ background: "#fff3e0", borderRadius: "16px" }}
        >
          <div className="row g-3 justify-content-center align-items-center">
            <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-center">
              <img src={tucano} alt="Tucano Toco" className="img-fluid" style={{ border: '4px solid #f39912', borderRadius: 12, objectFit: 'cover', height: 140, width: 170, maxWidth: '100%' }} />
            </div>
            <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-center">
              <img src={teucaninho032} alt="Tucaninho" className="img-fluid" style={{ border: '4px solid #f39912', borderRadius: 12, objectFit: 'cover', height: 140, width: 170, maxWidth: '100%' }} />
            </div>
            <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-center">
              <img src={mastigano} alt="Tucano mastigando" className="img-fluid" style={{ border: '4px solid #f39912', borderRadius: 12, objectFit: 'cover', height: 140, width: 170, maxWidth: '100%' }} />
            </div>
            <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-center">
              <img src={tucano01} alt="Tucano 01" className="img-fluid" style={{ border: '4px solid #f39912', borderRadius: 12, objectFit: 'cover', height: 140, width: 170, maxWidth: '100%' }} />
            </div>
            <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-center">
              <img src={tucano02} alt="Tucano 02" className="img-fluid" style={{ border: '4px solid #f39912', borderRadius: 12, objectFit: 'cover', height: 140, width: 170, maxWidth: '100%' }} />
            </div>
            <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-center">
              <img src={tucanotuco04} alt="Tucano Tuco 04" className="img-fluid" style={{ border: '4px solid #f39912', borderRadius: 12, objectFit: 'cover', height: 140, width: 170, maxWidth: '100%' }} />
            </div>
            <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-center">
              <img src={dancingTeucano} alt="Tucano dançando" className="img-fluid" style={{ border: '4px solid #f39912', borderRadius: 12, objectFit: 'cover', height: 140, width: 170, maxWidth: '100%' }} />
            </div>
            <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-center">
              <img src={tucanocu} alt="Tucanocu" className="img-fluid" style={{ border: '4px solid #f39912', borderRadius: 12, objectFit: 'cover', height: 140, width: 170, maxWidth: '100%' }} />
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ borderBottom: "3px solid #f39912", color: "#f39912", marginBottom: 18, fontSize: '2rem' }}>Informações Gerais</h2>
          <div className="container" style={{ maxWidth: 900 }}>
            <div className="row g-3">
              {info.map((item, index) => (
                <div className="col-12 col-sm-6 col-md-3" key={index}>
                  <div
                    onClick={() => setSelectedInfo(index)}
                    className="h-100 d-flex align-items-stretch"
                    style={{
                      cursor: 'pointer',
                      background: selectedInfo === index ? '#ffe0b2' : '#fff',
                      border: selectedInfo === index ? '3px solid #f39912' : '2px solid #f39912',
                      borderRadius: 14,
                      padding: '1.2rem 1rem',
                      boxShadow: selectedInfo === index ? '0 2px 12px #f3991240' : '0 1px 6px #f3991215',
                      transition: 'all 0.2s',
                      fontSize: '1.25rem',
                      color: '#2c3e50',
                      minHeight: 120,
                      maxHeight: 160,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      userSelect: 'none',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'normal',
                    }}
                  >
                    <strong style={{ color: '#f39912', fontSize: '1.1em' }}>{item.label}:</strong> {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
