import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { useToast } from './ui/use-toast'

export default function SocialButtonRow() {
  const { toast } = useToast()
  const notify = () => toast({ title: 'Copied successfully!' })

  return (
    <div className='flex flex-col gap-2 animate-in  duration-700 fade-in fade-out'>
      <p>Socials</p>
      <Separator />
      <div className='flex md:flex-row flex-col min-w-0 flex-wrap gap-4'>
        <SocialButton href='https://github.com/kyeshmz'>
          <GitHubLogoIcon />
          <p>@kyeshmz</p>
        </SocialButton>
        <SocialButton href='https://instagram.com/kyeshimizu'>
          <InstagramLogoIcon />
          <p>@kyeshimizu</p>
        </SocialButton>
        <SocialButton href='https://twitter.com/kyeshimizu'>
          <TwitterLogoIcon />
          <p>@kyeshimizu</p>
        </SocialButton>
        <SocialButton href='https://linkedin.com/in/kye-shimizu-363805a8'>
          <LinkedInLogoIcon />
          <p>@kyeshimizu</p>
        </SocialButton>

        <CopyToClipboard text='hello@kyeshimizu.com'>
          <Button variant='secondary' className='flex gap-2  justiy-center' onClick={notify}>
            <EnvelopeClosedIcon />
            <p className='text-sm'>hello@kyeshimizu.com</p>
          </Button>
        </CopyToClipboard>
      </div>
    </div>
  )
}

function SocialButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer prefetch-intent'>
      <Button variant='secondary' className='w-full gap-2 flex justify-center'>
        {children}
      </Button>
    </a>
  )
}
