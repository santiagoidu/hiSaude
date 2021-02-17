import React from 'react';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import '../assets/css/footer.css'

export default function Copyright() {
    return (
      <Typography color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/santiagoidu">
          CRUD for Hi! Healtcare Intelligence
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }