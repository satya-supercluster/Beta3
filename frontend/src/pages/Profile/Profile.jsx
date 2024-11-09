import React, { useEffect, useState } from 'react';
import { useUserType } from '../../context/UserTypeContext';

const ProfilePreview = () => {
  // Sample initial data - replace with your actual data
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("auth")));
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userData);
  const { userType } = useUserType();
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          avatar: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const updateUserData = async()=>{
    console.log("userdata is ", userData);
    try {
        const response = await fetch(`${import.meta.env.VITE_SITE}/${userType}/editProfile`,{
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData)
          });
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

    } catch (error) {
        throw new Error("Updating Profile failed");
    }
  }


  const handleSave = (e) => {
    e.preventDefault();
    setUserData(formData);
    updateUserData();
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(userData);
    setIsEditing(false);
  };

  // Preview Mode Component
  const PreviewMode = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
            {userData.avatar ? (
              <img 
                src={userData.avatar} 
                alt="Profile" 
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-gray-400">No Image</span>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{userData.name}</h2>
            <p className="text-gray-500">{userData.email}</p>
          </div>
        </div>
        <button
          onClick={() => setIsEditing(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Edit Profile
        </button>
      </div>

      {/* Profile Details */}
      <div className="grid grid-cols-1 gap-4 mt-6">
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">Contact Number</p>
          <p className="font-medium">{userData.contact || 'Not provided'}</p>
        </div>
        
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">Address</p>
          <p className="font-medium">{userData.location || 'Not provided'}</p>
        </div>

        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">Bio</p>
          <p className="font-medium">{userData. bio || 'Not provided'}</p>
        </div>

        {/* <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">Organization</p>
          <p className="font-medium">{userData. organization || 'Not provided'}</p>
        </div> */}
      </div>
    </div>
  );

//   // Edit Mode Component
  const EditMode = () => (
    <form onSubmit={handleSave} className="space-y-6">
      {/* Avatar Upload */}
      <div className="flex items-center space-x-4">
        <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
          {formData.avatar ? (
            <img 
              src={formData.avatar} 
              alt="Profile" 
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-gray-400">No Image</span>
          )}
        </div>
        <input 
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="text-sm"
        />
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Contact</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            placeholder="Enter your contact number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            placeholder="Enter your address"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <input
            type="text"
            name="Bio"
            value={formData.bio}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            placeholder="Enter your Bio"
          />
        </div>

      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </form>
  );

  return (
    <div className="max-w-2xl mx-auto p-6 mt-[60px]">
      <div className="bg-white rounded-xl shadow-sm p-6">
        {isEditing ? <EditMode  /> : <PreviewMode />}
      </div>
    </div>
  );
};

export default ProfilePreview;