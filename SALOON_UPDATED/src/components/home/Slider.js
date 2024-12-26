// import React, { useState } from "react";
// import { testimonial } from "../data/Data";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function Sliders() {
//   const [formData, setFormData] = useState({ name: "", testimonial: "" });

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you could add code to handle the form data, such as saving it or updating the testimonial list
//     console.log("Submitted testimonial:", formData);
//     // Reset the form
//     setFormData({ name: "", testimonial: "" });
//   };

//   return (
//     <>
//       <div
//         className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn"
//         data-wow-delay="0.1s"
//       >
//         <div className="container">
//           <div className="owl-carousel testimonial-carousel py-5">
//             <Slider {...settings}>
//               {testimonial.map((item, key) => (
//                 <div
//                   key={key}
//                   className="testimonial-item position-relative bg-white rounded overflow-hidden"
//                 >
//                   <p className="mb-4 text-center">{item.description}</p>
//                   <div className="d-flex align-items-center justify-content-center">
//                     <img
//                       className="img-fluid flex-shrink-0 rounded-circle"
//                       src={item.img}
//                       style={{ width: "70px", height: "70px" }}
//                       alt={`${item.name}'s image`}
//                     />
//                     <div className="ps-3 text-center">
//                       <h6 className="fw-bold mb-1">{item.name}</h6>
//                       <small>{item.profession}</small>
//                     </div>
//                   </div>
//                   {item.icon && (
//                     <div className="position-absolute top-0 end-0 p-2">
//                       {item.icon}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </Slider>
//           </div>

//           {/* Simple Form for Adding a Testimonial */}
//           <div className="my-4">
//             <h3 className="text-center text-white">Submit Your Testimonial</h3>
//             <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
//               <div className="mb-3 w-50">
//                 <label className="form-label text-white" htmlFor="name">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="form-control"
//                   required
//                 />
//               </div>
//               <div className="mb-3 w-50">
//                 <label className="form-label text-white" htmlFor="testimonial">Testimonial</label>
//                 <textarea
//                   id="testimonial"
//                   name="testimonial"
//                   value={formData.testimonial}
//                   onChange={handleInputChange}
//                   className="form-control"
//                   rows="3"
//                   required
//                 ></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useState } from "react";
import { testimonial } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Sliders() {
  const [formData, setFormData] = useState({ name: "", testimonial: "" });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to the server
    fetch("http://localhost:3000/submit-testimonial", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Send the form data as JSON
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          // Successfully submitted
          console.log("Testimonial submitted successfully:", data.message);
          setFormData({ name: "", testimonial: "" }); // Reset form
        } else {
          // Handle errors
          console.error("Error submitting testimonial:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error submitting testimonial:", error);
      });
  };

  return (
    <>
      <div className="container-xxl testimonial my-5 py-5 bg-dark wow zoomIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="owl-carousel testimonial-carousel py-5">
            <Slider {...settings}>
              {testimonial.map((item, key) => (
                <div key={key} className="testimonial-item position-relative bg-white rounded overflow-hidden">
                  <p className="mb-4 text-center">{item.description}</p>
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      src={item.img}
                      style={{ width: "70px", height: "70px" }}
                      alt={`${item.name}'s image`}
                    />
                    <div className="ps-3 text-center">
                      <h6 className="fw-bold mb-1">{item.name}</h6>
                      <small>{item.profession}</small>
                    </div>
                  </div>
                  {item.icon && (
                    <div className="position-absolute top-0 end-0 p-2">
                      {item.icon}
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </div>

          {/* Simple Form for Adding a Testimonial */}
          <div className="my-4">
            <h3 className="text-center text-white">Submit Your Testimonial</h3>
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
              <div className="mb-3 w-50">
                <label className="form-label text-white" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3 w-50">
                <label className="form-label text-white" htmlFor="testimonial">Testimonial</label>
                <textarea
                  id="testimonial"
                  name="testimonial"
                  value={formData.testimonial}
                  onChange={handleInputChange}
                  className="form-control"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
