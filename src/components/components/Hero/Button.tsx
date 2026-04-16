"use client";
export default function Button({ value }: { value: string }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }}
      className="button"
    >
      {value}
    </button>
  );
}
