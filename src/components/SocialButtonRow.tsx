import { GitHubLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import MailButton from './MailButton'
import { Button } from './ui/button'

export default function SocialButtonRow() {
  return (
    <div className='flex justify-between w-full'>
      <a href='https://github.com/kyeshmz'>
        <Button variant='outline' className='flex justify-between'>
          <GitHubLogoIcon />
          <p>@kyeshmz</p>
        </Button>
      </a>
      <a href='https://twitter.com/kyeshimizu'>
        <Button variant='outline' className='flex justify-between'>
          <TwitterLogoIcon />
          <p>@kyeshimizu</p>
        </Button>
      </a>
      <a href='https://linkedin.com/in/kye-shimizu-363805a8'>
        <Button variant='outline' className='flex justify-between'>
          <LinkedInLogoIcon />
          <p>@kyeshmz</p>
        </Button>
      </a>
      <MailButton />
    </div>
  )
}
