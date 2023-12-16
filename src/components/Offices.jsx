import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="SailFuture Academy" invert={invert}>
          SailFuture Academy
          <br />
          2154 27th Ave N, Saint Petersburg FL 33713
          <br />
          info@sailfuture.org
        </Office>
      </li>
      <li>
        <Office name="Contact" invert={invert}>
          Contact 
          <br />
          mlong@sailfuture.org
          <br />
          (727) 967-6495
        </Office>
      </li>
    </ul>
  )
}
