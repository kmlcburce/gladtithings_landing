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
import Helper from 'common/Helper';
import { withRouter } from 'react-router-dom';

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
					{
						Helper.headerMenu.map((item) => (
							<MenuItem>{item.title}</MenuItem>
						))
					}
				</Menu>
			</div>
		)
	}
	render(){
		return (
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="fixed" className='header' elevation={0}>
					<Toolbar>
						<img
							src={require('assets/logo.png')}
							className="navImg cursor-hover"
							onClick={() => {
								this.props.history.push('/')
							}}
							/>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						</Typography>
						<section className='menuRight-web'>
							{
								Helper.headerMenu.map((item) => (
									<Button
										className='nav'
										onClick={() => {
											if(item.type == 'internal'){
												if(item.route == '/donate'){
													this.handleClick()
												}else{
													this.props.history.push(item.route)
												}
											}else{
												window.location.href = Helper.app_route + item.route
											}
										}}
										style={{
											fontWeight: 'bold',
											textTransform: 'capitalize',
											...item.style
										}}
									>{item.title}</Button>
								))
							}
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

export default withRouter(Header)