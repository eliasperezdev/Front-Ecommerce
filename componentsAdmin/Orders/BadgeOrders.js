import React from 'react';

const statusClasses = {
  'No pagado': 'bg-gray-500 text-white',
  Aprobado: 'bg-green-500 text-white',
  Empaquetado: 'bg-blue-200 text-gray-700',
  Enviado: 'bg-blue-500 text-white',
  Cancelado: 'bg-red-500 text-white',
};

const OrderBadge = ({ status }) => {

    const getStatusClasses = (status) => {
        switch (status) {
          case 'No pagado':
            return 'bg-gray-500 text-white';
          case 'Aprobado':
            return 'bg-green-500 text-white';
          case 'Empaquetado':
            return 'bg-blue-200 text-gray-700';
          case 'Enviado':
            return 'bg-blue-500 text-white';
          case 'Cancelado':
            return 'bg-red-500 text-white';
          default:
            return 'bg-gray-500 text-white';
        }
      };

      
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${statusClasses[status]}`}>
      {status}
    </span>
  );
};

export default OrderBadge;