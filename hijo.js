Vue.component('hijo',{
   // el boton cambia el dato tituloBindef traido desde el padre, pero solo en de manera local dentro del componenet hijo y no afecta a la variable originla padre
      // esto es un problema y lanza un error
      //para eso tambien se usa vuex para solucionarlo
  template:`<div>
    <div>
      <h3>{{tituloHijo}}</h3>
      <h4>binded: {{tituloBindef}}</h4>
      <button class="boton-que-cambia-data-traida-desde-el-el-padre-que-genera-error" @click="tituloBindef++">+</button>
    </div>
  <br>
  <br>
  <div>
    <h2>datos del hijo al padre</h2>
    <h4>{{nombre}}</h4>
  </div>
  <div>`,
  data(){
    return {
      tituloHijo:'titulo desde el hijo',
      nombre:'nombre del hijo para el padre'
    }
  },
  props: ['tituloBindef'],
  // evento mouented --> se ejecuta una vez que el dom ya estab list, y los datos ya estan pintados
  mounted(){
    // emitir un evento , pasar un nombre, y referirse al dato de data
    this.$emit('nombreHijo',this.nombre);
  }
})


// este metodo de comunicacion del hijo al padre es un poco confusar
//  al usar varias capas de hijos para llegar al padre
//  por eso se utilizará vuex a partir de ahora para cubrir esta necesidad