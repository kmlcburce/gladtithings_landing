import { Grid } from '@mui/material'
import React, { Component } from 'react'
import bgRight from '../assets/bgRight.png'
import '../common/Style.css'
class Content extends Component {

  renderLeft(){
		return (
			<div>
				<img src={require('../assets/LogoLeft.png')} className="image"></img>
				<div style={{marginTop: '22%'}}>
					<img src={require('../assets/saints.png')} className="image"></img>
				</div>
			</div>
		)
	} 
	renderRight(){
		return(
			<div>
				<img src={require('../assets/clouds.png')} className="image"></img>
			</div>
		)
	}
  render() {
    return (
      <div>
          <section className='contentContainer' style={{justifyContent: 'space-between'}}>
							<div className='leftContent'>
								{this.renderLeft()}
							</div>
							<div className='rightContent'
								style={{
									backgroundImage: `url(${bgRight})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
								}}
							>
								{this.renderRight()}
							</div>
					</section>
      </div>
    )
  }
}

export default Content