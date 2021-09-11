

export default function Card(elmProps: any) {

  const { label, children, className, ...props } = elmProps;

  return (
    <>
      <div className="bg-white relative pt-24 mt-20 my-10 mx-auto p-6 rounded-lg shadow-lg flex flex-col items-center w-5/12">
        <div className={`absolute transform -translate-y-1/2 shadow-2xl top-0 bg-gradient-to-r ${className} h-32 w-60 flex items-center justify-center rounded-xl`}>
          <h2 className="text-4xl text-white tracking-widest">
            {label}
          </h2>
        </div>
        {children}
      </div>
    </>
  );
}