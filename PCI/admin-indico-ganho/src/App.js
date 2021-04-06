import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import db from '../services/FirebaseConfig';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state ={
            nome: '',
            email: '',
            senha: '',
            unser: null,
        };

        //this.cadastrar = this.cadastrar.bind(this);
        this.cadastrar = this.cadastrar.bind(this);
        this.logar = this.logar.bind(this);
        this.auth = this.auth.bind(this);
        this.sair = this.sair.bind(this);
    }

    componentDidMount() {
        this.auth()
    }

    auth() {
        db.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ user: user })
            }
        })
    }

    cadastrar() {
        const { email, senha } = this.state

        db.auth().createUserWithEmailAndPassword(email, senha)
        .catch((error) => {
                alert(`Código de erro: ${error.code}`);
        });

    }

    logar() {
        const { email, senha } = this.state

        db.auth().signInWithEmailAndPassword(email, senha)
        .catch((error) => {
                alert(`Usuário não é cadastrado!`);
        });
    }

    sair() {
        db.auth().signOut()
        .then(() => {
            this.setState({ user: null })
            alert('Deslogado com sucesso!')
            this.setState({ email: '', senha:''})
        })
    }

    render() {
        return(
            <div className="container">
                {this.state.user ?
                <div>
                    <p>Painel Admin</p>
                    <p>Seja bem-vindo :)</p>
                    <p>{this.state.user.email}</p>

                    <button onClick={this.sair} className="btn btn-outline-danger">Sair</button>
                </div>
                :
                <div>
                <h1>Seja Bem-vindo!</h1>
                
                    <label>Email: </label><br/>
                    <input type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                    <br/>

                    <label>Senha: </label><br/>
                    <input type="text" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} />
                    <br/>
                    <button className="btn btn-success mt-2" onClick={this.cadastrar}>Cadastrar</button>
                    <button className="btn btn-success mt-2 ml-2" onClick={this.logar}>Logar</button>
                </div>
            }
                
            </div>
        );
    }
}