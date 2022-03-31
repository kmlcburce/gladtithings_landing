import * as React from 'react';
import { Route } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { Menu as MenuIcon } from '@mui/icons-material';
import DonateModal from 'modules/donateModal';
import { IconButton, Menu, MenuItem } from '@mui/material';

class Header extends React.Component{
	constructor(props){
		super(props);
		this.modalRef = React.createRef()
		this.menuRef = React.createRef()
		this.state={
			anchorEl: null,
			open: false
		}
	}
  handleClick = () => {
    this.modalRef.current.handleOpen()
  }
	handleMenu = () => {
		this.setState({anchorEl: this.menuRef.current, open: true})
	}
	componentDidMount(){
		this.setState({anchorEl: this.menuRef.current})
	}
	displayMenuBar = () => {
		const {open, anchorEl} = this.state
		return (
			<div>
				<IconButton 
					ref={this.menuRef}
					id="basic-button"
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onClick={() => this.handleMenu()}
				>
					<MenuIcon className='text-primary'/>
				</IconButton>
				<Menu 
					style={{left: '70%'}}
					id="basic-menu"
					open={open}
					anchorel={anchorEl}
					onClose={() => {
						this.setState({anchorEl: null, open: false})
					}}
				>
					<MenuItem>About</MenuItem>
					<MenuItem>Contact</MenuItem>
					<MenuItem>Donate</MenuItem>
				</Menu>
			</div>
		)
	}
	render(){
		return (
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static" className='header' elevation={0}>
					<Toolbar>
						<img src={require('assets/logo.png')} className="navImg"></img>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						</Typography>
						<section className='menuRight-web'>
							<Button className='nav' onClick={()=>{
							// this.props.history.push('/about')
							console.log('props', this.props)
						}}>About</Button>
							<Button className='nav' onClick={()=>{this.props.history.push('/contact')}}>Contact</Button>
							<Button className='roundedBtn' color='inherit' onClick={() => this.handleClick()}>Donate</Button>
						</section>
						<section className='menuRight-mobile'>
							{this.displayMenuBar()}
						</section>
					</Toolbar>
				</AppBar>
				<DonateModal ref={this.modalRef}/>
			</Box>
		);
	}
}

export default Header