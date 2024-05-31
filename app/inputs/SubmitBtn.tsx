import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-red-500 text-white rounded-lg outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-red-700 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
}

export default SubmitBtn;
