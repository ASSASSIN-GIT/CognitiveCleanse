/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/KPBMmXN0hjK
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Manrope } from 'next/font/google'
import { Poppins } from 'next/font/google'

manrope({
  subsets: ['latin'],
  display: 'swap',
})

poppins({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function comp() {
  return (
    (<div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 md:px-8 lg:px-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <BrainIcon className="w-8 h-8 mr-2" />
            <h1 className="text-2xl font-bold">Cognitive Cleanse</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link className="hover:text-gray-300" href="#">
              Home
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Dashboard
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Profile
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Community
            </Link>
          </nav>
          <Button className="hidden md:inline-flex" variant="outline">
            Get Started
          </Button>
        </div>
      </header>
      <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Unlock Your Cognitive Potential
              </h2>
              <p
                className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8">
                Cognitive Cleanse helps you identify and overcome cognitive distortions, empowering you to think more
                clearly and make better decisions.
              </p>
              <div className="flex space-x-4">
                <Button variant="primary">Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                alt="Cognitive Cleanse"
                className="rounded-lg shadow-lg"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/400",
                  objectFit: "cover",
                }}
                width={500} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            Your Cognitive Cleansing Dashboard
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <LightbulbIcon className="w-8 h-8 mr-2 text-blue-500" />
                <h3 className="text-xl font-bold">Daily Prompt</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Receive an AI-powered daily prompt that analyzes your thinking patterns and identifies cognitive
                distortions.
              </p>
              <Button variant="primary">View Today's Prompt</Button>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <LineChartIcon className="w-8 h-8 mr-2 text-green-500" />
                <h3 className="text-xl font-bold">Progress Tracker</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Track your progress over time with a visual graph that shows your improvement in overcoming cognitive
                distortions.
              </p>
              <Button variant="primary">View Progress</Button>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <CompassIcon className="w-8 h-8 mr-2 text-yellow-500" />
                <h3 className="text-xl font-bold">Distortion Identifier</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Gain insights into your mental biases and learn how to overcome them with our distortion identifier and
                reforming exercises.
              </p>
              <Button variant="primary">Identify Distortions</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            Manage Your Account
          </h2>
          <div
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
            <div className="flex items-center mb-6">
              <Avatar className="mr-4">
                <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-gray-600 dark:text-gray-400">john@example.com</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input defaultValue="johndoe" id="username" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input defaultValue="john@example.com" id="email" type="email" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button variant="primary">Save Changes</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            Connect with the Community
          </h2>
          <div
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              <div
                className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-4 md:p-6 lg:p-8">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4">
                    <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">John Doe</h3>
                    <p className="text-gray-600 dark:text-gray-400">Cognitive Cleanse Enthusiast</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "Cognitive Cleanse has been a game-changer for me. It's helped me identify and overcome my cognitive
                  biases, leading to better decision-making and a more positive mindset."
                </p>
                <div className="flex justify-end">
                  <Button variant="outline">View Profile</Button>
                </div>
              </div>
              <div
                className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-4 md:p-6 lg:p-8">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4">
                    <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">Jane Smith</h3>
                    <p className="text-gray-600 dark:text-gray-400">Cognitive Cleanse Advocate</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "I highly recommend Cognitive Cleanse to anyone looking to improve their mental well-being. The app's
                  insights and exercises have been invaluable in helping me overcome my cognitive distortions."
                </p>
                <div className="flex justify-end">
                  <Button variant="outline">View Profile</Button>
                </div>
              </div>
              <div
                className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-4 md:p-6 lg:p-8">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4">
                    <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">Michael Johnson</h3>
                    <p className="text-gray-600 dark:text-gray-400">Cognitive Cleanse Supporter</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "I'm so grateful for the Cognitive Cleanse community. The support and shared experiences have been
                  invaluable in my journey to overcome my cognitive biases. It's truly a transformative app."
                </p>
                <div className="flex justify-end">
                  <Button variant="outline">View Profile</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-6 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <BrainIcon className="w-6 h-6 mr-2" />
            <span className="text-lg font-bold">Cognitive Cleanse</span>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link className="hover:text-gray-300" href="#">
              Home
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Dashboard
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Profile
            </Link>
            <Link className="hover:text-gray-300" href="#">
              Community
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link className="hover:text-gray-300" href="#">
              <TwitterIcon className="w-6 h-6" />
            </Link>
            <Link className="hover:text-gray-300" href="#">
              <GithubIcon className="w-6 h-6" />
            </Link>
            <Link className="hover:text-gray-300" href="#">
              <LinkedinIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>)
  );
}

function BrainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path
        d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M19.967 17.484A4 4 0 0 1 18 18" />
    </svg>)
  );
}


function CompassIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>)
  );
}


function GithubIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>)
  );
}


function LightbulbIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>)
  );
}


function LineChartIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>)
  );
}


function LinkedinIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>)
  );
}


function TwitterIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>)
  );
}
