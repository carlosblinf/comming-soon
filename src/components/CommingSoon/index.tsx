import Watch from "../Watch";
import NotifyReady from "../NotifyReady";

export default function CommingSoon() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-10 bg-gray-100">
      <img src={`/logo_verde.png`} alt="logo" className="w-[200px]" />
      <h1 className="font-bold uppercase text-9xl text-regal-green">
        Muy Pronto
      </h1>
      <div>
        <Watch date="2023-06-15" />
      </div>
      <div className="flex flex-col items-center gap-10 w-[80%] lg:w-[60%]">
        <h3 className="text-3xl">Notifícame cuando esté lista</h3>
        <NotifyReady />
      </div>
    </div>
  );
}
