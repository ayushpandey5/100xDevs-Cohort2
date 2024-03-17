import {useRecoilValue} from 'recoil'
import { navAtom } from '../store/atoms/atoms';

export default function Navbar() {
    const { network, jobs, notification, messages } = useRecoilValue(navAtom);
    const networkCount = network.length >= 100 ? "99+" : network.length;
    const jobsCount = jobs.length >= 100 ? "99+" : jobs.length
    const notificationCount = notification.length >= 100 ? "99+" : notification.length
    const messagesCount = messages.length >= 100 ? "99+" : messages.length

  return (
    <div>
        <button>Home</button>

        <button>My Network ({networkCount})</button>
        <button>Jobs ({jobsCount})</button>
        <button>Messaging ({messagesCount})</button>
        <button>Notification ({notificationCount})</button>

        <button>Me</button>
    </div>
  )
}
