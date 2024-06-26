/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/eLiyCFw5ZqE
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"

export function Cleanse() {
  return (
    (<div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link className="text-2xl font-bold text-gray-900 dark:text-gray-100" href="#">
            Mindful Insights
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              href="#">
              Assess
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              href="#">
              Learn
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              href="#">
              Practice
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              href="#">
              Progress
            </Link>
          </nav>
          <Button variant="primary">Get Started</Button>
        </div>
      </header>
      <main className="flex-1 py-12">
        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Unlock Your Cognitive Potential</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Identify and overcome cognitive distortions to improve your overall well-being.
              </p>
              <div className="flex space-x-4">
                <Button variant="primary">Assess Yourself</Button>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
            <div>
              <img
                alt="Cognitive Health App"
                className="rounded-lg"
                height={500}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width={500} />
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
              <ClipboardIcon className="w-8 h-8 text-gray-900 dark:text-gray-50" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Assess Your Thoughts</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Identify cognitive distortions and understand how they impact your well-being.
              </p>
              <Link className="text-gray-900 hover:underline dark:text-gray-50" href="#">
                Start Assessing
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
              <BookIcon className="w-8 h-8 text-gray-900 dark:text-gray-50" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Learn About Biases</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore common cognitive biases and how they shape our thoughts and behaviors.
              </p>
              <Link className="text-gray-900 hover:underline dark:text-gray-50" href="#">
                Dive Into Learning
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 space-y-4">
              <RefreshCwIcon className="w-8 h-8 text-gray-900 dark:text-gray-50" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Practice Mindfulness</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Engage in exercises to reshape your mindset and improve your overall well-being.
              </p>
              <Link className="text-gray-900 hover:underline dark:text-gray-50" href="#">
                Start Practicing
              </Link>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Track Your Progress</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Monitor your cognitive health journey and receive personalized insights to help you improve.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Thought Patterns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <LineChart className="w-full aspect-[4/3]" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Cognitive Biases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BarChart className="w-full aspect-[4/3]" />
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <img
                alt="Track Progress"
                className="rounded-lg"
                height={500}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/500",
                  objectFit: "cover",
                }}
                width={500} />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <p className="text-gray-600 dark:text-gray-400">© 2024 Mindful Insights. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              href="#">
              Privacy
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              href="#">
              Terms
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              href="#">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>)
  );
}

function BarChart(props) {
  return (
    (<div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data" />
    </div>)
  );
}


function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>)
  );
}


function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path
        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>)
  );
}


function LineChart(props) {
  return (
    (<div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application" />
    </div>)
  );
}


function RefreshCwIcon(props) {
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
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>)
  );
}
