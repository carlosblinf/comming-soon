import { useEffect, useState } from "react";

type Props = {
  date: string;
};

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Watch({ date }: Props) {
  function calculateTimeLeft() {
    const difference = +new Date(date) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div className="flex items-center gap-3 uppercase">
      <div className="px-12 py-8 text-center bg-white rounded">
        <div className="text-lg text-white-green">Dias</div>
        <span className="text-4xl text-white-green">{timeLeft["days"]}</span>
      </div>
      <div className="text-4xl">:</div>
      <div className="px-12 py-8 text-center bg-white rounded">
        <div className="text-lg text-white-green">Horas</div>
        <span className="text-4xl text-white-green">{timeLeft["hours"]}</span>
      </div>
      <div className="text-4xl">:</div>
      <div className="px-12 py-8 text-center bg-white rounded">
        <div className="text-lg text-white-green">Minutos</div>
        <span className="text-4xl text-white-green">{timeLeft["minutes"]}</span>
      </div>
      <div className="text-4xl">:</div>
      <div className="px-12 py-8 text-center bg-white rounded">
        <div className="text-lg text-white-green">Segundos</div>
        <span className="text-4xl text-white-green">{timeLeft["seconds"]}</span>
      </div>
    </div>
  );
}
