import React from 'react';
import logo from '../Assets/Logo.svg'
import first from '../Assets/blue.svg'
import hero from '../Assets/hero.png'
import third from '../Assets/purple.svg'
import second from '../Assets/pink.svg'
import avatar from '../Assets/avatar.svg'
import check from '../Assets/check.svg'


import { Link } from 'react-router-dom'
import styled from 'styled-components';

// styling

const linkStyle = {
    color: '#000000',
    fontSize: '1rem',
    textDecoration: 'none',
    padding: '20px'
};

const DIV = styled.h5`
    font-weight:bold;
`


const Button1 = styled.a`
    text-decoration:none;
    color:white;
    padding:3px;
    margin-left:10px;
    border-radius:20px 20px 20px 20px;
    background: linear-gradient(#eba358, #ea676d);
    border:1px solid transparent;
`
const Button2 = styled.button`
    color:white;
    padding:4%;
    margin-left:2%;
    border-radius:2%;
    width:40%;

`
// const Div = styled.div`
//         display: grid;
//         grid-template-columns: 50% 50%;
// `

const H1 = styled.h1`
    font-size:4.8rem;
    font-family: 'Times New Roman', Times, serif;
    font-weight:bold;

`
const P = styled.p`
    font-size:2.1rem;
    font-family: 'Times New Roman', Times, serif;

`
const Two = styled.div`
    margin-top:8%;

`


const End = styled.div`
    
    
    display:flex;
    font-family: 'Times New Roman', Times, serif;


`
const Landing = () => {
    return (
        <div className='container-fluid'>
            <nav class="navbar navbar-dark navbar-expand-md ">
                <div class="container-fluid">
                    <div class='logo d-flex'>
                    <img src={logo} alt='logo' ></img>
                        <Button1><li class="nav-item"><a class="nav-link btn1 text-light" href='join'>Hosterr is Hiring!</a></li></Button1>
                        </div>
                    {/* collapse */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon bg-dark"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="nav navbar-nav text-dark mx-auto">
                    <li class="nav-item"><a class="nav-link" href="plans">Plans</a></li>
                    <li class="nav-item"><a class="nav-link" href="find">Find Domain</a></li>
                    <li class="nav-item"><a class="nav-link" href="why">Why Hosterr</a></li>
                </ul>
                <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item"><a class="nav-link mt-2" href="plans">Sign in</a></li>
                            <li class="nav-item"><a class="nav-link btn btn2 btn-primary p-3 text-light" href='join'>Join Waitlist</a></li>
                </ul>
            </div>
                </div>
            </nav>
            
            <Two className='two'>
            <div className='row'>
                <div class="col-md-6">
                    <H1> Host your website in less than 5 minutes.</H1>
                    <P> With Hosterr,get your website up and running in no less than 5 minutes with the most competitive pricing packages online.</P>
                    <div class=' form d-flex justify-content-between'>
                    <input class="form-control" type="search" placeholder="Enter e-mail address" aria-label="Search"/>
                        <Button2 className='btn-primary btn3' type="button">Join Waitlist</Button2>
                        </div>
                        <div class=" form-check">
                            <img src={check} className='p-3'  alt=''></img>
                        <label class="form-check-label" for="exampleCheck1">No spam,ever.Unsubscribe anytime</label>
                        </div>
                        <div class='all d-flex justify-content-between'>
                        <div className='footer'>
                    <Link to="/"style={linkStyle}>Facebook</Link>
                    <Link to="/" style={linkStyle}>Instagram</Link>
                            <Link to="/" style={linkStyle}>Twitter</Link>
                        </div>
                        <End className='avatar'>
                            <div className='avatar1'>
                            <img src={avatar} alt='' ></img>
                            </div> 
                            <div class='ms-3 para'>
                            <h4>Have any questions?</h4>
                            <DIV>Talk to a specialist</DIV>
                            </div> 
                        </End>
                        </div>
                </div>
                
                    <div class="col-md-6 second">
                    <div class="parent">
                            <img src={first} alt='' className='image4' width={500}></img>
                            <img src={second} alt='' className='image2' width={500}></img>
                            <img src={third} alt='' className='image3' width={500}></img>
                            <img src={hero} alt='hero' className='image1' width={500}></img>
                        </div>
                        
                </div>
                </div>
                </Two>
        </div>
    );
}

export default Landing;
