import { GitHubLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import MailButton from './MailButton'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export default function SocialButtonRow() {
  return (
    <div className='flex flex-col'>
      <p>Socials</p>
      <Separator />
      <div className='flex justify-between w-full'>
        <a href='https://github.com/kyeshmz' target='_blank' rel='noopener noreferrer'>
          <Button variant='outline' className='flex justify-between'>
            <GitHubLogoIcon />
            <p>@kyeshmz</p>
          </Button>
        </a>
        <a href='https://twitter.com/kyeshimizu' target='_blank' rel='noopener noreferrer'>
          <Button variant='outline' className='flex justify-between'>
            <TwitterLogoIcon />
            <p>@kyeshimizu</p>
          </Button>
        </a>
        <a
          href='https://linkedin.com/in/kye-shimizu-363805a8'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button variant='outline' className='flex justify-between'>
            <LinkedInLogoIcon />
            <p>@kyeshimizu</p>
          </Button>
        </a>
        <MailButton />
      </div>
    </div>
  )
}
