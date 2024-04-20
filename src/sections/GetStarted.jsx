import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Clipboard from '../components/Clipboard';
import Code from '@/icons/Code';
import ArrowRight from '@/icons/ArrowRight';
import ShippingBox from '@/icons/ShippingBox';
import Globe from '@/icons/Globe';

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
    <div className="max-w-[1320px] w-full px-6 mx-auto mb-24">
      <div className="text-start flex flex-col items-start gap-4 mb-8 w-full
      md:items-center md:text-center
      md:mb-16
      lg:w-7/12 lg:mx-auto">
        <div className="bg-violet-600/10 p-4 flex justify-center items-center rounded-2xl">
          <Code className={"text-violet-500 opacity-100 w-10 h-10"}/>
        </div>
        <h2 className="text-3xl font-bold
        md:text-4xl
        lg:text-5xl">
          Get Started any way you want
        </h2>
        <p className="
        md:text-xl">
          Jump right into building with Bootstrap—use the CDN, install it via package manager, or download the source code.
        </p>
        <div className="group font-semibold text-blue-400 inline-flex items-center">
          <div className="group-hover:brightness-125 group-hover:cursor-pointer underline underline-offset-4
          md:text-xl">
            Read installation docs
          </div>
          <ArrowRight className={"inline-block w-4 h-4 lg:w-5 lg:h-5 ml-1 group-hover:translate-x-1 transition-transform"} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-12
      lg:divide-x">
        <div className="py-6 col-span-2
        lg:col-span-1">
          <ShippingBox className={"w-6 h-6 mb-2 md:w-7 md:h-7 lg:w-8 lg:h-8"}/>

          <h3 className="font-bold text-2xl mb-2">Install via package manager</h3>
          <p className="mb-4">
            Install Bootstrap's source Sass and JavaScript files via npm, RubyGems, Composer, or Meteor. Package managed installs don't include documentation or our full build scripts. You can also <a href='#' className="text-blue-400 underline hover:brightness-150">
              use any demo from our Examples repo
            </a> 
            { } to quickly jumpstart Bootstrap projects.
          </p>
          
          <div className="flex justify-between items-center border bg-black/30 border-gray-600 text-gray-300 px-4 py-6 rounded-md mb-4 w-screen -ml-6
          md:w-full md:ml-0">
            <div>
              <span className="select-none text-gray-500">$</span>
              <code  className="pl-2 text-sm">{code_install_1}</code>
            </div>
            <Clipboard content={code_install_1}/>
          </div>

          <div className="flex justify-between items-center border bg-black/30 border-gray-600 text-gray-300 px-4 py-6 rounded-md mb-4 w-screen -ml-6
          md:w-full md:ml-0">
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


        <div className="pl-0 py-6 col-span-2
        lg:col-span-1 lg:pl-12">
          <Globe className={"w-8 h-8 mb-2"} />

          <h3 className="font-bold text-2xl mb-2">Include via CDN</h3>
          <p className="mb-4">
            When you only need to include Bootstrap's compiled CSS or JS, you can use <a href='#' className="text-blue-400 hover:brightness-150 underline">jsDelivr</a>. See it in action with our simple <a href='#' className="text-blue-400 hover:brightness-150 underline">quick start</a>, or <a href='#' className="text-blue-400 hover:brightness-150 underline">browse the examples</a> to jumpstart your next project. You can also choose to include Popper and our JS <a href='#' className="text-blue-400 hover:brightness-150 underline">separately</a>.
          </p>

          <div className="text-sm rounded-md overflow-hidden border border-gray-600 flex mb-4 w-screen -ml-6
          md:w-full md:ml-0">
            <SyntaxHighlighter language='htmlbars' style={stackoverflowDark}>
              {code_include_1}
            </SyntaxHighlighter>
            <div className='bg-[#1c1b1b] flex items-center'>
              <Clipboard content={code_include_1}/>
            </div>
          </div>

          <div className="text-sm rounded-md overflow-hidden border border-gray-600 flex mb-4 w-screen -ml-6
          md:w-full md:ml-0">
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