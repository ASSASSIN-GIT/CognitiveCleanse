/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/GxAzKqpz0Lq
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
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function experts() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div
          className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Personal Support for Your Cognitive Cleansing Journey
            </h2>
            <p
              className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Connect with our team of experts to guide you through your personal cognitive cleansing journey. Get the
              support you need to achieve your goals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <Avatar className="border w-16 h-16">
                  <AvatarImage alt="Expert" src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>Cognitive Cleansing Expert</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                  John has over 10 years of experience guiding individuals through their cognitive cleansing journeys.
                  He specializes in mindfulness techniques and personalized support.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Chat
                  </Button>
                  <Button size="sm" variant="outline">
                    Video Call
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full max-w-sm">
              <CardHeader>
                <Avatar className="border w-16 h-16">
                  <AvatarImage alt="Expert" src="/placeholder-user.jpg" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <CardTitle>Sarah Anderson</CardTitle>
                <CardDescription>Cognitive Cleansing Coach</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                  Sarah is a certified cognitive cleansing coach with a passion for helping individuals achieve their
                  personal growth goals. She uses a holistic approach to support her clients.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Chat
                  </Button>
                  <Button size="sm" variant="outline">
                    Video Call
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full max-w-sm">
              <CardHeader>
                <Avatar className="border w-16 h-16">
                  <AvatarImage alt="Expert" src="/placeholder-user.jpg" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <CardTitle>Michael Johnson</CardTitle>
                <CardDescription>Cognitive Cleansing Specialist</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-500 dark:text-gray-400">
                  Michael is a highly sought-after cognitive cleansing specialist with a deep understanding of the
                  latest research and techniques. He provides personalized guidance and support.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Chat
                  </Button>
                  <Button size="sm" variant="outline">
                    Video Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>)
  );
}
