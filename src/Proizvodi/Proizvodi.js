import React, { useState } from 'react';
import './Proizvodi.css';

function Proizvodi() {
  const [activeProduct, setActiveProduct] = useState(null);

  const proizvodi = {
    pita: [
      { name: 'Burek 300g', description: 'Tradicionalni burek sa mesom(junetina), savršen za uživanje.' },
      { name: 'Sirnica 300g', description: 'Pita sa svježim sirom, mekana i ukusna.' },
      { name: 'Krompirusa 300g', description: 'Pita sa krompirom, lagana i sočna.' },
      { name: 'Pita sa gljivama 300g', description: 'Pita sa gljivama (šampinjoni), ukusna i zdrava.' },
      { name: 'Mantije 300g', description: 'Pita sa piletinom, sočna i mirisna.' },
      { name: 'Pite na kilogram', description: 'Pite sa različitim punjenjima, sve na kilogram.' },
      { name: 'Pica kaprićoza', description: 'Pica sa raznim vrstama sira, paradajz sosom i začinima.' },
      { name: 'Pica kaprićoza parče', description: 'Pica kaprićoza, u parčetu, idealna za užinu.' },
      { name: 'Pica piroška', description: 'Pica u obliku piroške, s bogatim punjenjem.' },
    ],
    pecivo: [
      { name: 'Hljeb posavac 600g', description: 'Svježi hljeb, pečen sa puno ljubavi.' },
      { name: 'Hljeb rezani 600g', description: 'Svježi hljeb, rezan u kriške, savršen za svaki obrok.' },
      { name: 'Hljeb domaći 600g', description: 'Domaći hljeb, bogatog okusa i mirisa.' },
      { name: 'Hljeb integralni 600g', description: 'Integralni hljeb, bogat vlaknima i zdrav za probavu.' },
      { name: 'Hljeb francuz 350g', description: 'Hljeb u francuskom stilu, hrskav s vanjske strane i mekan iznutra.' },
      { name: 'Hljeb panini 300g', description: 'Svježi panini, savršen za sendviče.' },
      { name: 'Domaća integralna pogača 500g', description: 'Pogača sa integralnim brašnom, mekana i hranjiva.' },
      { name: 'Margarita 700g', description: 'Margarita pogača, jednostavna i ukusna.' },
      { name: 'Zemičke 500g', description: 'Mekane zemičke, idealne uz supu ili za doručak.' },
      { name: 'Zemičke integralne 500g', description: 'Integralne zemičke, zdrave i ukusne.' },
      { name: 'Kukuruza 50g', description: 'Kukuruzne kifle, savršene za užinu.' },
      { name: 'Heljdini uštipci 50g', description: 'Uštipci od heljdinog brašna, lagani i zdravi.' },
      { name: 'Kifla 80g', description: 'Mekana kifla, idealna za doručak.' },
      { name: 'Mini kifle 5/1 150g', description: 'Male kiflice, idealne za djecu ili užinu.' },
      { name: 'Sitne susam kiflice 20g', description: 'Kiflice sa susamom, savršene za doručak.' },
      { name: 'Kajzerice 120g', description: 'Kajzerice sa svježim maslacem, hrskave i mekane.' },
      { name: 'Pecivo za hamburger 150g', description: 'Pecivo idealno za hamburger, mekano i izdašno.' },
      { name: 'Pecivo za doner 150g', description: 'Pecivo za doner, mekano i sočno.' },
      { name: 'Sendvič kifla 200g', description: 'Kifla za sendviče, mekana i ukusna.' },
      { name: 'Pletenica 150g', description: 'Pletenica od svježeg tijesta, savršena za užinu.' },
      { name: 'Makovnjača 150g', description: 'Pecivo sa makom, lagano i sočno.' },
    ],
    kroasani: [
      { name: 'Kroasan eurokrem 100g', description: 'Kroasan punjen eurokremom, savršen za ljubitelje čokolade.' },
      { name: 'Kroasan višnja 100g', description: 'Kroasan punjen džemom od višnje, slatko i sočno.' },
      { name: 'Kroasan jabuka 100g', description: 'Kroasan punjen džemom od jabuke, bogatog okusa.' },
      { name: 'Kroasan vanilija 100g', description: 'Kroasan s punjenjem od vanilije, slatki užitak.' },
      { name: 'Kroasan šumsko voće 100g', description: 'Kroasan s punjenjem od šumskog voća, osvježavajući i ukusan.' },
      { name: 'Kroasan pica 100g', description: 'Kroasan sa pizzom, ukusan spoj kroasana i pizze.' },
      { name: 'Kroasan viršla 100g', description: 'Kroasan punjen viršlama, ukusan za užinu.' },
      { name: 'Sitni kroasan kg', description: 'Mali kroasani, idealni za posluživanje na zabavama.' },
    ],
    kolaci: [
      { name: 'Lenja pita', description: 'Slatka lenja pita, bogata sa jabukama i cimetom.' },
      { name: 'Baklava', description: 'Tradicionalna baklava, bogata orašastim plodovima i medom.' },
      { name: 'Hurmašice', description: 'Slatke hurmašice, pečene u sirupu od meda.' },
      { name: 'Tulumbe', description: 'Sočne tulumbe, prelijevane sa sirupom.' },
      { name: 'Softi sladoled jagoda, vanila, čokolada', description: 'Sladoled u tri različite vrste, idealan za ljeto.' },
    ],
  };

  const toggleDropdown = (productName) => {
    if (activeProduct === productName) {
      setActiveProduct(null);
    } else {
      setActiveProduct(productName);
    }
  };

  return (
    <div>
      <h1>Proizvodi</h1>
      <div>
        <h2>Pite i pice</h2>
        <ul>
          {proizvodi.pita.map((pita) => (
            <li key={pita.name}>
              <a href="#" onClick={() => toggleDropdown(pita.name)}>{pita.name}</a>
              {activeProduct === pita.name && (
                <div>
                  <p>{pita.description}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Hljeb i peciva</h2>
        <ul>
          {proizvodi.pecivo.map((pecivo) => (
            <li key={pecivo.name}>
              <a href="#" onClick={() => toggleDropdown(pecivo.name)}>{pecivo.name}</a>
              {activeProduct === pecivo.name && (
                <div>
                  <p>{pecivo.description}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Kroasani</h2>
        <ul>
          {proizvodi.kroasani.map((kroasani) => (
            <li key={kroasani.name}>
              <a href="#" onClick={() => toggleDropdown(kroasani.name)}>{kroasani.name}</a>
              {activeProduct === kroasani.name && (
                <div>
                  <p>{kroasani.description}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Kolači i sladoled</h2>
        <ul>
          {proizvodi.kolaci.map((kolaci) => (
            <li key={kolaci.name}>
              <a href="#" onClick={() => toggleDropdown(kolaci.name)}>{kolaci.name}</a>
              {activeProduct === kolaci.name && (
                <div>
                  <p>{kolaci.description}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Proizvodi;
