import Bootstrap from "@/icons/Bootstrap"

const Footer = () => {
  return (
    <footer className="bg-black/25 py-12 text-gray-300">
      <div className="grid grid-cols-12 py-12 mb-4 max-w-[1400px] w-full px-6 mx-auto">
        <div className="col-span-3 text-sm">
          <div className="flex items-center mb-2 gap-2 text-white">
            <Bootstrap className={"w-10 h-10 my-1 cursor-pointer"} />
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