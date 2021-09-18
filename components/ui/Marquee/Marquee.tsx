import { FC, ReactNode } from 'react'
import Ticker from 'react-ticker'
import s from './Marquee.module.css'
import cn from 'classnames'

interface Props {
  children: ReactNode | ReactNode[]
  variant?: 'primary' | 'secondary'
}

const Marquee: FC<Props> = ({ children, variant = 'primary' }) => {
  // s.root'u direk al variany = secondary ise onuda al
  const rootClassName = cn(s.root, {
    [s.secondary]: variant === 'secondary',
  })

  return (
    <div className={rootClassName}>
      <Ticker offset={80}>
        {() => <div className={s.container}>{children}</div>}
      </Ticker>
    </div>
  )
}

export default Marquee
