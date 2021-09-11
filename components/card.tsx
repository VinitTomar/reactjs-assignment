

export default function Card(elmProps: any) {

  const { label, children, className, ...props } = elmProps;

  return (
    <>
      <div className="bg-white my-10 mx-auto p-6 rounded-lg shadow-lg flex flex-col w-5/12">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 inline-block text-center">
          {label}
        </h2>
        {children}
      </div>
    </>
  );
}