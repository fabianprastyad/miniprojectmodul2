import axios from "axios";
import withAuth from "../../components/withAuth"
import "./write.css"
import { useContext, useEffect, useState } from "react";
import { Formik, useFormik } from "formik";

function Write(props) {
  const [successMessage, setSuccessMessage] = useState("");
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios
      .get(`https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(`Error`, error)
      });
  }, [])

  console.log(categories)

  const handleSubmit = async (values) => {
    console.log(values)
    const { file, ...v } = values;
    const data = new FormData();
    data.append("data", JSON.stringify(v))
    data.append("file", file)

    const token = localStorage.getItem("token")


    try {
      const response = await axios.post("https://minpro-blog.purwadhikabootcamp.com/api/blog", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      title: "",
      country: "",
      keywords: "",
      content: "",
      CategoryId: "",
    }, onSubmit: handleSubmit
  })

  const handleForm = (e) => {
    const { target } = e
    formik.setFieldValue(target.name, target.value)
  }

  return (
    <div>




      <Formik
        initialValues={{
          title: "",
          country: "",
          keywords: "",
          content: "",
          CategoryId: "",
        }}
        onSubmit={handleSubmit}
      >
        {props => (
          <div className="write">
            <img className="writeimg"
              src="https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=908&q=80" alt="" />
            <form className="writeform" onSubmit={props.handleSubmit}>

              {/* {JSON.stringify(props.values)} */}
              <div className="writeformgroup">
                <label htmlFor="fileinput">
                  <span class="material-symbols-outlined">add</span>
                </label>
                <input type="file" id="fileinput" style={{ display: "none" }} onChange={e => {
                  props.setFieldValue("file", e.target.files[0])
                  // props.handleChange
                }} name="file" />
                <input type="text" placeholder="Title" className="writeinput" onChange={props.handleChange} autoFocus={true} name="title" />
                <input type="text" placeholder="Country" className="writeinput" onChange={props.handleChange} autoFocus={true} name="country" />

                <input type="text" placeholder="Keywords" className="writeinput" onChange={props.handleChange} autoFocus={true} name="keywords" />

              </div>
              <div className="writeformgroup">
                <textarea onChange={props.handleChange}
                  placeholder="Tell Your Strory..."
                  type="text"
                  className="writeinput"
                  name="content"
                ></textarea>
              </div>
              <button type="submit" className="writesubmit">Publish</button>
            </form>

            <div className="">
              <div>
                <select
                  className="ml-2 bg-gray-200 outline-none border-rounded"
                  onChange={props.handleChange}
                  name="CategoryId"
                >

                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option value={category.id} key={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
        {/* content.target.value, kalau event ga bisa ganti event   */}
      </Formik>



    </div>


  )
}

export default Write