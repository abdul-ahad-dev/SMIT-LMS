import Courselist from './courselist'
import { Tabs, TabsContent } from "@/components/ui/tabs"
function StudentCourse() {
  return (
    <div className="w-full space-y-6 p-10 pb-16">
       <div className="space-y-0.5">
				<h2 className="text-2xl font-bold tracking-tight">All Batches Courses</h2>
				<p className="text-muted-foreground">
        Explore and dive into all the courses you are currently enrolled in, right here!
				</p>
			</div>
      <Tabs>
				<TabsContent className='w-full sm:w-auto'>
					<Courselist />
				</TabsContent>
			</Tabs>
    </div>
  )
}

export default StudentCourse