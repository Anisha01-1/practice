import { React, useState } from "react";

export function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [file, setFile] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      file,
      url,
      about
    );
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setFile("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  return (
    <div className="flex flex-row justify-center items-center bg-gray-200 py-7">
      <div className="App box shadow-2xl rounded-3xl bg-white">
        <div className="px-10">
          <h1 className="flex flex-row items-center justify-center text-3xl font-bold text-green-700 py-6 text-shadow-sm">
            Details Form
          </h1>
          <fieldset>
            <form action="#" method="get">
              <label for="firstname">First Name*</label>
              <input
                className="border border-gray-300 rounded-md p-2 mb-4 w-full  mt-2"
                type="text"
                name="firstname"
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter First Name"
                required
              />
              <label for="lastname">Last Name*</label>
              <input
                className="border border-gray-300 rounded-md p-2 mb-4 w-full mt-2"
                type="text"
                name="lastname"
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter Last Name"
                required
              />
              <label for="email">Enter Email* </label>
              <input
                className="border border-gray-300 rounded-md p-2 mb-4 w-full mt-2"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
              />
              <label htmlFor="tel">Contact*</label>
              <div>
                <input
                  className="border border-gray-300 rounded-md p-2 mb-4 w-full mt-2"
                  type="tel"
                  name="contact"
                  id="contact"
                  value={contact}
                  inputMode="numeric"
                  onChange={(e) =>
                    setContact(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  placeholder="Enter Mobile number"
                  required
                  pattern="^[0-9]{10}$"
                />
                <div className="flex gap-5 ">
                  <label htmlFor="gender">Gender*</label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Male
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Female
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    id="other"
                    checked={gender === "other"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Other
                </div>
              </div>
              <div className="flex item-center">
                <div className="flex flex-column gap-4 py-6">
                  <label htmlFor="lang">Your best Subject</label>
                  <input
                    type="checkbox"
                    name="lang"
                    id="english"
                    checked={subjects.english === true}
                    onChange={(e) => handleSubjectChange("english")}
                  />
                  English
                  <input
                    type="checkbox"
                    name="lang"
                    id="maths"
                    checked={subjects.maths === true}
                    onChange={(e) => handleSubjectChange("maths")}
                  />
                  Maths
                  <input
                    type="checkbox"
                    name="lang"
                    id="physics"
                    checked={subjects.physics === true}
                    onChange={(e) => handleSubjectChange("physics")}
                  />
                  Physics
                </div>
              </div>
              <label htmlFor="file">Upload File*</label>
              <input
                className="border border-gray-300 rounded-md p-2 mb-4 w-full mt-2"
                type="file"
                name="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
                placeholder="Upload File"
                required
              />

              <label htmlFor="url">Enter URL*</label>
              <input
                className="border border-gray-300 rounded-md p-2 mb-4 w-full mt-2"
                type="url"
                name="url"
                id="url"
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter url"
                required
              />
              <label>Select your choice</label>
              <select
                className="border border-gray-300 rounded-md p-2 mb-4 w-full mt-2"
                name="select"
                id="select"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="" disabled selected={selectedOption === ""}>
                  Select
                </option>
                <optgroup label="Beginers">
                  <option value="1">HTML</option>
                  <option value="2">CSS</option>
                  <option value="3">JavaScript</option>
                </optgroup>
                <optgroup label="Advance">
                  <option value="4">React</option>
                  <option value="5">Node</option>
                  <option value="6">Express</option>
                  <option value="t">MongoDB</option>
                </optgroup>
              </select>
              <div className="flex flex-col gap-2 ">
                <label htmlFor="about">About</label>
                <textarea
                  className="border min-h-[100px] max-h-[150px] resize-none w-[98%] p-2"
                  name="about"
                  id="about"
                  cols="30"
                  rows="10"
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="About your self"
                  required
                ></textarea>
              </div>
              <div className="flex gap-8 items-center justify-center mb-8 mt-8">
                <button
                  className="border-none bg-green-700  text-white px-12 py-2 rounded-sm hover:cursor-pointer hover:bg-gray-400"
                  type="reset"
                  value="reset"
                  // onClick={(e) => handleReset()}
                >
                  Reset
                </button>
                <button
                  className="border-none bg-green-700 text-white px-12 py-2 rounded-sm hover:cursor-pointer hover:bg-gray-400"
                  type="submit"
                  value="Submit"
                  // onClick={(e) => handleSubmit(e)}
                >
                  Submit
                </button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
