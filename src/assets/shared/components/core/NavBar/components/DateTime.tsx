import { useEffect, useState } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 6000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div className="text-white font-bold text-xl">
      <div>
        {date.toLocaleDateString("it-it", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>

      <div className="text-right">
        H{" "}
        {date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </div>
  );
};

export default DateTime;
