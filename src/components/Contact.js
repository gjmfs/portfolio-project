import { useEffect, useState } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "contact";
  });
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "put your api key here. source web 3 forms");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="Main-form justify-content-center">
      <form onSubmit={onSubmit}>
        <div className="container align-items-center ">
          <div className="row align-items-center">
            <label htmlFor="validationTooltip01" className="form-label pb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="form-control mb-3"
              id="validationTooltip01"
              placeholder="Enter Your Name"
              required
            />

            <label htmlFor="validation02" className="form-label pb-2">
              E-mail:
            </label>
            <input
              type="email"
              name="email"
              id="validation02"
              placeholder="Enter Your E-mail Address"
              className="form-control mb-3"
              required
            />
            <label htmlFor="validation03" className="form-label pb-2">
              Message:
            </label>
            <textarea
              name="message"
              rows={5}
              id="validation03"
              placeholder="Send your valuable messages or request to us"
              className="form-control"
              required
            ></textarea>
            <input type="checkbox" name="botcheck" className="hidden " />
            <div className="d-grid pt-5">
              <button className="btn btn-primary" type="submit">
                Submit Form
              </button>
            </div>
          </div>
        </div>
      </form>
      <span>{result}</span>
    </div>
  );
}
