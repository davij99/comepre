export interface ServerErrorProps {
  message?: string;
}

const ServerError = (props: ServerErrorProps) => {
  return (
    <div className="bg-red-800 text-white rounded-xl p-3 my-6">
      {props.message || "A Server error occurs!"}
    </div>
  );
};

export default ServerError;
