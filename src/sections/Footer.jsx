const Footer = () => {
  return (
    <footer className="bg-black/25 py-12 text-gray-300">
      <div className="grid grid-cols-12 py-12 mb-4 max-w-[1400px] w-full px-6 mx-auto">
        <div className="col-span-3 text-sm">
          <div className="flex items-center mb-2 gap-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="d-block my-1 w-10 h-10 cursor-pointer" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fillRule="evenodd" clipRule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg> 
            <h3 className="text-xl cursor-pointer">Bootstrap</h3>
          </div>
          <p className="mb-2">
            Designed and built with all the love in the world by the <a href="#" className="hover:text-blue-400 hover:underline text-white">Bootstrap team</a> with the help of <a href="#" className="hover:text-blue-400 hover:underline text-white">our contributors</a>.
          </p>
          <p className="mb-2">
            Code licensed <a href="#" className="hover:text-blue-400 hover:underline text-white">MIT</a>, docs <a href="#" className="hover:text-blue-400 hover:underline text-white">CC BY 3.0</a>.
          </p>
          <p className="mb-2">
            Currently v5.3.3.
          </p>
        </div>
        <div className="col-span-2 col-start-5 text-white">
          <h3 className="mb-2 text-xl font-[600] text-gray-400">Links</h3>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Home</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Docs</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Examples</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Icons</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Themes</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Blog</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Swag Store</a>
        </div>
        <div className="col-span-2 text-white">
          <h3 className="mb-2 text-xl font-[600] text-gray-400">Guides</h3>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Getting Started</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Starter template</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Webpack</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Parcel</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Vite</a>
        </div>
        <div className="col-span-2 text-white">
          <h3 className="mb-2 text-xl font-[600] text-gray-400">Projects</h3>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Bootstrap 5</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Bootstrap 4</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Icons</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">RFS</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Examples repo</a>
        </div>
        <div className="col-span-2 text-white">
          <h3 className="mb-2 text-xl font-[600] text-gray-400">Community</h3>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Issues</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Discussions</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Corporate sponsors</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Open Collective</a>
          <a href="#" className="hover:text-blue-400 hover:underline block mb-2">Stack Overflow</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer