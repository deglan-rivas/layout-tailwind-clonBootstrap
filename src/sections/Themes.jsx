const Themes = () => {
  return (
    <section className="max-w-[1400px] w-full px-6 mx-auto pb-12 mb-12 grid grid-cols-2 gap-12">
    <div className="col-span-1">
      <div className="bg-violet-600/25 text-violet-500 p-4 inline-block rounded-2xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-droplet-fill w-8 h-8" viewBox="0 0 16 16">
          <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13"/>
        </svg>
      </div>
      <h2 className="text-5xl font-bold mb-4">Make it yours with official Bootstrap Themes</h2>
      <p className="max-w-lg text-lg mb-4">Take Bootstrap to the next level with premium themes from the <a href="#" className="text-blue-400 underline hover:brightness-125">official Bootstrap Themes marketplace</a>. Themes are built on Bootstrap as their own extended frameworks, rich with new components and plugins, documentation, and powerful build tools.</p>
      <div className="group font-semibold text-blue-400  text-lg inline-flex items-center">
        <div className="group-hover:brightness-125 group-hover:cursor-pointer underline underline-offset-4">
          Browse Bootstrap Themes
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right inline-block w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
        </svg>
      </div>
    </div>

    <div className="col-span-1 flex items-center">
      <img src="https://getbootstrap.com/docs/5.3/assets/img/bootstrap-themes.png" alt="themes_png"  className="w-full"/>
    </div>
    </section>
  )
}

export default Themes