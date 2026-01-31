import { Code2, Zap, Lightbulb, Heart } from 'lucide-react';
import Image from 'next/image';
import Me from '@/app/about/dv.avif'
import Link from 'next/link';
import { SiExpress, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si';




export default function About() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
            <div className="max-w-6xl mx-auto">

                <div className="space-y-6  ">
                    <h2 className="text-4xl flex flex-col justify-center items-center font-bold text-white">
                            Hi, I'm  <span className="bg-gradient-to-l from-green-400 to-black bg-clip-text text-transparent mt-2">Emmanuel Oluwatobi Awe</span>
                    </h2>
                    <p className="text-xl md:text-1xl text-gray-400 max-w-3xl mx-auto">
                        I'm a <span className=" text-green-500">Full Stack Developer</span> with a passion for creating beautiful, 
                        functional web applications. With expertise in the MERN stack, 
                        I bring ideas to life through clean code and intuitive design.
                    </p>    
                        
                        <div className="hidden md:flex text-3xl  flex-row gap-6 justify-center items-center">
                            <div className="p-2 px-4 gap-2 flex justify-center items-center  bg-gray-900/50 border-1  border-gray-500/50 rounded-4xl">
                                <div className=" text-lg text-yellow-500">
                                    <SiJavascript/>
                                </div>
                                    <p className='text-xl mt-1 text-gray-500'>JavaScript</p>
                            </div>

                            <div className="p-2  px-4 gap-2 flex justify-center items-center  bg-gray-900/50 border-1  border-gray-500/50 rounded-4xl">
                                <div className=" text-lg text-blue-500">
                                    <SiTailwindcss/>
                                </div>
                                    <p className='text-xl mt-1 text-gray-500'>Tailwind</p>
                            </div>

                            <div className="p-2 px-4 gap-2 flex justify-center items-center  bg-gray-900/50 border-1  border-gray-500/50 rounded-4xl">
                                <div className="text-xl text-blue-500">
                                    <SiReact/>
                                </div>
                                    <p className='text-xl mt-1 text-gray-500 '>React</p>
                            </div>                        

                            <div className="p-2 px-4 gap-2 flex justify-center items-center  bg-gray-900/50 border-1  border-gray-500/50 rounded-4xl">
                                <div className="text-xl">
                                    <SiNextdotjs/>
                                </div>
                                    <p className="text-xl mt-1 text-gray-500">Next.js</p>
                            </div>

                            <div className="p-1.5 px-2 gap-2 flex justify-center items-center  bg-gray-900/50 border-1  border-gray-500/50 rounded-4xl">
                                <div className="text-xl text-green-500">
                                    <SiNodedotjs/>
                                </div>
                                    <p className='text-xl mt-1 text-gray-500'>Node.js</p>
                            </div>

                            <div className="p-2 px-4 gap-2 flex justify-center items-center  bg-gray-900/50 border-1 border-gray-500/50 rounded-4xl">
                                <div className="text-xl text-gray-500">
                                    <SiExpress/>
                                </div>
                                    <p className='text-xl mt-1 text-gray-500'>Express</p>
                            </div>
                        </div>

                                <br />          
                            <div className="hidden md:flex items-center justify-center">            
                                <Link
                                    href="/conntact"
                                    className='group px-3 py-2   bg-white/5 backdrop-blur-lg border-2 border-white/10 text-white font-semibold rounded-xl hover:border-white/20  transition-all'>
                                    <span className="relative z-10 mt-2 flex items-center">Connect with me</span>
                                        {/* shinning effect */}
                                    <div className="w-5 h-2 group-hover:translate-x-1 transition-transform"></div>
                                </Link>
                            </div>
                       
                </div>

            </div>
        </section>

        {/* Bio Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Image Side */}
                        <div className="relative">
                            <div className="w-full aspect-square bg-gradient-to-br from-black-500 to-green-500 rounded-2xl">

                                <Image className='w-full  aspect-square ' 
                                src="/dv.avif"
                                alt ="this is an image"
                                width = {300}
                                height={100}
                                quality={0}/>

                            </div>

                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-0"></div>
                        </div>

                        {/* Text Side */}
                        <div className="text-center space-y-6">
                                <h1 className="text-5xl md:text-5xl font-bold text-white">
                                About Me
                                </h1>
                                <p className="text-xl md:text-1xl text-gray-400 max-w-3xl mx-auto">
                                Hello, I'm Emmanuel, a passionate web developer with a degree in Computere Science. I transform visionary ideas into functional applications and working software. Whether it's crafting 
                                sleek front-end interfaces, developing robust back-end systems, or integrating APIs and databases.
                                if it interacts with users or fuels a sserver, I've likely built and developed it with precision and flair.
                                </p>

                                {/* Quick Stats */}
                                <div className="flex items-center justify-center gap-8 pt-4 pb-2">
                                    <div className="text-center">
                                    <div className="text-3xl font-bold text-white">3+</div>
                                    <div className="text-gray-400 text-sm">Years Experience</div>
                                    </div>
                                    <div className="text-center">
                                    <div className="text-3xl font-bold text-white">2+</div>
                                    <div className="text-gray-400 text-sm">Projects Done</div>
                                    </div>
                                    <div className="text-center">
                                    <div className="text-3xl font-bold text-white">100%</div>
                                    <div className="text-gray-400 text-sm">Client Satisfaction</div>
                                    </div>
                                </div>

                        </div>

                        <div className="flex md:grid-cols-3 lg:grid-cols-4 gap-8">
                            <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Zap className="text-white" size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Backend</h3>
                                <p className="text-gray-400">
                                    Creating robust APIs and server-side applications with Node.js, Express, and MongoDB.

                                    REST APIs, auth, DB design, caching, and production-ready deployments
                                </p>
                            </div>

                             {/* <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Zap className="text-white" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Backend Development</h3>
                                <p className="text-gray-400">
                                    Creating robust APIs and server-side applications with Node.js, Express, and MongoDB.
                                </p>
                            </div>

                             <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Zap className="text-white" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Backend Development</h3>
                                <p className="text-gray-400">
                                    Creating robust APIs and server-side applications with Node.js, Express, and MongoDB.
                                </p>
                            </div>

                             <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Zap className="text-white" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Backend Development</h3>
                                <p className="text-gray-400">
                                    Creating robust APIs and server-side applications with Node.js, Express, and MongoDB.
                                </p>
                            </div> */}
                        </div>


                    </div>
                </div>
            </section>

        {/* What I Do Section */}
        <section className="py-20 px-4 bg-gray-900/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-16">
                    What I Do
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Code2 className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Frontend Development</h3>
                            <p className="text-gray-400">
                                Building responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.
                            </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Zap className="text-white" size={24} />
                    </div>
                        <h3 className="text-xl font-bold text-white mb-2">Backend Development</h3>
                        <p className="text-gray-400">
                            Creating robust APIs and server-side applications with Node.js, Express, and MongoDB.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Lightbulb className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">UI/UX Design</h3>
                    <p className="text-gray-400">
                        Designing intuitive and beautiful user experiences that delight users and achieve business goals.
                    </p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Heart className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Problem Solving</h3>
                        <p className="text-gray-400">
                            Tackling complex challenges with creative solutions and a focus on clean, maintainable code.
                        </p>
                    </div>

                    {/* Card 4
                    <div className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Heart className="text-white" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Problem Solving</h3>
                        <p className="text-gray-400">
                            Tackling complex challenges with creative solutions and a focus on clean, maintainable code.
                        </p>
                    </div> */}

                </div>
            </div>
        </section>
        </div>
    );
}
