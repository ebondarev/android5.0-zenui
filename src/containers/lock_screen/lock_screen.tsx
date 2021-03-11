import './lock_screen.css';
import { Header } from '../../components/header/header';
import { TimeWeather } from '../../components/widgets/time_weather/time_weather';

export function LockScreen() {
  return (
    <div className="lock_screen">
      LockScreen
      <Header type="lock-screen" />
      <TimeWeather />
    </div>
  );
}
