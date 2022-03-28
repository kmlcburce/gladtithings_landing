import { Grid } from '@mui/material'
import React, { Component } from 'react'
import bgRight from '../assets/bgRight.png'
export class Content extends Component {

  renderLeft(){
		return (
			<div>
				<img src={require('../assets/LogoLeft.png')}></img>
				<img 
				style={{
					width: '90%',
					height: 'auto',
				}}
				src={require('../assets/saints.png')}></img>
			</div>
		)
	} 
	renderRight(){
		return(
			<div>
				<img src={require('../assets/clouds.png')}></img>
			</div>
		)
	}
  render() {
    return (
      <div>
          <Grid container alignItems={'center'} justifyContent="center">
            <Grid item xs={5} color={'red'}>
                {this.renderLeft()}
            </Grid>
            <Grid item xs={7} color={'blue'} 
							style={{
								backgroundImage: `url(${bgRight})`,
								backgroundSize: 'cover',
								height:'100vh',
								backgroundRepeat: 'no-repeat',
							}}
						>
                {this.renderRight()}
            </Grid>
          </Grid>
      </div>
    )
  }
}

export default Content