import { useState } from "react";
import { toast } from "sonner"; // FIXED: 잘못된 "sonner@2.0.3" 제거

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      // 실제 제출 동작은 나중에 연결한다고 가정
      toast.success("Message sent!");
    } catch (err) {
      toast.error("Failed to send message.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <input
        name="email"
        placeholder="Your email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 w-full"
      />

      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        className="border p-2 w-full h-32"
      />

      <button type="submit" className="bg-black text-white px-4 py-2">
        Send
      </button>
    </form>
  );
}
