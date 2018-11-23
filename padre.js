Vue.component('padre',{
  template:`
  <div>
    <h1>{{numPadre}}</h1>
    <button @click="numPadre++">+</button>
    <div>data desde el hijo: {{nombrePadre}}</div>
    <hijo :tituloBindef="numPadre" @nombreHijo="nombrePadre = $event" ></hijo>
  </div>
  `,
  data(){
    return{
      numPadre:0,
      nombrePadre:'',
    }
  }
})

// este metodo de comunicacion del hijo al padre es un poco confusar
//  al usar varias capas de hijos para llegar al padre
//  por eso se utilizará vuex a partir de ahora para cubrir esta necesidad