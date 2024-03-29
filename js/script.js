/*
 - Descrizione:
   Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
 - Bonus:
   1)al click su una thumb, visualizzare in grande l'immagine corrispondente
   2)applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
   3)quando il cursore va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*/

const { createApp } = Vue

createApp({
    data() {
        return {
            
            slides : [
                    {
                        image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, 
                    {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, 
                    {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, 
                    {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, 
                    {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
                ],

            activeSlide: 0,    
            currentInterval: 0,
            // Aggiunto stato per l'autoplay
            autoplay: true, 
        }
    },
    methods: {
        prev(){
            // console.log('ho cliccato prev');
            this.activeSlide--;
            //ripetere sempre il ciclo in senso antiorario
            if(this.activeSlide < 0){
            this.activeSlide = this.slides.length - 1;
            }
        },
        next(){
            // console.log('ho cliccato next');
            this.activeSlide++;
            //ripetere sempre il ciclo in senso orario
            if(this.activeSlide > this.slides.length - 1) {
                this.activeSlide = 0;
            }
        },
        // funzione per applucare l'"activeSlide" all'immagine cliccata
        clickThumbnailImage(index) {
            // console.log('clicca img');
            // console.log(index);
            this.activeSlide = index;

        },
        stopAutoPlay() {
            // console.log('stop lo slider');
            clearInterval(this.currentInterval);

        },
        startAutoPlay() {
            this.currentInterval = setInterval(() => {
                if (this.autoplay) {
                    this.next();
                }
            }, 3000);
        },
        // funzione per gestire il play/pausa delle immagini
        toggleAutoPlay() {
            this.autoplay = !this.autoplay;
            if (this.autoplay) {
                this.startAutoPlay();
            } else {
                this.stopAutoPlay();
            }
        },

    },

    // questo autoplay parte al momento del click su play e cambia in automatico le immagini ogni 3 secondi
    mounted() {
        // console.log('mounted');
        this.startAutoPlay();
    }
}).mount('#app');
