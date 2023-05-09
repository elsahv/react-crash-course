import React from "react";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <div className="main_grid ">
      {/* //*LEFT SIDE */}
      <section className="left-sq pt-[50px] text-aquamarine">
        <div className="2xl:p-5 lg:p-1">
          <h2 className="text-2xl py-1 underline">Info</h2>
          <p className="text-lg">
            Has my portfolio piqued your interest....? If so, you can contact me
            at devdesignsbyelsa@gmail.com Looking forward to hearing from you!
          </p>
        </div>
      </section>

      {/* //*RIGHT SIDE */}
      <section className="right-sq flex flex-col mt-[50px] 2xl:mx-5 lg:mx-1">
        <h2 className="font-bold text-3xl">Contact Form</h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
