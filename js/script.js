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
        image: 'https://cdn.wallpapersafari.com/82/50/QRfT4t.jpg',
        classColor:'center',
        classWidth:'width-img'
      }
    },
    methods: {
        switchimg(){
            if(this.image=='https://cdn.wallpapersafari.com/82/50/QRfT4t.jpg' ){

                this.image= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ8QhF4-H29qbK3zLHZ5L2SXAMIOp8DezSBBP9KifMURKWVDmtAOIJT97NVLyZxtUrWmw&usqp=CAU'
            }else{
                this.image= 'https://cdn.wallpapersafari.com/82/50/QRfT4t.jpg'
            }
        }

    },
  }).mount('#app')

