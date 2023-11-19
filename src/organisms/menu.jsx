import React from 'react';

import { Box, List, ListItem, ListItemIcon, Autocomplete, ListItemText, Avatar, TextField } from '@mui/material';
import {
  SignalCellularAltOutlined,
  PeopleOutlineOutlined,
  ShoppingBagOutlined,
  PersonOutlined,
  SettingsOutlined,
  LockOutlined,
  PersonAddAlt1Outlined,
  CancelOutlined,
} from '@mui/icons-material';

import logo from '../assets/img/logo.png';

const BG_ICON = { color: '#EEF3FD' };

const tier = [
  { label: 'Basic'},
  { label: 'Medium'},
  { label: 'Premium'},
]

function Menu() {
  return (
    <Box className= 'Menu-Box'>
      <Avatar className= 'avatar' src={logo} sx={{ marginTop: 2, marginBottom: 2 }} />
      <Box className= 'type'>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={tier}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Acmen Inc" />}
        /> 
      </Box>
      <hr />
      <List>
        <ListItem>
          <ListItemIcon>
            <SignalCellularAltOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PeopleOutlineOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText primary="Customers" sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ShoppingBagOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText primary="Products" sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PersonOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText primary="Account" sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SettingsOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText primary="Settings" sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LockOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText primary="Login" sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PersonAddAlt1Outlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText primary="Register" sx={BG_ICON} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CancelOutlined sx={BG_ICON} />
          </ListItemIcon>
          <ListItemText primary="Error" sx={BG_ICON} />
        </ListItem>
      </List>
    </Box>
  );
}
export default Menu