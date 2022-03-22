import React from "react"

class Exemplosegundos extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          <h3>Um Componente com Estado (stateful component)</h3>
          <p>Além de receber dados de entrada (acessados via this.props), um componente pode manter dados do state interno (acessados via this.state).</p>
          <p>Quando os dados do state de um componente são alterados, o código renderizado será atualizado invocando o método render() novamente.</p>
          <p>Agora você verá o código da aplicação que foi feito</p><br></br>
          <pre>
            Código
          </pre>{/* para código do tutorial */}<br/>
          Segundos: {this.state.seconds}
        </div>
      );
    }
  }

  export default Exemplosegundos;