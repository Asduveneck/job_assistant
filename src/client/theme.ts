import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  spacing: 2,
});

export default theme;
