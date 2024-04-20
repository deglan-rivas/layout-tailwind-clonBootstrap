import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Clipboard from '@/components/Clipboard';
import Plugin from "@/icons/Plugin";
import ArrowRight from "@/icons/ArrowRight";

const JQuery = () => {
  const code_data = `
  <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </button>
    <ul class="dropdown-menu">
      <li><button class="dropdown-item" type="button">Dropdown item</button></li>
      <li><button class="dropdown-item" type="button">Dropdown item</button></li>
      <li><button class="dropdown-item" type="button">Dropdown item</button></li>
    </ul>
  </div>
  `
  return (
    <section className="max-w-[1320px] w-full px-6 mx-auto mb-12 pb-12">
      <div className="w-full mb-12
      lg:w-7/12">
        <div className="bg-yellow-800/25 p-4 inline-block rounded-2xl mb-4">
          <Plugin className={"w-10 h-10 text-yellow-400"}/>
        </div>
        <h2 className="text-3xl font-bold mb-4 md:text-4xl lg:text-5xl">Powerful JavaScript plugins without jQuery</h2>
        <p className="text-base mb-4 md:text-xl">Add toggleable hidden elements, modals and offcanvas menus, popovers and tooltips, and so much more—all without jQuery. Bootstrap's JavaScript is HTML-first, meaning most plugins are added with <code className="text-red-400 text-[17.5px]">data</code> attributes in your HTML. Need more control? Include individual plugins programmatically.</p>
        <div className="group font-semibold text-blue-400 inline-flex items-center md:text-xl">
          <div className="group-hover:brightness-125 group-hover:cursor-pointer underline underline-offset-4">
            Learn more about Bootstrap JavaScript
          </div>
          <ArrowRight className={"inline-block w-4 h-4 lg:w-5 lg:h-5 ml-1 group-hover:translate-x-1 transition-transform"} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-12">
        <div className="mb-4 col-span-2 lg:col-span-1">
          <h3 className="text-xl mb-2 font-semibold md:text-2xl lg:text-3xl">Data attribute API</h3>
          <p className="mb-4">Why write more JavaScript when you can write HTML? Nearly all of Bootstrap's JavaScript plugins feature a first-class data API, allowing you to use JavaScript just by adding <code className="text-red-400 text-sm">data</code> attributes.</p>

          <div className="text-sm rounded-md mb-4 p-6 overflow-hidden border border-gray-600 flex justify-between bg-transparent">
            <DropdownMenu>
              <DropdownMenuTrigger className="py-2 px-4 rounded-md text-base bg-blue-600/70 hover:bg-blue-600 flex items-center justify-between gap-2">
                Dropdown
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-2 h-2 bi bi-caret-down-fill group-hover:brightness-200 group-hover:text-white cursor-pointer" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border-gray-600 bg-[#202529] text-white">
                <DropdownMenuItem>Dropdown item</DropdownMenuItem>
                <DropdownMenuItem>Dropdown item</DropdownMenuItem>
                <DropdownMenuItem>Dropdown item</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="text-sm rounded-md mb-4 overflow-hidden border border-gray-600 flex justify-between bg-[#1c1c21] w-screen -ml-6 md:w-full md:ml-0">
            <SyntaxHighlighter language='htmlbars' style={stackoverflowDark}>
              {code_data}
            </SyntaxHighlighter>
            <div className='flex items-center'>
              <Clipboard content={code_data}/>
            </div>
          </div>

          <p className="">
            Learn more about <a href="#" className="text-blue-400 underline hover:brightness-125">our JavaScript as modules</a> and <a href="#" className="text-blue-400 underline hover:brightness-125">using the programmatic API</a>.
          </p>
        </div>
        <div className="mb-4 col-span-2 lg:col-span-1">
          <h3 className="text-xl mb-2 font-semibold md:text-2xl lg:text-3xl">Comprehensive set of plugins</h3>
            <p className="mb-4">Bootstrap features a dozen plugins that you can drop into any project. Drop them in all at once, or choose just the ones you need.</p>
            <hr className="my-4 border-gray-500"/>
            <div href="#" className="grid grid-cols-2 gap-x-10 gap-y-6">
              <a href="#" className="block col-span-2 md:col-span-1">
                <h4 className="text-xl font-semibold">
                  Alert
                </h4>
                <p className="text-sm">
                  Show and hide alert messages to your users.
                </p>
              </a>
              <a href="#" className="block col-span-2 md:col-span-1">
                <h4 className="text-xl font-semibold">
                  Button
                </h4>
                <p className="text-sm">
                  Programmatically control the active state for buttons.
                </p>
              </a>

              <a href="#" className="block col-span-2 md:col-span-1">
                <h4 className="text-xl font-semibold">
                  Carousel
                </h4>
                <p className="text-sm">
                  Add slideshows to any page, including support for crossfade.
                </p>
              </a>
              <a href="#" className="block col-span-2 md:col-span-1">
                <h4 className="text-xl font-semibold">
                  Collapse
                </h4>
                <p className="text-sm">
                  Expand and collapse areas of content, or create accordions.
                </p>
              </a>

              <a href="#" className="block col-span-2 md:col-span-1">
                <h4 className="text-xl font-semibold">
                  Dropdown
                </h4>
                <p className="text-sm">
                  Create menus of links, actions, forms, and more.
                </p>
              </a>
              <a href="#" className="block col-span-2 md:col-span-1">
                <h4 className="text-xl font-semibold">
                  Modal
                </h4>
                <p className="text-sm">
                  Add flexible and responsive dialogs to your project.
                </p>
              </a>

              <a href="#" className="block col-span-2 md:col-span-1">
                <h4 className="text-xl font-semibold">
                  Offcanvas
                </h4>
                <p className="text-sm">
                  Build and toggle hidden sidebars into any page.
                </p>
              </a>
              <a href="#" className="block col-span-2 md:col-span-1">
                <h4 className="text-xl font-semibold">
                  Popover
                </h4>
                <p className="text-sm">
                  Create custom overlays. Built on Popper.
                </p>
              </a>
              
              <a href="#" className="block col-span-2 md:col-span-1">
                <h4 className="text-xl font-semibold">
                  Scrollspy
                </h4>
                <p className="text-sm">
                  Automatically update active nav links based on page scroll.
                </p>
              </a>
              <a href="#" className="block col-span-2 md:col-span-1">
                <h4 className="text-xl font-semibold">
                  Tab
                </h4>
                <p className="text-sm">
                  Allow Bootstrap nav components to toggle contents.
                </p>
              </a>

              <a href="#" className="block col-span-2 md:col-span-1">
                <h4 className="text-xl font-semibold">
                  Toast
                </h4>
                <p className="text-sm">
                  Show and hide notifications to your visitors.
                </p>
              </a>
              <a href="#" className="block col-span-2 md:col-span-1">
                <h4 className="text-xl font-semibold">
                  Tooltip
                </h4>
                <p className="text-sm">
                  Replace browser tooltips with custom ones. Built on Popper.
                </p>
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default JQuery