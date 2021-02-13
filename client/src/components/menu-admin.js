import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BuildIcon from '@material-ui/icons/Build';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon style={{color: '#068D54'}}/>
      </ListItemIcon>
      <ListItemText primary="Pacientes" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BuildIcon style={{color: '#068D54'}}/>
      </ListItemIcon>
      <ListItemText primary="Alterar Senha" />
    </ListItem>
  </div>
);