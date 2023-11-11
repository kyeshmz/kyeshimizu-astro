import { MailIcon } from 'lucide-react'
import { Button } from './ui/button'
import { toast } from 'react-toastify'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function MailButton() {
  const notify = () => toast.success('Copied successfully!')

  return (
    <CopyToClipboard text='hello@kyeshimizu.com'>
      <Button variant='outline' className='flex space-between' onClick={notify}>
        <MailIcon />
        <p>hello@kyeshimizu.com</p>
      </Button>
    </CopyToClipboard>
  )
}
