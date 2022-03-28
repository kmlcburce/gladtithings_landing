import { Grid } from '@mui/material'
import React, { Component } from 'react'
import bgLeft from '../../assets/bgLeft.png'
export class About extends Component {

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
            <div style={{
                fontSize: '50px',
                fontStyle: 'Poppins',
                color: '#0FDB84',
                display: 'inline-block'
            }}>
                <h3>About</h3>
                
            </div>
            <img style={{
                    width: '10%',
                    marginLeft: '3%',
                    paddingBottom: '3%'
                }} src={require('../../assets/bird-green.png')}></img>
            <div style={{
                fontSize: '18px',
                fontStyle: 'italic'
            }}>
                <p>
                    No ads, no data capture, no selling your information: Glad Tithings is simply a tool to bridge the gap between the digital world and the Catholic one, in a way that avoids the invasive nature of most online communication platforms, payment systems, and social media websites. 
                </p>
                <p>
                    Glad Tithings began as a means for Catholics in developing countries to connect with, and receive support from, members of their faith around the world. It has since grown into something that can do so much more; From parish administration, to event planning, to browsing posts and news from your friends and Church figures, Glad Tithings is an all encompassing platform. 
                </p>
                <p>
                    Our mission, as a team of young entrepreneurs, is to foster the balance between our humanity, our faith, and the fact of our existence in the digital age. We hope to build a network that supports Catholics around the world, and promotes Catholic art, stories, teaching, and community.
                </p>
            </div>
			</div>
		)
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

export default About