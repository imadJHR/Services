const Contact = () => {
  return (
    <section className="pt-24 pb-12 bg-white " id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col  items-center md:flex-row gap-4 mb-12">
          <div className="flex-shrink-0 my-11 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Contact</h2>
          </div>
          <div className="md:w-2/3">
          
          </div>
        </div>
        {/*form */}
        <div className="flex flex-col md:flex-row justify-between bg-gray-300 rounded-lg md:p-8 p-4 ">
          <div className="w-full md:w-1/2 p-4  ">
            <form className="space-y-4 ">
             
              <div>
                <label className="block text-sm font-medium text-gray-700 ">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md  shadow-sm focus:outline-none  focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 ">
                  Phone
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Phone"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md  shadow-sm focus:outline-none  focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 ">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="mt-2 py-2.5 px-4 block w-full rounded-md  shadow-sm focus:outline-none  focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 ">
                  Message
                </label>
                <textarea
                  rows="6"
                  placeholder="Let us know how we can help you"
                  name="Message"
                  id="message"
                  className="mt-2 p-2.5  px-4 block w-full  rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary "
                ></textarea>
              </div>
              <button className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary  ">
                Envoyer un message
              </button>
            </form>
          </div>
          <div className="relative md:flex justify-end items-center md:w-1/2  md:-m-8 overflow-hidden">
            <img
              src=""
              alt=""
              className="md:absolute md:block hidden top-0 bottom-0 -right-8 h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
