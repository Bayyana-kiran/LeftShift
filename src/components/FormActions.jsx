export default function FormAction({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
}) {
  return (
    <>
      {type === "Button" ? (
        <div className="flex justify-center">
          <button
            type={action}
            className="inline-block rounded bg-red-500 px-12 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus  font-press-start-2p"
            onClick={handleSubmit} // Changed onSubmit to onClick assuming this is for handling click events
          >
            {text}
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
