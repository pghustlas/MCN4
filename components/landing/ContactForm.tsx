import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { motion } from "motion/react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { projectId, publicAnonKey } from "../../utils/supabase/info";
import { toast } from "sonner@2.0.3";

export const ContactForm = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [platform, setPlatform] = React.useState("tiktok");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      type: platform,
      email: formData.get("email"), // Assuming email is needed, but the form didn't have it. I should add it or use 'handle' as contact info.
      handle: formData.get("handle"),
      message: formData.get("message"),
      subject: "New Application from " + formData.get("name"),
    };

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-cb19d81b/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send application");
      }

      setSubmitted(true);
      toast.success("Application submitted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="apply" className="py-24 bg-white flex items-center justify-center border-t border-zinc-100">
        <div className="text-center p-12 max-w-lg mx-auto">
          <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} />
          </div>
          <h3 className="text-3xl font-black text-black mb-4">SUBMITTED</h3>
          <p className="text-zinc-500 mb-8 font-medium">
            지원서가 접수되었습니다.<br />
            담당자가 검토 후 24시간 이내에 연락드리겠습니다.
          </p>
          <Button 
            onClick={() => setSubmitted(false)}
            variant="outline" 
            className="text-black border-black hover:bg-zinc-100 rounded-none px-8"
          >
            돌아가기
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl font-black text-black mb-8 uppercase leading-[0.9]">
              Join<br />
              <span className="text-[#C9252C]">NextWave</span>
            </h2>
            <p className="text-zinc-600 text-xl mb-12 font-medium">
              틱톡 라이브, 유튜브 등 플랫폼 제한 없이<br />
              당신의 성장을 전폭적으로 지원합니다.
            </p>
            
            <div className="space-y-10">
              {[
                { step: "01", title: "APPLY", desc: "기본 정보를 입력하여 지원하세요." },
                { step: "02", title: "AUDIT", desc: "채널 분석 및 전문가 상담이 진행됩니다." },
                { step: "03", title: "SIGNING", desc: "계약 체결 후 즉시 활동을 시작합니다." }
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-6 group">
                   <span className="text-4xl font-black text-zinc-200 group-hover:text-[#C9252C] transition-colors">{item.step}</span>
                   <div>
                     <h4 className="text-xl font-bold mb-1 uppercase">{item.title}</h4>
                     <p className="text-zinc-500">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-50 p-10 border border-zinc-200"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-bold uppercase text-xs tracking-wider">Name</Label>
                  <Input name="name" id="name" className="bg-white border-zinc-200 rounded-none focus:ring-black focus:border-black h-12" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-bold uppercase text-xs tracking-wider">Contact</Label>
                  <Input name="phone" id="phone" className="bg-white border-zinc-200 rounded-none focus:ring-black focus:border-black h-12" required />
                </div>
              </div>

              <div className="space-y-2">
                 <Label htmlFor="email" className="font-bold uppercase text-xs tracking-wider">Email</Label>
                 <Input type="email" name="email" id="email" className="bg-white border-zinc-200 rounded-none focus:ring-black focus:border-black h-12" required />
              </div>

              <div className="space-y-3">
                <Label className="font-bold uppercase text-xs tracking-wider">Main Platform</Label>
                <RadioGroup 
                  defaultValue="tiktok" 
                  className="flex gap-6"
                  onValueChange={setPlatform}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="tiktok" id="r1" className="text-[#C9252C]" />
                    <Label htmlFor="r1">TikTok</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="youtube" id="r2" className="text-[#C9252C]" />
                    <Label htmlFor="r2">YouTube</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="instagram" id="r3" className="text-[#C9252C]" />
                    <Label htmlFor="r3">Instagram</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <Label htmlFor="handle" className="font-bold uppercase text-xs tracking-wider">Channel URL</Label>
                  <span className="text-[10px] text-zinc-400 font-medium">채널이 있는 경우에만 입력해주세요</span>
                </div>
                <Input name="handle" id="handle" placeholder="@" className="bg-white border-zinc-200 rounded-none focus:ring-black focus:border-black h-12" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-bold uppercase text-xs tracking-wider">Message</Label>
                <Textarea name="message" id="message" className="bg-white border-zinc-200 rounded-none focus:ring-black focus:border-black min-h-[120px]" />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 bg-black hover:bg-zinc-800 text-white font-bold rounded-none text-lg uppercase tracking-wide"
              >
                {isSubmitting ? (
                    <>Sending <Loader2 className="ml-2 w-4 h-4 animate-spin" /></>
                ) : (
                    <>Submit Application <Send className="ml-2 w-4 h-4" /></>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
