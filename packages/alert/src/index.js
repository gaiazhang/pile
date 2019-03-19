import Alert from './components/alert';
import alertBox from './components/alertWarp';

const { open, close } = alertBox;
Alert.open = open;
Alert.close = close;
export default Alert;
