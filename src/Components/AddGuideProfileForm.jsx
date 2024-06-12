import { useState } from "react";

const AddGuideProfileForm = () => {
  const [profileData, setProfileData] = useState({
    contactDetails: '',
    education: '',
    skills: '',
    workExperience: ''
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Data Submitted:', profileData);
    // Add logic to send profile data to server or update state
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Update Your Profile</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="contactDetails" className="block mb-2">Contact Details:</label>
          <input
            id="contactDetails"
            name="contactDetails"
            type="text"
            value={profileData.contactDetails}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="education" className="block mb-2">Education:</label>
          <input
            id="education"
            name="education"
            type="text"
            value={profileData.education}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="skills" className="block mb-2">Skills:</label>
          <input
            id="skills"
            name="skills"
            type="text"
            value={profileData.skills}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="workExperience" className="block mb-2">Work Experience:</label>
          <input
            id="workExperience"
            name="workExperience"
            type="text"
            value={profileData.workExperience}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit Profile
        </button>
      </form>
    </div>
  );
};

export default AddGuideProfileForm;
