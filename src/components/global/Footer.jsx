import { useEffect, useState } from 'react';

function Footer() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString({
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  const [time, setTime] = useState(formattedTime);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString({
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mb-8 max-w-[1280px] mx-auto px-2 sm:px-8">
      <div className="text-center text-[16vw] xl:text-[204.8px] text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-violet-600">{time}</div>
      <p className="text-center mt-8 text-lg">
        ©2024
        <a href="#" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-violet-600 hover:text-blue-800 transition-colors"> QuoraSphere </a>
        | All Rights Reserved
      </p>
    </div>
  );
}
export default Footer;
