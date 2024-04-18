const Personalization = () => {
  return (
    <section className="max-w-[1400px] w-full px-6 mx-auto pb-12 mb-12 grid grid-cols-2 gap-12">
    <div className="col-span-1">
      <div className="bg-emerald-600/35 text-emerald-300 p-4 inline-block rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" focusable="false" viewBox="0 0 16 16">
            <path d="M0 6a6 6 0 1112 0A6 6 0 010 6z"></path>
            <path d="M12.93 5h1.57a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-1.57a6.953 6.953 0 01-1-.22v1.79A1.5 1.5 0 005.5 16h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 4h-1.79c.097.324.17.658.22 1z"></path>
          </svg>
      </div>
      <h2 className="text-5xl font-bold mb-4">Personalize it with Bootstrap Icons</h2>
      <p className="max-w-lg text-lg mb-4"><a href="#" className="text-blue-400 underline hover:brightness-125">Bootstrap Icons</a> is an open source SVG icon library featuring over 1,800 glyphs, with more added every release. They're designed to work in any project, whether you use Bootstrap itself or not. Use them as SVGs or icon fonts—both options give you vector scaling and easy customization via CSS.</p>
      <div className="group font-semibold text-blue-400  text-lg inline-flex items-center">
        <div className="group-hover:brightness-125 group-hover:cursor-pointer underline underline-offset-4">
          Get Bootstrap Icons
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right inline-block w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
        </svg>
      </div>
    </div>

    <div className="col-span-1 flex items-center">
      <img src="https://getbootstrap.com/docs/5.3/assets/img/bootstrap-icons.png" alt="bootstrap_png"  className="w-full"/>
    </div>
    </section>
  )
}

export default Personalization