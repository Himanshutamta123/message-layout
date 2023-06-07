import Allmessage from '@/components/messages/All-messages/Allmessage'
import Profile from '../components/Profile'
import Chat from './[id]/page'


export default function Home() {
  return (
    <main className="flex w-[100%] flex-col md:flex-row">
      <div className='w-[100%] xl:w-[25%] md:w-[40%]  md:block '><Allmessage /></div>
      <div className='w-[100%] xl:w-[50%] md:w-[60%] bg-black 2xl:w-[100%]'><Chat /></div>
    </main>
  )
}
 