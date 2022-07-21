import './App.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { createTheme, colors, ThemeProvider } from '@mui/material';
// import MuiDialog from './components/MuiDialog';
// import MuiLoadingButton from './components/MuiLoadingButton';
// import MuiProgress from './components/MuiProgress';
// import MuiSkeleton from './components/MuiSkeleton';
// import MuiTabs from './components/MuiTabs';
// import MuiAlert from './components/MuiAlert';
// import MuiSnackbar from './components/MuiSnackbar';
// import MuiTable from './components/MuiTable';
// import MuiAvatar from './components/MuiAvatar';
// import MuiBadge from './components/MuiBadge';
// import MuiBottomNav from './components/MuiBottomNav';
// import Muichips from './components/Muichips';
// import MuiDrawer from './components/MuiDrawer';
// import MuiList from './components/MuiList';
// import MuiSpeedDial from './components/MuiSpeedDial';
// import MuiToolTip from './components/MuiToolTip';
// import MuiBreadCrumb from './components/MuiBreadCrumb';
// import MuiAccordian from './components/MuiAccordian';
// import MuiImageList from './components/MuiImageList';
// import MuiLink from './components/MuiLink';
// import MuiCard from './components/MuiCard';
// import MuiCheck from './components/MuiCheck';
// import MuiBtn from './components/MuiBtn'
// import Typo from './components/Typo';
// import MuiTextBox from './components/MuiTextBox';
// import MuiSelect from './components/MuiSelect';
// import MuiRadio from './components/MuiRadio';
// import MuiSwitch from './components/MuiSwitch';
// import MuiRating from './components/MuiRating';
// import MuiAutoComplete from './components/MuiAutoComplete';
// import MuiLayout from './components/MuiLayout';
import NavBar from './components/NavBar';
import MuiResponsiveness from './components/MuiResponsiveness';
// import MuiMasonry from './components/MuiMasonry';
// import MuiPicker from './components/MuiPicker';
// import MuiTimeLine from './components/MuiTimeLine';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette:{
    primary:{
      main: colors.green[500],
    },
    neutrals:{
      main: colors.grey[500],
      darker: colors.grey[700],
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='App'>
        <MuiResponsiveness/>
        {/* <NavBar/> */}
        {/* <MuiMasonry/> */}
        {/* <MuiTimeLine/> */}
        {/* <MuiTabs/> */}
        {/* <MuiPicker /> */}
        {/* <MuiLoadingButton/> */}
        {/* <MuiSkeleton/> */}
        {/* <MuiProgress/> */}
        {/* <MuiDialog/> */}
        {/* <MuiSnackbar/> */}
        {/* <MuiAlert/> */}
        {/* <MuiTable/> */}
        {/* <MuiToolTip/> */}
        {/* <Muichips/> */}
        {/* <MuiBadge/> */}
        {/* <MuiList/> */}
        {/* <MuiDrawer/>
        <MuiAvatar/>
        <MuiBottomNav/> */}
        {/* <MuiSpeedDial/> */}
        {/* <MuiBreadCrumb/> */}
        {/* <MuiLink/> */}
        {/* <MuiAccordian/> */}
        {/* <MuiImageList/> */}
        {/* <MuiCard/> */}
        {/* <MuiLayout/> */}
        {/* <MuiAutoComplete/> */}
        {/* <MuiRating/> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRadio /> */}
        {/* <MuiCheck/> */}
        {/* <MuiSelect /> */}
        {/* <Typo/> */}
        {/* <MuiBtn/> */}
        {/* <MuiTextBox /> */}
      </div>
    </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
