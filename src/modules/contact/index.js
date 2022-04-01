import { Grid, Box, Button } from '@mui/material'
import React, { Component } from 'react'
import { Form } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import bgLeft from 'assets/bgLeft.png'
export class Contact extends Component {

  renderLeft(){
		return (
			<div>
				<img style={{
                    width: '90%',
                    paddingTop: '40%',
                    paddingLeft: '30%'
                }} src={require('../../assets/LogoNoDove.png')}></img>
				
			</div>
		)
	} 
	renderRight(){
		return(
			<div>
        <p>Want to know more about Glad Titihings? Send us a message and we’ll be happy to receive it.</p>
        <Box style={{
          border: '1px solid lightgrey',
        }} sx={{height: '500px'}}>
          <Grid
            item
            xs={10}
            style={{ display: "flex",  maxWidth: '100%'}}
          >
            <Container maxWidth="lg" style={{
              margin: '20px'
            }}>
            <p className='bold'>Name</p>
            <input className='inputField' type='text' placeholder='What is your name?'></input>
            <p className='bold'>Address</p>
            <input className='inputField' type='text' placeholder='Where do you live?'></input>
            <p className='bold'>Email Address</p>
            <input className='inputField' type='text' placeholder='What is your email address?'></input>
            <p className='bold'>Phone Number</p>
            <input className='inputField' type='text' placeholder='What is your phone number? (optional)?'></input>
          </Container>
          <Container maxWidth={false} style={{
              margin: '20px'
            }}>
            <p className='bold'>Subject/Title</p>
            <input className='inputField' type='text' placeholder='Tell us what the message is about'></input>
            <p className='bold'>Message</p>
            <textarea style={{
              border: '1px solid lightgray'
            }} rows="15" cols="50" className='messageField' placeholder='Message'></textarea>
          </Container>
          </Grid>
          <Grid item sx={8} style={{display: "flex", justifyContent: 'center', marginTop: '20px'}}>
            <Button style={{
              background: '#56C596',
              borderRadius: '20px 20px 20px 20px',
              padding: '10px',
              color: 'white'
            }}>Submit</Button>
          </Grid>
          

        </Box>
        
			</div>
		)
	}
  left(){
    <div>
            <p>Name</p>
            <input  type='text' placeholder='What is your name?'></input>
            <p>Address</p>
            <input  type='text' placeholder='What is your name?'></input>
            <p>Email Address</p>
            <input  type='text' placeholder='What is your name?'></input>
            <p>Phone Number</p>
            <input  type='text' placeholder='What is your name?'></input>
    </div>
  }
  render() {
    return (
      <div>
          <Grid container>
            <Grid item xs={5} color={'red'} style={{
								backgroundImage: `url(${bgLeft})`,
								backgroundSize: 'cover',
								height:'100vh',
                                backgroundRepeat: 'no-repeat',
							}}>
                {this.renderLeft()}
            </Grid>
            <Grid item xs={7} textAlign={'left'} padding={'5%'}>
                {this.renderRight()}
            </Grid>
          </Grid>
      </div>
    )
  }
}

export default Contact