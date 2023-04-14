function Contact() {  
    return (
      <>
        <section id="contact-page" className="py-5">
          <div id="container" className="my-auto w-full max-w-[1140px] ml-44">
            <div id="col-12" className="w-full relative px-4 min-h-[1] max-w-[100%]">
              <h3 className="leading-5 text-black font-semibold my-0 text-2xl">Hubungi Kami</h3>
              <br></br>
              <div id="row" className="flex flex-wrap">
                <div id="col-lg-3" className="flex-[0_0_25%] max-w-[25%] relative px-4 min-h-[1] w-full"></div>
                <div id="col-lg-9" className="flex-[0_0_75%] max-w-[75%] relative px-4 min-h-[1] w-full">
                  <form className="flex flex-wrap" id="contact-form">
                    <div id="col-md-6" className="flex-[0_0_50%] max-w-[50%] w-full relative px-4 min-h-[1]">
                      <div className="mb-2.5">
                        <input type="text" class="text-xs leading-7 text-gray-400 border-solid border-2 border-gray-400 w-10/12" id="name" name="name" placeholder="Nama lengkap"></input>
                      </div>
                      <div className="mb-2.5">
                        <input type="text" class="text-xs leading-7 text-gray-400 border-solid border-2 border-gray-400 w-10/12" id="Alamat" name="Alamat" placeholder="Alamat Email"></input>
                      </div>
                      <div className="mb-2.5">
                        <input type="text" class="text-xs leading-7 text-gray-400 border-solid border-2 border-gray-400 w-10/12" id="Subjek" name="Subjek" placeholder="Subjek"></input>
                      </div>
                    </div>
                    <div id="col-md-6" className="flex-[0_0_50%] max-w-[50%] w-full relative px-4 min-h-[1]">
                      <div className="mb-2.5">
                        <textarea id="message" name="message" className="text-xs leading-7 text-gray-400 border-solid border-2 border-gray-400 w-full h-28" rows={1} placeholder="Isi Pesan"></textarea>
                      </div>
                    </div>
                    <div id="col-md-12" className="flex-[0_0_100%] max-w-[100%] text-right relative px-4">
                      <button type="submit" value="submit" class="h-12 leading-10 mt-5 px-9 rounded-none text-center align-middle bg-blue-800 text-white text-xl font-semibold">Kirim Pesan</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>            
          </div>    
        </section>
      </>
    );
  }

export default Contact;