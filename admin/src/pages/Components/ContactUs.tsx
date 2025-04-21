import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Contact.</h1>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <p className="text-xl mb-4">
            454, 5th Floor, Apollo Tower
            <br />
            Indore, Phone: 0731-4971497
            <br />
            Pin: 452009
          </p>
          <div className="flex space-x-6 text-lg">
            <div>
              <p className="font-semibold">Support:</p>
              <a href="mailto:Support@isoftzone.com" className="text-blue-600">
                Support@isoftzone.com
              </a>
            </div>
            <div>
              <p className="font-semibold">Marketing:</p>
              <a href="mailto:Marketing@isoftzone.com" className="text-blue-600">
                Marketing@isoftzone.com
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45916.35299552507!2d75.895392!3d22.749023!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2cbd98f0bf7%3A0xbafbbde339deec8a!2si-SOFTZONE%20-%20Software%20Development%20Company!5e1!3m2!1sen!2sus!4v1744982042958!5m2!1sen!2sus"
  width="100%"
  height="400"
  frameBorder="0"
  style={{ border: 0 }}
  allowFullScreen={true} // Corrected this to boolean
  tabIndex={0} // Corrected this to a number instead of string
></iframe>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
