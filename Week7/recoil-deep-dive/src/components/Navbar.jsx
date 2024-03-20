import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil'
import { fetchNavAtom, navAtom, navSelector } from '../store/atoms/atoms';
import axios from 'axios'
import { useEffect } from 'react';


export default function Navbar() {

    //const [{ network, jobs, notification, messages }, setNavAtom] = useRecoilState(navAtom);
    const fetchNav = useRecoilValue(fetchNavAtom)
    // const networkCount = network.length >= 100 ? "99+" : network.length;
    // const jobsCount = jobs.length >= 100 ? "99+" : jobs.length
    // const notificationCount = notification.length >= 100 ? "99+" : notification.length
    // const messagesCount = messages.length >= 100 ? "99+" : messages.length


    const networkCount = fetchNav.network
    const jobsCount = fetchNav.jobs
    const notificationCount = fetchNav.notifications
    const messagesCount = fetchNav.messaging
    // //const total = useSetRecoilState(navSelector)
    const total = networkCount + jobsCount + notificationCount + messagesCount



  return (
    <div>
        <button>Home</button>

        {/* <button>My Network ({networkCount})</button>
        <button>Jobs ({jobsCount})</button>
        <button>Messaging ({messagesCount})</button>
        <button>Notification ({notificationCount})</button> */}

        <button>My Network ({networkCount})</button>
        <button>Jobs ({jobsCount})</button>
        <button>Messaging ({messagesCount})</button>
        <button>Notification ({notificationCount})</button>

        <button>Me ({total})</button>
    </div>
  )
}
