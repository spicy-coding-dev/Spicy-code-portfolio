import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import GlareHover from './GlareHover'

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "+91 8438365490",
  email = "enquiry.spicycode@gmail.com"
}: Contact2Props) => {
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  // Define your services
  const services = [
    "Web Development",
    "Software Development",
    "Mobile Application",
    "Digital Marketing",
    "UI / UX Design",
    "Graphic Design",
    "Video Editing",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "bac70c0c-7344-4e73-a7db-4cfe77b88236");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        setResult(`✅${data.message || "✅ Message sent successfully!"}`);
        // Clear controlled input state
        setName("");
        setEmailVal("");
        setService("");
        setMessage("");
        setTimeout(() => {
          setResult("");
        }, 5000);
      } else {
        setResult(`❌ ${data.message || "Something went wrong!"}`);
      }
    } catch (err) {
      console.log(err);
      setResult("❌ Error sending message!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="lg:py-32 py-20 bg-black">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between  gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col lg:px-10 justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl text-white font-semibold lg:mb-1 lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl text-white font-semibold lg:text-left">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc text-white">
                <li>
                  <span className="font-bold">Phone: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form
            className="mx-5 flex w-[90%] flex-col md:m-auto gap-6 rounded-lg border-none shadow-[0_10px_25px_rgba(255,165,0,0.4)] p-10"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter Your Email"
                value={emailVal}
                onChange={(e) => setEmailVal(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="service">Select Service</Label>
              <select
                id="service"
                name="service" // <-- this will be sent as "subject" in Web3Forms
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 md:py-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
              >
                <option value="">-- Choose a Service --</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                placeholder="Type your message here."
                name="message"
                required
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <GlareHover
  width="100%"
  height="auto"
  glareColor="#ffffff"
  glareOpacity={0.3}
  background="transparent"
  glareAngle={-30}
  glareSize={300}
  transitionDuration={800}
  playOnce={false}
  className="rounded-lg"
>
  <Button
    type="submit"
    className="w-full cursor-pointer bg-indigo-500 py-3 text-lg"
    disabled={loading}
  >
    {loading ? "Sending..." : "Send Message"}
  </Button>
</GlareHover>

            
            {result && (
              <p className="text-center text-white mt-2 text-sm">{result}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
