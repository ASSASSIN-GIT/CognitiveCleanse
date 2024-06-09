/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JwYUKVPlAQl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <>
  <div clasName="bg-gray-100">
      <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#805ad5]">Join the Cognitive Cleanse Community</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Our supportive group focuses on mindfulness, meditation, and mental wellness practices to help members
              achieve a 'cognitive cleanse' and reduce stress and anxiety.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#805ad5]">Join the Community</CardTitle>
                <CardDescription>Fill out the form below to apply for membership.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#805ad5]">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#805ad5]">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reason" className="text-[#805ad5]">Reason for Joining</Label>
                  <Textarea
                    className="min-h-[100px]"
                    id="reason"
                    placeholder="Share why you'd like to join the community"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-[#805ad5]">Bio</Label>
                  <Textarea className="min-h-[100px]" id="bio" placeholder="Tell us a bit about yourself" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto bg-blue-500 text-white font-bold py-2 px-4 rounded  " type="submit" >
                  Submit Application
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      </div>
    </>
  
  )
}