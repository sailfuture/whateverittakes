import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
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

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="SailFuture Academy" invert={invert}>
          2154 27th Ave N
          <br />
          Saint Petersburg, FL 33713
          <br />
          info@sailfuture.org
        </Office>
      </li>
      <li>
        <Office name="Michael Long" invert={invert}>
          Chief Executive Officer
          <br />
          (727) 967-6495
          <br />
          mlong@sailfuture.org
        </Office>
      </li>
    </ul>
  )
}
