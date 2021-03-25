import React, { Component } from 'react'
import About from "./About"
import { Button } from 'reactstrap';

export class Home extends Component {
    constructor(){
     super();
     this.state = {
         title:"ini componen dari state",
         paragraph:"wow keren banget state ini"
     }
    }

    changeTitle = () => {
        console.log("kamu klik tombol")
        this.setState({ 
            title:"title baru cuy",
            paragraph:"berubah juga nich"
        })
    }

    render() {
        const {title, paragraph} = this.state
        return (
            <div>
                <h2>{title}</h2>
                <p>{paragraph}</p>
                <Button color="success">success</Button>{' '}
                <About nama="gery" job="cobacoba" />
                <About nama="richard" job="testes" />
                <About nama="ricky" job="tescoba" />
                
                <Button color="warning" onClick={this.changeTitle}>
                    Henshin!
                </Button>{' '}
            </div>
        )
    }
}

export default Home
