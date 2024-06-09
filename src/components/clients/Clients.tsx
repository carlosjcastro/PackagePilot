import React from 'react';
import { clients } from '../constants';
import './clients.css';

const Clients: React.FC = () => (
  <section className="clients-section my-4">
    <div className="clients-container flex-wrap w-full">
      {clients.map((client) => (
        <div key={client.id} className="client-item flex-1 m-5">
          <img src={client.logo} alt="client_logo" className="client-logo" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
