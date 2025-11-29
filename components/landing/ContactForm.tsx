import { useState } from "react";
import { toast } from "sonner";

// 기본 ContactForm 컴포넌트
export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      // 이메일 전송 기능은 나중에 연결
      toast.success("메시지가 성공적으로 전송되었습니다!");
    } catch (err) {
      toast.error("전송에 실패했습니다.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-lg mx-auto px-4 py-10"
    >
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={form.name}
        onChange={handleChange}
        className="border p-3 w-full rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="이메일"
        value={form.email}
        onChange={handleChange}
        className="border p-3 w-full rounded"
      />

      <textarea
        name="message"
        placeholder="메시지"
        value={form.message}
        onChange={handleChange}
        className="border p-3 w-full h-32 rounded resize-none"
      />

      <button
        type="submit"
        className="bg-black text-white px-5 py-3 rounded w-full"
      >
        보내기
      </button>
    </form>
  );
}
