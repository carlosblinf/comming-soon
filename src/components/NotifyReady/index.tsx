export default function NotifyReady() {
  return (
    <div className="flex items-center justify-center w-full gap-5">
      <input
        type="email"
        placeholder="user@example.com"
        className="h-[52px] lg:w-[400px] border-2 border-gray-300 p-3"
      />
      <button className="w-[172px] h-[52px] text-regal-green uppercase bg-regal-green/10">
        Enviar
      </button>
    </div>
  );
}
