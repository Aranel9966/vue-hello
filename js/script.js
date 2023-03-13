/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, 
utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, 
presa anch’essa da un data.
*/

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Ciao a tutti!',
        image: 'https://wallpapercave.com/wp/wp3588300.jpg',
      }
    }
  }).mount('#app')

