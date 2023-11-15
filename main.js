const { createApp } = Vue;

const opzioni = {
    data: function () {
        return {
          messagio: "Ciao Giuseppe",
          scelta : "Segli il colore del tuo nome tra Rosso, Verde, Blue e scrivilo giu",
          insert : "inserisci il tuo nome",
          immagine: "https://picsum.photos/200/300",
          nero: "nero",
          nome: "nome qui"
        }
    },
    
};

createApp(opzioni).mount('#app')