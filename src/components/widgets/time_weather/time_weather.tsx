import React from 'react';

export function TimeWeather() {
  const [time, setTime] = React.useState('00:00');

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const hours = `0${date.getHours()}`.slice(-2);
      const minutes = `0${date.getMinutes()}`.slice(-2);
      setTime(`${hours}:${minutes}`);
    }, 1000);

    return () => clearInterval(intervalId);
  });

  return (
    <>
      <div>TimeWeather</div>
      <div>{time}</div>
    </>
  );
}
