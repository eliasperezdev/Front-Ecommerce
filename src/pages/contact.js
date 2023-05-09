import Layout from 'components/layout/Layout'
import clientAxios from 'config/axios';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: '',
    title: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await clientAxios.post('/api/contact', formData)
      toast.success('Se ha enviado correctamente');
      setFormData({
        name: '',
        email: '',
        content: '',
        title: ''
      })
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <Layout>
 <form className="flex flex-col gap-4 container my-5 max-w-lg mx-auto px-6 py-7 overflow-hidden" onSubmit={handleSubmit}>
 <h2 className="text-2xl uppercase font-medium mb-1">Contacto</h2>
      <label className="block">
        <span className="text-gray-700">Nombre</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
          required
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Email</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
          required
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Asunto</span>
        <input
          type="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
          required
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Mensaje</span>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
          rows="4"
          required
        ></textarea>
      </label>
      <button
        type="submit"
        className="py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Enviar
      </button>
    </form>
    </Layout>
  )
}
