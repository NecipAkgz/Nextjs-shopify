import { FC } from 'react'
import Link from 'next/link'
import s from './Usernav.module.css'
import { Heart, Bag as Cart } from '../../icons/'
import { useUI } from '@components/ui/context'

const Usernav: FC = () => {
  const { openSidebar } = useUI()
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Cart onClick={openSidebar} />
        </li>
        <li className={s.item}>
          <Link href='/wishlist'>
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>

  )
}

export default Usernav
