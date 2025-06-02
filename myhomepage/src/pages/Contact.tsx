import React, { ChangeEvent, FormEvent, useState } from "react";
import SectionTitle from "../components/SectionTitle";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(
      "service_cnymxdd", //service_id
      "" //
    );
  };

  return (
    <div className="main contact">
      <div className="content-inner">
        <SectionTitle title="Contact Us" />
        <div className="contact-wrap">
          <div>
            <form onSubmit={handleSubmit}>
              <p>
                <input
                  type="text"
                  name="name"
                  placeholder="이름"
                  value={formData.name}
                  onChange={handleChange}
                />
              </p>
              <p>
                <input
                  type="email"
                  name="email"
                  placeholder="이메일"
                  value={formData.email}
                  onChange={handleChange}
                />
              </p>
              <p>
                <textarea
                  name="message"
                  id=""
                  placeholder="메세지를 입력하세요."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </p>
              <button type="submit">전송</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
