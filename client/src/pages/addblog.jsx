import React, { useContext, useEffect } from "react";
import { GloablContext } from "../context";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const AddBlog = () => {
  const { formData, setFormData, isEdit, setIsEdit } =
    useContext(GloablContext);
  const navigate = useNavigate();
  const location = useLocation();

  async function handleAddBlog() {
    const response = isEdit
      ? await axios.put(
          `http://localhost:7000/api/blogs/update/${location.state.blogN._id}`,
          {
            title: formData.title,
            description: formData.description,
          }
        )
      : await axios.post("http://localhost:7000/api/blogs/add", {
          title: formData.title,
          description: formData.description,
        });

    const result = await response.data;

    console.log(result);
    if (result) {
      setIsEdit(false)
      setFormData({
        title: "",
        description: "",
      });
      navigate("/");
    }
  }

  useEffect(() => {
    console.log(location);
    if (location.state) {
      setIsEdit(true);
      setFormData({
        title: location.state.blogN.title,
        description: location.state.blogN.description,
      });
    }
  }, [location]);
  return (
    <div className="flex flex-col m-10 border-2 rounded-xl p-10 border-black items-center mt-10 h-auto">
      <div className="text-4xl text-blue-900 font-bold mb-6">
        {isEdit ? "Edit A blog" : "Added A blog"}
      </div>
      <div className="flex flex-col gap-2 ">
        <input
          type="text"
          className="p-3 w-full outline-none rounded-lg"
          placeholder="enter title"
          name="title"
          id="title"
          value={formData.title}
          onChange={(event) =>
            setFormData({ ...formData, title: event.target.value })
          }
        />
        <textarea
          name="description"
          className="p-3 rounded-lg outline-none"
          rows={6}
          placeholder="enter description"
          id="description"
          value={formData.description}
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
        />
        <button
          onClick={handleAddBlog}
          className="bg-gray-500 p-4 font-bold rounded-xl text-white hover:bg-white duration-500 hover:text-black"
        >
          {isEdit ? "Edit" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default AddBlog;
