import Clipboard from "../components/Clipboard"

const Main = () => {
  const code_build = `npm i bootstrap@5.3.3`

  return(
    <main className=" py-10 mb-10 max-w-[1400px] w-2/3 mx-auto flex flex-col justify-center items-center">
      <a href="#" className="bg-yellow-300 text-black rounded-full py-1 px-4 text-sm">
        <span className="font-semibold">New! </span>
        Never-Ending Support for Bootstrap
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right w-4 h-4 pl-1 inline-block" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
        </svg>
      </a>
      <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="bootstrap-logo.png" className="h-40 py-4"/>
      <h1 className="font-bold text-6xl w-4/5 text-center">Build fast, responsive sites with Boostrap</h1>
      <p className="text-gray-400 text-center w-4/5 text-xl py-4">Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.</p>

      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-4 border bg-gray-700 border-gray-600 text-gray-300 px-4 py-4 rounded-md">
          <span className="select-none">$</span>
          <code  className="">{code_build}</code>
          <Clipboard content={code_build}/>
        </div>
        <button className="flex justify-center items-center gap-2 bg-violet-500 border border-violet-400/70 px-8 py-5 rounded-md font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-book-half w-4 h-4" viewBox="0 0 16 16">
            <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
          </svg>
          Read the docs
        </button>
      </div>

      <div className="my-6 text-center space-x-2 opacity-60">
        <span>Currently</span>
        <span className="font-semibold">
          v5.3.3  
        </span>
        <span>·</span>
        <a href="#" className="text-blue-400 underline hover:text-blue-500">
          Download
        </a>
        <span>·</span>
        <a href="#" className="text-blue-400 underline hover:text-blue-500">
          All releases
        </a>
      </div>
      <a href="#" className="bg-gray-700 rounded-md p-4 flex justify-center gap-4 max-w-md">
        <img src="https://srv.carbonads.net/static/30242/4f7f59796c5dda8f5dfc63a40583dfde7cebb050" alt="ads_carbon" className="w-36"/>
        <div className="text-sm">
          <p className="mb-4">Design and Development tips in your inbox. Every weekday.</p>
          <p>ads vía Carbon</p>
        </div>
      </a>
    </main>
  )
}

export default Main