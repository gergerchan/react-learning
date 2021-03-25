import React from 'react'

// cara 1
const About = (props) => {
// cara 2 langsung di destructuring di propsnya langsung
// const About = ({nama,job}) => {
    return (
        <div>
            <h1>Nama : {props.nama}</h1>
            <h2>Nama : {props.job}</h2>
            <hr />
        </div>
    )
}

export default About
