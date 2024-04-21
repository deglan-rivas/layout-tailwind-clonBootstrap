// "use client"
import { useState } from "react"
import './Header.css'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

import Bootstrap from "@/icons/Bootstrap"
import Search from "@/icons/Search"
import Ctrl from "@/icons/Ctrl"
import Github from "@/icons/Github"
import Twitter from "@/icons/Twitter"
import OpenCollective from "@/icons/OpenCollective"
import ChevronDown from "@/icons/ChevronDown"
import MoonStars from "@/icons/MoonStars"
import Sun from "@/icons/Sun"
import CircleHalf from "@/icons/CircleHalf"
import ThreeDots from "@/icons/ThreeDots"
import Close from "@/icons/Close"

export function DropdownMenuRadioGroupDemo() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


const Header = () => {
  const [position, setPosition] = useState("v5.3.x")
  const [lightMode, setLightMode] = useState("auto")

  return (
    <>
    <header className="bg-violet-700/90 sticky top-0">
      <div className="container mx-auto justify-between items-center text-gray-200 py-3 font-medium hidden lg:flex">
        <nav className="flex items-center space-x-3">
          <Bootstrap className={"d-block my-1 w-10 h-8 hover:scale-110 hover:-rotate-12 transition-transform cursor-pointer"}/>
          <div className="hover:text-white cursor-pointer">Docs</div>
          <div className="hover:brightness-200 group-hover:text-white cursor-pointer">Examples</div>
          <div className="hover:brightness-200 group-hover:text-white cursor-pointer">Icons</div>
          <div className="hover:brightness-200 group-hover:text-white cursor-pointer">Themes</div>
          <div className="hover:brightness-200 group-hover:text-white cursor-pointer">Blog</div>
        </nav>
        <div className="absolute w-64 bg-violet-800/55 left-1/2 -translate-x-1/2 flex justify-between items-center p-2 text-white/50 rounded-md border border-gray-400/60 cursor-pointer group hover:bg-violet-800 hover:border-white hover:ring hover:ring-pink-300">
          <div className="flex items-center group-hover:text-white">
            <Search className={"w-4 h-4"}/>
            <div className="font-semibold pl-2">
              Search
            </div>
          </div>
          <div className="flex bg-violet-900 px-2 py-[2px] rounded-md items-center gap-1 ">
            <Ctrl/>
            <kbd className="text-sm -tracking-tighter">K</kbd>
          </div>
        </div>
        <div className="flex divide-x items-center">
          <div className="flex space-x-3 items-center pr-3">
            <Github className={"w-4 h-4 hover:brightness-200 group-hover:text-white cursor-pointer"}/>
            <Twitter className={"w-4 h-4 hover:brightness-200 group-hover:text-white cursor-pointer"}/>
            <OpenCollective className={"w-4 h-4 hover:brightness-200 group-hover:text-white cursor-pointer"}/>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="px-3 flex items-center space-x-2 group">
                <p className="group-hover:brightness-200 group-hover:text-white cursor-pointer">v5.3</p>
                <ChevronDown className={"w-2 h-2 group-hover:brightness-200 group-hover:text-white cursor-pointer"}/>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-800 border-gray-500">
              <DropdownMenuLabel className="text-gray-400 px-4 py-[6px]">v5 releases</DropdownMenuLabel>
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="v5.3.x" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[state=checked]:bg-violet-600 data-[state=checked]:font-semibold">Latest (5.3.x)</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="v5.2.3" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[state=checked]:bg-violet-600 data-[state=checked]:font-semibold">v5.2.3</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="v5.1.3" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[state=checked]:bg-violet-600 data-[state=checked]:font-semibold">v5.1.3</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="v5.0.2" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[state=checked]:bg-violet-600 data-[state=checked]:font-semibold">v5.0.2</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator className="bg-gray-400 my-2"/>
              <DropdownMenuLabel className="text-gray-400 px-4 py-[6px]">Previous releases</DropdownMenuLabel>
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="v4.6.x" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[state=checked]:bg-violet-600 data-[state=checked]:font-semibold">v4.6.x</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="v3.4.1" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[state=checked]:bg-violet-600 data-[state=checked]:font-semibold">v3.4.1</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="v2.3.2" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[state=checked]:bg-violet-600 data-[state=checked]:font-semibold">v2.3.2</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator className="bg-gray-400 my-2"/>
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                {/* agregar un disabled al All versions para hacer pruebas con el Header.css, pero gana el tailwindcss, revisar notion */}
                {/* <DropdownMenuRadioItem value="vx.x.x" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[disabled]:bg-red-400" data-[state=unchecked]:text-green-400 disabled>All versions</DropdownMenuRadioItem> */}
                <DropdownMenuRadioItem value="vx.x.x" className="text-white px-4 py-1 focus:bg-violet-600/20 focus:text-white data-[state=checked]:bg-violet-600 data-[state=checked]:font-semibold">All versions</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="pl-3 py-1 flex items-center space-x-2 group">
                <MoonStars className={"w-4 h-4 group-hover:brightness-200 group-hover:text-white cursor-pointer"}/>
                <ChevronDown className={"w-2 h-2 group-hover:brightness-200 group-hover:text-white cursor-pointer"}/>
            </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-800 border-gray-500">
              <DropdownMenuRadioGroup value={lightMode} onValueChange={setLightMode}>
                <DropdownMenuRadioItem value="light" className="text-gray-400 px-4 py-1 focus:bg-violet-600/20 focus:text-gray-300 data-[state=checked]:bg-violet-600 data-[state=checked]:text-white data-[state=checked]:font-semibold gap-1">
                  <Sun/>
                  <p>Light</p>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark" className="text-gray-400 px-4 py-1 focus:bg-violet-600/20 focus:text-gray-300 data-[state=checked]:bg-violet-600 data-[state=checked]:text-white data-[state=checked]:font-semibold gap-1">
                  <MoonStars/> 
                  <p>Dark</p>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="auto" className="text-gray-400 px-4 py-1 focus:bg-violet-600/20 focus:text-gray-300 data-[state=checked]:bg-violet-600 data-[state=checked]:text-white data-[state=checked]:font-semibold gap-1">
                  <CircleHalf/>
                  <p>Auto</p>
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      
    </header>

    <header className="bg-violet-700/90 sticky top-0">
      <div className="py-6 flex justify-end items-center px-6 gap-4
        lg:hidden">
        <a href="#">
          <Bootstrap className={"d-block my-0 w-10 h-10 hover:scale-110 hover:-rotate-12 transition-transform cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"}/>
        </a>
        <Search className={"w-5 h-5 text-white/50 hover:text-white cursor-pointer"}/>
        
        <Drawer direction="right">
          <DrawerTrigger>
            <ThreeDots className={"w-5 h-5 text-white/50 hover:text-white"} />
          </DrawerTrigger>
          <DrawerContent className={"inset-y-0 left-auto w-full max-w-[420px] mt-0 bg-violet-700 border-0 px-6 after:content-none rounded-none divide-y border-gray-200"}>
            <div className="flex justify-between items-center py-4 border-gray-200">
              <h2 className="text-white font-medium text-xl">
                Bootstrap
              </h2>
              <DrawerClose>
                <Button className={"bg-transparent text-gray-400 hover:bg-transparent hover:text-gray-300 -mr-4"}>
                  <Close className={"w-6 h-6"}/>
                </Button>
              </DrawerClose>
            </div>
            
            <div className="border-gray-400/30 py-6 text-gray-300 grid grid-cols-2 gap-y-4">
              <a href="#" className="hover:text-white">
                Docs
              </a>

              <a href="#" className="hover:text-white">
                Examples
              </a>

              <a href="#" className="hover:text-white">
                Icons
              </a>

              <a href="#" className="hover:text-white">
                Themes
              </a>

              <a href="#" className="hover:text-white">
                Blog
              </a>
            </div>

            <div className="border-gray-400/30 py-6 text-gray-300 grid grid-cols-2 gap-y-4">
              <a href="#" className="flex gap-x-2 items-center text-sm hover:text-gray-100">
                <Github className={"w-4 h-4"}/>
                Github
              </a>

              <a href="#" className="flex gap-x-2 items-center text-sm hover:text-gray-100">
                <Twitter className={"w-4 h-4"}/>
                Twitter
              </a>

              <a href="#" className="flex gap-x-2 items-center text-sm hover:text-gray-100">
                <OpenCollective className={"w-4 h-4"}/>
                OpenCollective
              </a>
              <div className="flex space-x-3 items-center pr-3">
          </div>
            </div>

            <div className="border-gray-400/30 py-6 text-gray-300">
              Bootstrap v5.3
            </div>

            <div className="border-gray-400/30 py-6 text-gray-300">
              Toggle theme
            </div>
          </DrawerContent>
        </Drawer>

      </div>
    </header>
    </>
  )
}

export default Header