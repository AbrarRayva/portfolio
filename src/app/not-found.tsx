import Link from 'next/link'
import Button from "@/components/ui/Button";
 
export default function NotFound() {
  return (
    <div className='w-screen h-screen bg-blue-brand-1 flex items-center justify-center'>
        <div className='flex flex-col gap-6 text-center items-center'>
            <h1 className="font-instrument-sans leading-tight tracking-tighter text-2xl sm:text-4xl md:text-6xl border-t-1 border-b-1 border-gray/20">
                pageNotFound()
            </h1>
            <Link href="/">
                <Button className="uppercase" variant='white'>Go Back</Button>
            </Link>
        </div>
    </div>
  )
}