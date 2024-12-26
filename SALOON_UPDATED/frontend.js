import axios from "axios";
import { useState } from "react";

const TestimonialForm = () => {
  const [formData, setFormData] = useState({ name: "", testimonial: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/submit-testimonial", formData);
      alert(response.data.message);
      // Optionally clear the form
      setFormData({ name: "", testimonial: "" });
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      alert("Failed to submit testimonial");
    }
  };
};

const submitBooking = async () => {
  const service = "Haircut"; // Example data
  const location = "Downtown";
  const date = "2023-10-01";
  const time = "10:00 AM";

  try {
    const response = await fetch('http://localhost:3001/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ service, location, date, time })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit booking');
    }

    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};
