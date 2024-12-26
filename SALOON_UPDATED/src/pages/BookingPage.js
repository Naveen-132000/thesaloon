import React, { useState } from "react";
import Heading from "../components/common/Heading";

export default function Booking() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Form submitted successfully');
      } else {
        alert('Error submitting form');
      }
    } catch (error) {
      alert('Error submitting form');
    }
  };

  return (
    <>
      <Heading heading="Booking" title="Home" subtitle="Booking" />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <form onSubmit={handleSubmit} style={{ width: '300px' }}>
          <input type="text" name="name" onChange={handleChange} placeholder="Name" required style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
          <input type="email" name="email" onChange={handleChange} placeholder="Email" required style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
          <textarea name="message" onChange={handleChange} placeholder="Message" required style={{ width: '100%', padding: '10px', marginBottom: '10px', height: '100px' }} />
          <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
        </form>
      </div>
    </>
  );
}
