import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"

export default function comp() {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-br from-[#6b46c1] to-[#b794f4] dark:from-[#1e293b] dark:to-[#475569] relative">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-[0] blur-sm"
  >
    <source src="/video1.mp4" type="video/mp4" />
  </video>

  <div className="container max-w-4xl px-4 py-12 mx-auto text-center z-[1]">
    <div className="space-y-4 py-20">
      <h1 className="text-7xl font-bold text-white md:text-8xl">Welcome to </h1>
      <h1 className="text-7xl font-bold text-[#805ad5] md:text-8xl">Cognitive Cleanse</h1>
      
      <p className="text-lg text-gray-200 md:text-xl">
        Unlock your full potential by overcoming cognitive distortions.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#805ad5] rounded-md shadow-sm hover:bg-[#6b46c1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#805ad5]"
          href="/dashboard"
        >
          Get Started
        </Link>
        <Link
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#805ad5] bg-white rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#805ad5]"
          href="#"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</main>
      <section className="py-16 bg-white dark:bg-[#1e293b]">
        <div className="container max-w-4xl px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#805ad5]">Overcome Cognitive Distortions</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Cognitive Cleanse is an AI-powered app that helps you identify and overcome cognitive distortions. By
                understanding your thought patterns, you can learn to challenge and reshape your mindset for greater
                well-being.
              </p>
              <div className="flex space-x-4">
                <Link
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#805ad5] rounded-md shadow-sm hover:bg-[#6b46c1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#805ad5]"
                  href="/cleanse"
                >
                  Start Cleansing
                </Link>
                <Link
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#805ad5] bg-white rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#805ad5]"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div>
              <img
                alt="Cognitive Cleanse"
                className="w-full h-auto rounded-md"
                height={400}
                src="/1.jpg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100 dark:bg-[#0f172a]">
        <div className="container max-w-4xl px-4 mx-auto">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-[#805ad5]">How Cognitive Cleanse Works</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Cognitive Cleanse uses an AI-based system to help you identify and overcome cognitive distortions. Here's
              how it works:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
            <div className="p-6 bg-white rounded-md shadow-md dark:bg-[#1e293b]">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[#805ad5] rounded-full">
                <ClipboardListIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#805ad5]">Daily AI Prompts</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Input your thoughts and the app will analyze your thinking patterns and identify cognitive distortions.
              </p>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md dark:bg-[#1e293b]">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[#805ad5] rounded-full">
                <BarChartIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#805ad5]">Progress Tracking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Monitor your progress over time with our intuitive data visualization tools.
              </p>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md dark:bg-[#1e293b]">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[#805ad5] rounded-full">
                <LightbulbIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#805ad5]">Reforming Exercises</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Receive personalized exercises and strategies to help you overcome your cognitive distortions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white dark:bg-[#1e293b]">
        <div className="container max-w-4xl px-4 mx-auto">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-[#805ad5]">Join the Cognitive Cleanse Community</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Connect with others, share your experiences, and seek support on your journey to better mental well-being.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
            <div className="p-6 bg-white rounded-md shadow-md dark:bg-[#1e293b]">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[#805ad5] rounded-full">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#805ad5]">Community Forum</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Share your experiences, ask questions, and connect with others working to overcome cognitive
                distortions.
              </p>
              <div className="mt-4">
                <Link
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#805ad5] rounded-md shadow-sm hover:bg-[#6b46c1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#805ad5]"
                  href="/join"
                >
                  Join the Community
                </Link>
              </div>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md dark:bg-[#1e293b]">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-[#805ad5] rounded-full">
                <UserIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#805ad5]">Personal Support</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect with our team of experts who can provide personalized guidance and support on your cognitive
                cleansing journey.
              </p>
              <div className="mt-4">
                <Link
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#805ad5] rounded-md shadow-sm hover:bg-[#6b46c1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#805ad5]"
                  href="/support"
                >
                  Get Personal Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-8 bg-gray-100 dark:bg-[#0f172a]">
        <div className="container max-w-4xl px-4 mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">© 2024 Cognitive Cleanse. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function ClipboardListIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  )
}


function LightbulbIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
