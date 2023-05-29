export function getCurrentDate(separator = "") {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const currTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div>{`${date}${separator}${
        month < 10 ? `0${month}` : `${month}`
      }${separator}${year}`}</div>
      <div className="text-right">{`${currTime}`}</div>
    </>
  );
}
