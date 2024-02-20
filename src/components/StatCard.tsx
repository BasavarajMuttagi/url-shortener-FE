function StatCard({ children, title, data = 0 }: any) {
  return (
    <div className="flex  justify-between font-inter  rounded-md bg-white drop-shadow-md max-w-sm space-y-1 p-4 md:w-full">
      <div className="px-2">
        <div className="text-slate-400 text-sm  uppercase font-gothic">
          {title}
        </div>
        <div className="text-slate-900 font-medium text-xl  font-gothic">
          {data}
        </div>
      </div>
      <div className="px-2">{children}</div>
    </div>
  );
}

export default StatCard;
