// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Profile API and is why the file is called profileService.js
import axios from "axios";

const getAllMembers = async () => {
  const response = await axios.get(`/api/member`);

  return response.data || [];
};

const updateMemberAttendance = async (id) => {
  const response = await axios.put(`/api/member/${id}`);
  return response;
};

// All of the endpoints in this file can be exported below
export { getAllMembers, updateMemberAttendance };
