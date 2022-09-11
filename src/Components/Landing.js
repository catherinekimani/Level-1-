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
const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 5vh;
    margin-top:2%;
`
const linkStyle = {
    color: '#000000',
    fontSize: '1rem',
    textDecoration: 'none',
    padding: '20px'
};

const Button = styled.button`
    color:white;
    padding:15px;
    border-radius:2%;


`
const Button1 = styled.button`
    color:white;
    border-radius:25px;
    background: linear-gradient(#f77d0b, #f70b4f);
    border:1px solid #f70b4f;
`
const Button2 = styled.button`
    color:white;
    padding:4%;
    border-radius:2%;
    width:40%;

`
const Div = styled.div`
        display: grid;
        grid-template-columns: 50% 50%;
`

const H1 = styled.h1`
    font-size:4.5rem;
    font-family: 'Times New Roman', Times, serif;
    font-weight:bold;

`
const P = styled.p`
    font-size:1.75rem;
    font-family: 'Times New Roman', Times, serif;

`
const Two = styled.div`
    margin-top:8%;

`

const Footer = styled.div`
    margin-top:35%;

`
const End = styled.div`
    margin-top:42rem;
    margin-left:50%;
    font-family: 'Times New Roman', Times, serif;


`
const Landing = () => {
    return (
        <div className='container'>
            <Nav className='nav'>
                <div className='logo'>
                    <img src={logo} alt='logo' ></img>
                    <Link to="/"style={linkStyle} > <Button1 type="button">Hosterr is Hiring!</Button1></Link>
                </div>
                <div className='links'>
                    <Link to="/plans"style={linkStyle}>Plans</Link>
                    <Link to="/Find" style={linkStyle}>Find Domain</Link>
                    <Link to="/why" style={linkStyle}>Why Hosterr</Link>
                </div>
                <div className='links'>
                    <Link to="/sign" style={linkStyle}>Sign in</Link>
                    <Link to="/Find"style={linkStyle} > <Button type="button" className='btn-primary'> Join Waitlist </Button></Link>
                </div>
            </Nav>
            <Two className='two'>
            <Div className='row'>
                <div class="column">
                    <H1> Host your website in less than 5 minutes.</H1>
                    <P> With Hosterr,get your website up and running in no less than 5 minutes with the most competitive pricing packages online.</P>
                    <form class="d-flex w-75">
                    <input class="form-control me-2" type="search" placeholder="Enter e-mail address" aria-label="Search"/>
                        <Button2 className='btn-primary' type="button">Join Waitlist</Button2>
                    </form>
                        <div class="mb-5 form-check">
                            <img src={check} className='p-3'  alt=''></img>
                        <label class="form-check-label" for="exampleCheck1">No spam,ever.Unsubscribe anytime</label>
                        </div>
                        <Footer className='footer'>
                    <Link to="/"style={linkStyle}>Facebook</Link>
                    <Link to="/" style={linkStyle}>Instagram</Link>
                            <Link to="/" style={linkStyle}>Twitter</Link>
                            </Footer>
                </div>
                
                    <div class="column">
                    <div class="parent">
                            <img src={first} alt='' className='image4' width={500}></img>
                            <img src={second} alt='' className='image2' width={500}></img>
                            <img src={third} alt='' className='image3' width={500}></img>
                            <img src={hero} alt='hero' className='image1' width={500}></img>
                        </div>
                        <End className=''>
                            <div className='avatar'>
                            <img src={avatar} alt='' ></img>
                            </div>
                            <div className='text d-flex '>
                            <p>Have any questions?</p>
                            <p>Talk to a specialist</p>
                            </div>
                            </End>
                        
                </div>
                </Div>
                </Two>
        </div>
    );
}

export default Landing;
