import { useRouteError } from "react-router-dom";

const Error404 = () => {
  const error = useRouteError();

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="m-24 flex flex-col items-center">
        <h3 className="text-6xl py-10">
          {error.status} Ups!!! Ha ocurrido un problema 😔
        </h3>
        <p className="text-4xl">{error.data}</p>
      </div>
    </div>
  );
};
export default Error404;