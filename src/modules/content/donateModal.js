import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AccessAlarm, ThreeDRotation, Cancel } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
	width: '50%',
  bgcolor: 'background.paper',
	textAlign: 'center',
	borderRadius: '2%',
  p: 4,
};

const downloadStyle = {
	display: 'flex',
	marginLeft: 'auto',
	marginRight: 'auto'
}

class DonateModal extends React.Component{
	constructor(props){
		super(props);
		this.state={
			open: false
		}
	}

  handleOpen = () => this.setState({open: true});
  handleClose = () => this.setState({open: false});

	renderDownloadApp(){
		return (
			<div style={downloadStyle}>
				<img src={require('../assets/playstoreblack.png')}></img>
				<img src={require('../assets/appstoreblack.png')}></img>
				<img src={require('../assets/appgallery.png')}></img>
			</div>
		)
	}
  
	render(){
		return (
			<div>
				<Modal
					open={this.state.open}
					onClose={() => this.handleClose()}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<div style={{float: 'right'}} onClick={() => this.handleClose()}>
							<Cancel/>
						</div>
						<h3>Download the App to Donate!</h3>
						<i><p>Donate to churches by using Gladtithings mobile application</p></i><br/>
						<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu</p>
						</div>
						<div>
							{this.renderDownloadApp()}
						</div>
					</Box>
				</Modal>
			</div>
		);
	}
}

export default DonateModal;