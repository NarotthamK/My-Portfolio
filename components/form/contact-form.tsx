"use client";

import { useState } from "react";
import { IoSendSharp } from "react-icons/io5";

export function ContactForm({ className }: { className?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const isFormValid = () => {
    return Object.values(formData).every((field) => field.trim());
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!isFormValid()) {
      setError("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      // Real API request
const res = await fetch("/api/send", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

const data = await res.json();

if (!res.ok) {
  throw new Error(data.error || "Failed to send email");
}

setSent(true);
setFormData({ name: "", email: "", subject: "", message: "" });

    } 
    catch (err) {
      setError("Something went wrong. Please try again.");
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <h6 className="text-center text-blue-100 font-semibold mb-5">
        Leave your email and I will get back to you within 24 hours
      </h6>

      {["name", "email", "subject"].map((field) => (
        <div key={field} className="mb-4">
          <label htmlFor={field} className="block text-blue-100 mb-1 capitalize">
            {field}
          </label>
          <input
            id={field}
            type={field === "email" ? "email" : "text"}
            value={formData[field as keyof typeof formData]}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-zinc-800 text-white rounded border border-zinc-600"
            placeholder={
              field === "name"
                ? "John Doe"
                : field === "email"
                ? "you@example.com"
                : "Let’s talk about something cool"
            }
          />
        </div>
      ))}

      <div className="mb-4">
        <label htmlFor="message" className="block text-blue-100 mb-1">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-zinc-800 text-white rounded border border-zinc-600 resize-none"
          placeholder="Let me know what you're thinking..."
        />
      </div>

      {sent ? (
        <p className="text-center text-sm text-green-500">
          Your message has been sent successfully!
        </p>
      ) : (
        <button
          type="submit"
          disabled={loading}
          className="group/btn relative h-12 w-full shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none"
        >
          {loading ? (
            <span className="flex w-full justify-center items-center gap-2">
              Wait! <LoadingIcon />
            </span>
          ) : (
            <span className="flex w-full justify-center items-center gap-2">
              Submit <IoSendSharp />
            </span>
          )}
          <BottomGradient />
        </button>
      )}

      {error && (
        <p className="mt-4 text-sm text-center text-red-500">{error}</p>
      )}

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-10 sm:my-5 h-[1px] w-full" />
    </form>
  );
}

const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

const LoadingIcon = () => (
  <svg
    aria-hidden="true"
    role="status"
    className="inline mr-3 w-5 h-5 text-blue-100 animate-spin"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="#E5E7EB"
    ></path>
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentColor"
    ></path>
  </svg>
);
