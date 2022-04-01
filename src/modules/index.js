import { Grid } from '@mui/material'
import React, { Component } from 'react'
import bgRight from 'assets/bgRight.png'

class Content extends Component {

  renderLeft(){
		return (
			<div style={{
				height: '100vh',
				display: 'contents',
				justifyContent: 'space-between'
			}}>
				<div style={{
					width: '100%',
					float: 'left'
				}}>
				<img src={require('assets/LogoLeft.png')}   style={{
						width: '100%',
						height: 'auto'
					}}></img>
				</div>
				<div style={{
					width: '100%',
					float: 'left'
				}}>
					<img src={require('assets/saints.png')}  style={{
						width: '100%',
						height: 'auto'
					}}></img>
				</div>
			</div>
		)
	} 
	renderRight(){
		return(
			<div>
				<img src={require('assets/clouds.png')} className="image clouds"></img>
			</div>
		)
	}
  render() {
    return (
      <div>
        <section className='contentContainer'>
			<img src={require('assets/landing.png')} style={{
				width: '100%',
				height: '100vh'
			}}></img>		
		</section>
      </div>
    )
  }
}

export default Content