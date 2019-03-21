import Alert from './components/alert';
import alertBox from './components/alertWarp';

const { show, hide } = alertBox;
Alert.show = show;
Alert.hide = hide;
export default Alert;
