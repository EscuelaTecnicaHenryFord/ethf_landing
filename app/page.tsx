import Appbar from '@/components/Appbar'
import InfoCard from '@/components/InfoCard'
import Card, { CardProps } from '@/components/LinkCard'
import SignInLarge from '@/components/SignInLarge'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { headers } from 'next/headers'

export default async function Home() {
  const session = await getServerSession(authOptions)

  const isAuthenticated = !!session?.user

  const ip = headers().get('X-Forwarded-For') || '10.0.0.0'

  let isLocal = false;
  if (
    ip.startsWith("::1") ||
    ip.startsWith("10.") ||
    ip.startsWith("127.") ||
    ip.startsWith("192") ||
    ip.startsWith("172")
  ) {
    isLocal = true;
  }

  const isStudent = isAuthenticated && session?.user?.email?.endsWith('@henryford.edu.ar') && session?.user?.email?.match(/hf[0-9]{4,4}/)
  const isStaff = isAuthenticated && !isStudent

  function renderCards(cards: CardProps[]) {
    return cards.map(card => <Card key={card.href} {...card} />)
  }

  const publicGeneralCards: CardProps[] = [
    {
      index: 1,
      href: 'https://www.henryford.edu.ar/',
      title: 'Página web',
      picture: 'https://cms.henryford.edu.ar/uploads/Web_page_0f6b618cda.JPG?updated_at=2023-03-17T16:21:40.087Z',
    },
    {
      index: 3,
      title: 'Aula virtual',
      href: 'https://www.henryford.edu.ar/moodle',
      picture: 'https://cms.henryford.edu.ar/uploads/Web_moodle_1102d20cec.JPG?updated_at=2023-03-17T16:42:57.658Z',
    },
    {
      index: 11,
      href: 'https://teams.microsoft.com/',
      title: 'Microsoft Teams',
      picture: 'https://cms.henryford.edu.ar/uploads/7_handige_Microsoft_Teams_8a97987a6f.webp?updated_at=2023-03-17T17:15:28.935Z',
    },
    {
      index: 12,
      href: 'https://office.com/',
      title: 'Office Online',
      picture: 'https://cms.henryford.edu.ar/uploads/1366_2000_f3c655f20f.jpg?updated_at=2023-03-17T17:02:26.617Z',
    }
  ]


  const generalCards: CardProps[] = [
    {
      index: 13,
      href: 'https://ethf-my.sharepoint.com/',
      title: 'Mi OneDrive',
      picture: 'https://cms.henryford.edu.ar/uploads/Microsoft_One_Drive_Header_ae7d9d2a19.png?updated_at=2023-03-17T16:48:33.282Z',
    },
    // {
    //   title: 'Rock & Ford',
    //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSfjc5X8vO1dccGA1Z35Z7tIXLMdyjJq4VujIw-lWo7AcBp4pg/viewform',
    //   picture: 'https://cms.henryford.edu.ar/uploads/rock_and_ford_ea9e52829c.png?updated_at=2023-03-17T17:09:00.932Z',
    // },
    {
      index: 14,
      href: 'https://queresto.com/FORD',
      title: 'Comedor',
      picture: 'https://cms.henryford.edu.ar/uploads/eurest_f1a4923059.jpg?updated_at=2023-03-17T17:04:51.979Z',
    },
    {
      index: 5,
      href: 'https://public.henryford.edu.ar/public/Horario%202025%20por%20d%C3%ADa.pdf',
      title: 'Horario',
      picture: 'https://cms.henryford.edu.ar/uploads/calendar_planner_collection_templates_reminder_organizer_eventin_flat_style_calendar_notification_illustration_business_plan_schedule_stock_vector_eps_10_158224_284_3cf667a545.avif?updated_at=2023-03-31T12:50:37.594Z',
    }
  ]

  const staffCards: CardProps[] = [
    {
      index: 4,
      href: 'https://rite.henryford.edu.ar/',
      title: 'RITE',
      picture: 'https://cms.henryford.edu.ar/uploads/rite_icon_61f2be7182.png?updated_at=2025-07-10T23:18:33.456Z'
    },
    {
      index: 10,
      href: 'https://outlook.office.com/',
      title: 'Outlook',
      picture: 'https://cms.henryford.edu.ar/uploads/outlook_77808450fd.png?updated_at=2023-03-17T17:19:21.040Z'
    },
    {
      index: 9,
      href: 'https://console.henryford.edu.ar/equipos',
      title: 'Notebooks',
      picture: 'https://cms.henryford.edu.ar/uploads/laptops_bdeb8ce3be.jpg?updated_at=2023-03-17T17:27:21.314Z',
    },
    {
      index: 6,
      href: 'https://console.henryford.edu.ar/comunicados',
      title: 'Cuaderno Comunicaciones',
      picture: 'https://cms.henryford.edu.ar/uploads/8244_0280abe380.jpg?updated_at=2023-05-02T23:37:33.742Z',
    },
    {
      index: 2,
      href: 'https://ethf-my.sharepoint.com/:x:/g/personal/sambrosoni_henryford_edu_ar/ESgOIyOvfy5HoSMOU7QFhpkBk0VmTlrKmqjw_R9_VDb74Q',
      title: 'Calendario 2025',
      picture: 'https://cms.henryford.edu.ar/uploads/calendario_500eaeaafc.JPG?updated_at=2023-03-17T17:12:14.852Z',
    },
    {
      index: 8,
      href: 'https://ia.henryford.edu.ar',
      title: 'IA en ETHF',
      picture: 'https://cms.henryford.edu.ar/uploads/header_conversational_ai_chatbot_speech_bubble_e954a43bf3.png?updated_at=2025-02-13T11:49:49.078Z',
    }
  ]

  const cardsToRender: CardProps[] = []

  cardsToRender.push(...publicGeneralCards)
  if (isAuthenticated) {
    cardsToRender.push(...generalCards)
  }
  if (isStaff) {
    cardsToRender.push(...staffCards)
  }

  cardsToRender.sort((a, b) => {
    if (a.index && b.index) {
      return a.index - b.index
    }
    if (a.index) {
      return -1
    }
    if (b.index) {
      return 1
    }
    return a.title.localeCompare(b.title)
  })

  return (
    <div>
      <header>
        <Appbar />
      </header>
      <main>
        <div className='my-8 mt-[60px] sm:my-[80px] text-center'>
          <h1 className='text-4xl ETHF font-extrabold text-purple-600'>Landing ETHF</h1>
          <p className='text-lg my-2'>Links y aplicaciones</p>
        </div>
        <div className='mx-auto container'>
          {isStudent && <InfoCard>Dejar los lockers vacios y abiertos antes del 14 de julio</InfoCard>}
        </div>
        <div className='grid-cols-2 grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 sm:gap-[3px] sm:p-5'>
          {renderCards(cardsToRender)}
        </div>
        {!isAuthenticated && <SignInLarge />}
        <div className='mt-5 w-full'></div>
      </main>
    </div>
  )
}
