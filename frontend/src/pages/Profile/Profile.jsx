import React, { useState } from "react";
import {
  Camera,
  Mail,
  Phone,
  MapPin,
  User,
  FileText,
  Building,
} from "lucide-react";

const Profile = () => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("auth") || "{}")
  );
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          avatar: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUserData(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(userData);
    setIsEditing(false);
  };

  // Form field configuration for better organization
  const formFields = [
    {
      label: "Full Name",
      name: "name",
      type: "text",
      icon: <User className="text-emerald-500" size={20} />,
      disabled: true,
      placeholder: "Your full name",
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
      icon: <Mail className="text-emerald-500" size={20} />,
      disabled: true,
      placeholder: "Your email address",
    },
    {
      label: "Contact Number",
      name: "contact",
      type: "tel",
      icon: <Phone className="text-emerald-500" size={20} />,
      placeholder: "Enter your contact number",
    },
    {
      label: "Address",
      name: "location",
      type: "text",
      icon: <MapPin className="text-emerald-500" size={20} />,
      placeholder: "Enter your address",
    },
  ];

  const PreviewMode = () => (
    <div className="space-y-5 bg-gray-100">
      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="relative group">
            <div className="h-24 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-500 p-1">
              <div className="h-full w-full rounded-full overflow-hidden bg-white">
                {userData.avatar ? (
                  <img
                    src={"/avatar.png"}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gray-50">
                    <User size={32} className="text-gray-400" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-600 bg-clip-text text-transparent">
              {userData.name}
            </h2>
            <p className="text-gray-500 flex items-center mt-1">
              <Mail size={16} className="mr-2" />
              {userData.email}
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsEditing(true)}
          className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-500 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 shadow-lg"
        >
          Edit Profile
        </button>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 gap-6 mt-8">
        {formFields.map((field) => (
          <div
            key={field.name}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="flex items-center space-x-3 mb-4">
              {field.icon}
              <h3 className="font-semibold text-gray-700">{field.label}</h3>
            </div>
            <p className="text-gray-600 ml-8">
              {userData[field.name] || "Not provided"}
            </p>
          </div>
        ))}

        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <FileText className="text-emerald-500" size={20} />
            <h3 className="font-semibold text-gray-700">Bio</h3>
          </div>
          <p className="text-gray-600 ml-8">{userData.bio || "Not provided"}</p>
        </div>
      </div>
    </div>
  );

  const EditMode = () => (
    <form onSubmit={handleSave} className="space-y-8 bg-gray-100">
      {/* Avatar Upload */}
      <div className="flex items-center space-x-6">
        <div className="relative group">
          <div className="h-24 w-24 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-500 p-1">
            <div className="h-full w-full rounded-full overflow-hidden bg-white">
              {formData.avatar ? (
                <img
                  src={"/avatar.png"}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-gray-50">
                  <User size={32} className="text-gray-400" />
                </div>
              )}
            </div>
          </div>
          <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer transform hover:scale-110 transition-transform">
            <Camera size={18} className="text-emerald-500" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {formFields.map((field) => (
          <div key={field.name} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {field.icon}
              </div>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleInputChange}
                disabled={field.disabled}
                className={`w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 
                  focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors
                  ${
                    field.disabled
                      ? "bg-gray-50 cursor-not-allowed"
                      : "bg-white"
                  }`}
                placeholder={field.placeholder}
              />
            </div>
          </div>
        ))}

        {/* Bio Field - Full Width */}
        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <FileText className="text-emerald-500" size={20} />
            </div>
            <textarea
              name="bio"
              value={formData.bio || ""}
              onChange={handleInputChange}
              rows={4}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
              placeholder="Tell us about yourself"
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={handleCancel}
          className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-500 text-white rounded-lg hover:from-emerald-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 shadow-lg"
        >
          Save Changes
        </button>
      </div>
    </form>
  );

  return (
    <div className="max-w-3xl mx-auto p-6 mt-[60px] bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-8">
        {isEditing ? <EditMode /> : <PreviewMode />}
      </div>
    </div>
  );
};

export default Profile;