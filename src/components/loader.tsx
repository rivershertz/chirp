/* eslint-disable @typescript-eslint/restrict-template-expressions */
function Loader(props: { size?: number }) {
  return (
    <div
      className={`inline-block aspect-square animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      role="status"
      style={{ width: props.size ?? 40 }}
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
}

export default Loader;
