import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Clipboard from '../components/Clipboard';

const GetStarted = () => {
  const code_install_1 = "npm install bootstrap@5.3.3"
  const code_install_2 = "gem install bootstrap -v 5.3.3"

  const code_include_1 = `
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  `

  const code_include_2 = `
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  `

  return (
    <div className="max-w-[1400px] w-full px-6 mx-auto mb-24">
      <div className="text-center flex flex-col justify-center items-center gap-4 mb-16">
        <div className="bg-violet-600/10 p-4 flex justify-center items-center rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="text-violet-500 opacity-100 bi bi-code w-10 h-10" viewBox="0 0 16 16">
            <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
          </svg>
        </div>
        <h2 className="text-5xl font-bold">Get Started any way you want</h2>
        <p className="max-w-lg text-lg">Jump right into building with Bootstrap—use the CDN, install it via package manager, or download the source code.</p>
        <div className="group font-semibold text-blue-400  text-lg inline-flex items-center">
          <div className="group-hover:brightness-125 group-hover:cursor-pointer underline underline-offset-4">
            Read installation docs
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right inline-block w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12 divide-x">
        <div className="py-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-box-seam w-8 h-8 mb-2" viewBox="0 0 16 16">
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
          </svg>

          <h3 className="font-bold text-2xl mb-2">Install via package manager</h3>
          <p className="mb-4">
            Install Bootstrap's source Sass and JavaScript files via npm, RubyGems, Composer, or Meteor. Package managed installs don't include documentation or our full build scripts. You can also <a href='#' className="text-blue-400 underline hover:brightness-150">
              use any demo from our Examples repo
            </a> 
            { } to quickly jumpstart Bootstrap projects.
          </p>
          
          <div className="flex justify-between items-center border bg-black/30 border-gray-600 text-gray-300 px-4 py-4 rounded-md mb-4">
            <div>
              <span className="select-none text-gray-500">$</span>
              <code  className="pl-2 text-sm">{code_install_1}</code>
            </div>
            <Clipboard content={code_install_1}/>
          </div>

          <div className="flex justify-between items-center border bg-black/30 border-gray-600 text-gray-300 px-4 py-4 rounded-md mb-4">
            <div>
              <span className="select-none text-gray-500">$</span>
              <code  className="pl-2 text-sm">{code_install_2}</code>
            </div>
            <Clipboard content={code_install_2}/>
          </div>

          <div className="">
            <a href='#' className="text-blue-400 underline hover:brightness-150 pr-2">
              Read our installation docs
            </a>
            for more info and additional package managers.
          </div>
        </div>


        <div className="pl-12 py-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-globe w-8 h-8 mb-2" viewBox="0 0 16 16">
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
          </svg>

          <h3 className="font-bold text-2xl mb-2">Include via CDN</h3>
          <p className="mb-4">
            When you only need to include Bootstrap's compiled CSS or JS, you can use <a href='#' className="text-blue-400 hover:brightness-150 underline">jsDelivr</a>. See it in action with our simple <a href='#' className="text-blue-400 hover:brightness-150 underline">quick start</a>, or <a href='#' className="text-blue-400 hover:brightness-150 underline">browse the examples</a> to jumpstart your next project. You can also choose to include Popper and our JS <a href='#' className="text-blue-400 hover:brightness-150 underline">separately</a>.
          </p>

          <div className="text-sm rounded-md mb-4 overflow-hidden border border-gray-600 flex">
            <SyntaxHighlighter language='htmlbars' style={stackoverflowDark}>
              {code_include_1}
            </SyntaxHighlighter>
            <div className='bg-[#1c1b1b] flex items-center'>
              <Clipboard content={code_include_1}/>
            </div>
          </div>

          <div className="text-sm rounded-md mb-4 overflow-hidden border border-gray-600 flex">
            <SyntaxHighlighter language='htmlbars' style={stackoverflowDark}>
              {code_include_2}
            </SyntaxHighlighter>
            <div className='bg-[#1c1b1b] flex items-center'>
              <Clipboard content={code_include_2}/>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold mb-2">
            Read our getting started guides
          </h3>
          <p className="mb-4">
            Get a jump on including Bootstrap's source files in a new project with our official guides.
          </p>
          <div className="flex justify-center gap-4">
            <a href='#' className='group block'>
              <img src="https://getbootstrap.com/docs/5.3/assets/img/webpack.svg" alt="img_webpack" 
                className="w-16 mb-2 group-hover:scale-110 transition-transform delay-100 ease-in-out duration-200"
              />
              <p>Webpack</p>
            </a>

            <a href='#' className='group block'>
              <img src="https://getbootstrap.com/docs/5.3/assets/img/parcel.png" alt="img_webpack" 
                className="w-16 mb-2 group-hover:scale-110 transition-transform delay-100 ease-in-out duration-200"
              />
              <p>Parcel</p>
            </a>

            <a href='#' className='group block'>
              <img src="https://getbootstrap.com/docs/5.3/assets/img/vite.svg" alt="img_webpack" 
                className="w-16 mb-2 group-hover:scale-110 transition-transform delay-100 ease-in-out duration-200"
              />
              <p>Vite</p>
            </a>
          </div>
        </div>
    </div>
  )
}

export default GetStarted