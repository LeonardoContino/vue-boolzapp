// console.log("js ok");

const DateTime = luxon.DateTime;

const app = Vue.createApp({

    data() {
        return {
          currentIndex: 0,
          myMessage: '',
          utentMessage: 'si',
          searchWord: '',
            user: {
                name: 'Leonardo Contino',
                avatar: '_io'
              },
              contacts: [
                {
                  name: 'Michele',
                  avatar: '_1',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Fabio',
                  avatar: '_2',
                  visible: true,
                  messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                  },
                  {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                  },
                  {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Samuele',
                  avatar: '_3',
                  visible: true,
                  messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                  },
                  {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                  },
                  {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Luisa',
                  avatar: '_4',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                  }
                  ],
                },
              ]
    
        };
        

},
computed:{
  currentContact(){
    return this.contacts[this.currentIndex];
  },
  currentChat(){
    return this.currentContact.messages;
  },
  // filteredChat(){
  //   return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.searchWord));
    
  // }
},
 methods:{
  
  setCurrentIndex(index){
    this.currentIndex = index;
  },
  addNewMessage(){
    if(this.myMessage){
      const newMessage = {
        text: this.myMessage,
        status: 'sent',
        date: this.getCurrentMoment(),
        
      }
      
      this.currentContact.messages.push(newMessage);
      
      this.myMessage = '';

      setTimeout(()=>{
        this.setAnswer()
      },1000)
      
      
    }
    
  },
  
 setAnswer(){
  
  const utentMess = {
    text: this.utentMessage,
    status: 'received',
  }
  this.currentContact.messages.push(utentMess);
 },
 filteredChat(){
  this.contacts.forEach( contact => {
    contact.visible = contact.name.toLowerCase().includes(this.searchWord.toLowerCase())
  })
 },
 getCurrentMoment(){
  return DateTime.now().setLocale('it').toLocaleString(DateTime.TIME_SIMPLE);
 }
 
 
 

},
})
app.mount('#root')
