import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'

export default function CopyClipboardText({ title }: { title: string }) {
  const { toast } = useToast()
  const notify = () => toast({ title: 'Copied successfully!' })
  return (
    <CopyToClipboard text='hello@kyeshimizu.com' onCopy={() => notify()}>
      <p className='pointer' onClick={() => notify()}>
        {title}
      </p>
    </CopyToClipboard>
  )
}
