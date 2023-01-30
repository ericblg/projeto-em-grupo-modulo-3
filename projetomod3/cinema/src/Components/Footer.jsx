import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Footer() {
   const foot = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#24252A',
      color: '#FFF',
      padding: '20px 0',
   }
   return (
      <footer style={foot}>
         <div>
            © 2023 Copyright
         </div>
      </footer >
   )
}

export default Footer;
